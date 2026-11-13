// The only server code on the site. It receives the booking form at POST /api/book,
// stores the request in the LEADS database, then relays it by email through FormSubmit.
// The lead is stored before the email is attempted, so a relay outage never loses one.

const LANGS = ['en', 'de', 'fr'];
const EMAIL_RE = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/;
const LIMITS = { name: 120, email: 200, company: 160, role: 160, challenge: 1200, consent_text: 400, page: 200 };
const MARKETS = ['Switzerland', 'European Union', 'United Kingdom', 'Other'];
const PRODUCTS = ['Crypto exchange or broker', 'Neobank or challenger', 'Fintech and bank partnership', 'B2B fintech', 'Blockchain protocol', 'Other'];

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/api/book') return book(request, env, ctx, url);
    if (url.pathname.startsWith('/api/')) return json({ ok: false, error: 'not_found' }, 404);
    return env.ASSETS.fetch(request);
  },
};

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });

const clean = (v, max) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
const pick = (values, allowed) => [...new Set(values.map(String))].filter((v) => allowed.includes(v)).join(', ');

async function read(request) {
  const type = request.headers.get('content-type') || '';
  if (type.includes('application/json')) {
    const b = await request.json();
    const list = (v) => (Array.isArray(v) ? v : v ? [v] : []);
    return { get: (k) => b[k], all: (k) => list(b[k]) };
  }
  const f = await request.formData();
  return { get: (k) => f.get(k), all: (k) => f.getAll(k) };
}

async function book(request, env, ctx, url) {
  if (request.method !== 'POST') return json({ ok: false, error: 'method' }, 405);
  // A browser always sends Origin on a form post, so a post from another site is refused.
  const origin = request.headers.get('origin');
  if (origin && new URL(origin).host !== url.host) return json({ ok: false, error: 'origin' }, 403);

  const wantsJson = (request.headers.get('accept') || '').includes('application/json');
  let input;
  try { input = await read(request); } catch { return json({ ok: false, error: 'unreadable' }, 400); }

  const lang = LANGS.includes(input.get('lang')) ? input.get('lang') : 'en';
  const prefix = lang === 'en' ? '' : '/' + lang;
  const done = () => (wantsJson ? json({ ok: true, next: prefix + '/book-a-diagnostic/thanks/' }) : Response.redirect(url.origin + prefix + '/book-a-diagnostic/thanks/', 303));

  // People never see the "website" field, so a filled one is a bot. It gets the same answer and nothing is stored.
  if (clean(input.get('website'), 10)) return done();

  const lead = {
    name: clean(input.get('name'), LIMITS.name),
    email: clean(input.get('email'), LIMITS.email).toLowerCase(),
    company: clean(input.get('company'), LIMITS.company),
    role: clean(input.get('role'), LIMITS.role),
    markets: pick(input.all('markets'), MARKETS),
    product: pick(input.all('product'), PRODUCTS),
    challenge: clean(input.get('challenge'), LIMITS.challenge),
    consent_text: clean(input.get('consent_text'), LIMITS.consent_text),
    page: clean(input.get('page'), LIMITS.page) || prefix + '/book-a-diagnostic/',
  };
  const missing = ['name', 'email', 'company', 'role', 'challenge'].filter((k) => !lead[k]);
  if (lead.email && !EMAIL_RE.test(lead.email)) missing.push('email');
  if (input.get('consent') !== 'yes') missing.push('consent');
  if (missing.length) return wantsJson ? json({ ok: false, error: 'invalid', fields: [...new Set(missing)] }, 422) : Response.redirect(url.origin + lead.page, 303);

  const ts = new Date().toISOString();
  let id;
  try {
    const row = await env.LEADS.prepare(
      `INSERT INTO leads (ts, lang, name, email, company, role, markets, product, challenge, consent_text, page, notified)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending') RETURNING id`,
    ).bind(ts, lang, lead.name, lead.email, lead.company, lead.role, lead.markets, lead.product, lead.challenge, lead.consent_text, lead.page).first();
    id = row.id;
  } catch (err) {
    console.error('book: store failed', err && err.message);
    return json({ ok: false, error: 'store' }, 500);
  }

  ctx.waitUntil(notify(env, url, lead, lang, ts).then((state) => env.LEADS.prepare('UPDATE leads SET notified = ? WHERE id = ?').bind(state, id).run()));
  return done();
}

// FormSubmit is a free relay: it turns this request into an email to NOTIFY_EMAIL.
// The first request to a new address sends that address an activation link instead of the lead.
async function notify(env, url, lead, lang, ts) {
  if (!env.NOTIFY_EMAIL) return 'off';
  try {
    const res = await fetch('https://formsubmit.co/ajax/' + encodeURIComponent(env.NOTIFY_EMAIL), {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json', origin: url.origin, referer: url.origin + lead.page },
      body: JSON.stringify({
        _subject: 'Revault diagnostic request: ' + lead.company,
        _replyto: lead.email,
        _template: 'table',
        _captcha: 'false',
        Name: lead.name,
        Email: lead.email,
        Company: lead.company,
        Role: lead.role,
        Markets: lead.markets || 'not given',
        'Product area': lead.product || 'not given',
        Challenge: lead.challenge,
        Language: lang,
        Page: url.origin + lead.page,
        Received: ts,
      }),
      signal: AbortSignal.timeout(10000),
    });
    const body = await res.json().catch(() => ({}));
    const ok = res.ok && String(body.success) === 'true';
    if (!ok) console.error('book: relay refused', res.status, body && body.message);
    return ok ? 'sent' : 'failed';
  } catch (err) {
    console.error('book: relay failed', err && err.message);
    return 'failed';
  }
}
