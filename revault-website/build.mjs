// Static site generator for the Revault website. No dependencies: reads src/content, writes dist/.
import { mkdirSync, writeFileSync, copyFileSync, readFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import config from './site.config.mjs';
import enPages from './src/content/index.mjs';
import en from './src/i18n/en.mjs';

const root = dirname(fileURLToPath(import.meta.url));
// THEME=v2 builds the second design into dist-v2: the same pages, with src/styles-v2.css layered over src/styles.css.
const THEME = process.env.THEME || '';
const out = join(root, THEME ? `dist-${THEME}` : 'dist');
const warnings = [];
const warn = (m) => warnings.push(m);
const abs = (p) => config.siteUrl.replace(/\/$/, '') + p;
// The language being rendered. T is its interface text, lp() puts a path under its folder.
let LOC = 'en';
let T = en;
const prefix = (l) => (l === 'en' ? '' : '/' + l);
const lp = (p) => prefix(LOC) + p;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const plain = (s) => String(s).replace(/<[^>]+>/g, '');
const logo = readFileSync(join(root, 'src/logo.svg'), 'utf8').replace(' role="img" aria-label="Revault"', ' aria-hidden="true"');
const word = readFileSync(join(root, 'src/wordmark.svg'), 'utf8').replace(' role="img" aria-label="Revault"', ' class="word" aria-hidden="true"').trim();
const brandHtml = () => `<a class="brand" href="/" aria-label="${esc(T.homeLabel)}">${word}</a>`;
const chevron = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5.75 3 10.75 8l-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const tick = '<svg viewBox="0 0.45 18 18" aria-hidden="true"><path d="M3.5 9.5 7.5 13.5 14.5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const cross = '<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4.5 4.5l9 9M13.5 4.5l-9 9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';

// Menu structure. Labels and descriptions come from the language file, in the same order.
const NAV = [
  { href: '/solutions/', menu: ['/solutions/crypto-exchanges-brokers/', '/solutions/neobanks-challengers/', '/solutions/fintech-bank-partnerships/', '/solutions/b2b-fintech-for-banks/', '/solutions/blockchain-protocols/'] },
  { href: '/services/', menu: ['/services/diagnostic/', '/services/claim-library-build/', '/services/managed-growth/'] },
  { href: '/method/' },
  { href: '/research/' },
  { href: '/about/', match: ['/about/', '/platform/', '/insights/', '/security-and-data/'], menu: ['/about/', '/platform/', '/insights/', '/security-and-data/'] },
];
const navHtml = (page) => NAV.map((n, k) => {
  const t = T.nav[k];
  const on = (n.match || [n.href]).some((m) => page.path.startsWith(m));
  const link = `<a class="nav-link${n.menu ? ' nav-link--menu' : ''}" href="${n.href}"${on ? ' aria-current="page"' : ''}>${esc(t.label)}</a>`;
  if (!n.menu) return `<div class="nav-item">${link}</div>`;
  return `<div class="nav-item">${link}<div class="nav-menu">${n.menu.map((h, m) => `<a href="${h}"><strong>${esc(t.items[m][0])}</strong><span>${esc(t.items[m][1])}</span></a>`).join('')}</div></div>`;
}).join('');
const ICONS = {
  alert: '<path d="M12 4.5 20.5 19h-17Z"/><path d="M12 10v4.5M12 16.6v.4"/>',
  inbox: '<path d="M4 13h4l1.5 3h5l1.5-3h4"/><path d="M6.5 5h11L20 13v6H4v-6Z"/>',
  clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7.5V12l3 2"/>',
  globe: '<circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c3 3.2 3 12.8 0 16M12 4c-3 3.2-3 12.8 0 16"/>',
  ban: '<circle cx="12" cy="12" r="8"/><path d="m9 9 6 6M15 9l-6 6"/>',
  trend: '<path d="m4 16 5-5 4 4 7-7"/><path d="M15 8h5v5"/>',
  undo: '<path d="M8 9H4V5"/><path d="M4.6 9A8 8 0 1 1 4 14"/>',
  coins: '<circle cx="9" cy="9" r="5"/><path d="M14.6 10.2a5 5 0 1 1-4.4 4.4"/>',
  bank: '<path d="M4 9.5 12 5l8 4.5M5 19h14M7 10v7M12 10v7M17 10v7"/>',
  link: '<path d="M10.5 13.5a4 4 0 0 0 5.6 0l2.4-2.4a4 4 0 0 0-5.6-5.6L11.8 6.6"/><path d="M13.5 10.5a4 4 0 0 0-5.6 0l-2.4 2.4a4 4 0 0 0 5.6 5.6l1.1-1.1"/>',
  building: '<path d="M6 20V5h9v15M15 10h4v10M4 20h17M9 9h3M9 13h3"/>',
  blocks: '<path d="M12 3.5 19 7.5v9l-7 4-7-4v-9Z"/><path d="m5 7.5 7 4 7-4M12 11.5v9"/>',
  users: '<circle cx="9" cy="9" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0M16 6.2a3 3 0 0 1 0 5.6M17.5 14.3a5.5 5.5 0 0 1 3 4.7"/>',
  layers: '<path d="m12 4 8 4.5-8 4.5-8-4.5Z"/><path d="m4 12.5 8 4.5 8-4.5"/>',
  shield: '<path d="M12 4 19 6.5v5c0 4.2-2.8 7.2-7 8.5-4.2-1.3-7-4.3-7-8.5v-5Z"/><path d="m9 12 2.2 2.2L15 10.5"/>',
  tag: '<path d="M4 12.5V5h7.5l8.5 8.5-7.5 7.5Z"/><circle cx="8.5" cy="9.5" r="1.2"/>',
  mail: '<path d="M4 6.5h16v11H4Z"/><path d="m4 7.5 8 6 8-6"/>',
  copy: '<path d="M9 9h10v10H9Z"/><path d="M15 9V5H5v10h4"/>',
  filecheck: '<path d="M7 4h7l4 4v12H7Z"/><path d="M14 4v4h4M9.5 14l2 2 3.5-4"/>',
  megaphone: '<path d="M4 10v4h3l8 4V6l-8 4Z"/><path d="M18 9.5a3.5 3.5 0 0 1 0 5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m15.5 15.5 4 4"/>',
  book: '<path d="M5 5.5c2.5-1 5-1 7 .5 2-1.5 4.5-1.5 7-.5v13c-2.5-1-5-1-7 .5-2-1.5-4.5-1.5-7-.5Z"/><path d="M12 6v13"/>',
  check: '<circle cx="12" cy="12" r="8"/><path d="m8.5 12 2.5 2.5 4.5-5"/>',
  list: '<path d="M9 7h10M9 12h10M9 17h10M5 7h.01M5 12h.01M5 17h.01"/>',
  chart: '<path d="M5 19V5M5 19h14M9 16v-5M13 16V8M17 16v-3"/>',
  user: '<circle cx="12" cy="9" r="3.5"/><path d="M5 19.5a7 7 0 0 1 14 0"/>',
  dollar: '<path d="M12 4v16"/><path d="M16 8.4c-.6-1.5-2-2.3-4-2.3-2.3 0-3.8 1.1-3.8 2.8 0 1.9 1.7 2.5 3.8 3 2.3.5 4.2 1.1 4.2 3.2 0 1.8-1.7 3-4.2 3-2.2 0-3.8-.9-4.4-2.6"/>',
};
const ICON_RULES = [
  [/lead generation/i, 'search'], [/committee/i, 'users'], [/proof/i, 'filecheck'], [/lead to revenue/i, 'trend'], [/distribution/i, 'megaphone'], [/crm/i, 'users'], [/crypto/i, 'coins'], [/neobank|soft switching|bank(ing)? account/i, 'bank'], [/blockchain|protocol|incentive/i, 'blocks'], [/b2b|buyers|vendor/i, 'building'],
  [/partnership|partner portal|co-marketing/i, 'link'], [/affiliate|partners|meetings|controller|recipients|access/i, 'users'], [/market|eligibility|transfers|storage/i, 'globe'],
  [/slow|timeline|retention|deadline/i, 'clock'], [/offer|pricing/i, 'tag'], [/lifecycle|message|contact|incident/i, 'mail'], [/repeated|subprocessor/i, 'copy'],
  [/record|claim|approval|verify|terms|use of/i, 'filecheck'], [/outreach|campaign|brief/i, 'megaphone'], [/restricted|not included/i, 'ban'], [/education|research|financial promotion|information/i, 'book'],
  [/risk register/i, 'alert'], [/fix list|checklist|purposes|cookies in use/i, 'list'], [/revenue|plan|measurement|economics/i, 'chart'], [/library|engine|data/i, 'layers'], [/workflow|hub/i, 'inbox'],
  [/privacy|legal|rights|disclaimer|security|choices/i, 'shield'], [/platform restricts/i, 'ban'],
];
const pickIcon = (t) => (ICON_RULES.find(([re]) => re.test(t)) || [0, 'check'])[1];
const tile = (t, name) => `<span class="tile-slot"><span class="tile">${icon(name || pickIcon(t))}</span></span>`;
const ICON_BOX = JSON.parse(readFileSync(join(root, 'src/icon-viewboxes.json'), 'utf8'));
const icon = (n) => `<svg class="ico" viewBox="${ICON_BOX[n] || '0 0 24 24'}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]}</svg>`;
const flowNode = (n, tag, extra = '') => `<${tag} class="flow-node${n.end ? ' flow-node--end' : ''}${extra}">${icon(n.icon)}<span>${esc(n.label)}</span></${tag}>`;
const FOOT = [
  ['/solutions/crypto-exchanges-brokers/', '/solutions/neobanks-challengers/', '/solutions/fintech-bank-partnerships/', '/solutions/b2b-fintech-for-banks/', '/solutions/blockchain-protocols/'],
  ['/services/diagnostic/', '/services/claim-library-build/', '/services/managed-growth/', '/book-a-diagnostic/'],
  ['/platform/', '/method/', '/research/', '/insights/', '/about/', '/security-and-data/'],
  ['/legal/', '/legal/privacy/', '/legal/terms/', '/legal/cookies/', '/legal/disclaimer/'],
];

const btn = (b, i) => `<a class="btn ${i === 0 ? 'btn--primary' : 'btn--secondary'}" href="${b.href}">${esc(b.label)}</a>`;
const head = (b) => `<div class="band-head" data-reveal><h2>${esc(b.h2)}</h2>${b.intro ? `<p>${b.intro}</p>` : ''}</div>`;
const paras = (list) => list.map((p) => `<p>${p}</p>`).join('');
const pill = (status, dev = /development/i.test(status)) => `<span class="pill${dev ? ' pill--dev' : ''}">${esc(status)}</span>`;

const blocks = {
  split: (b) => `<div class="split" data-reveal><div><h2>${esc(b.h2)}</h2>${b.aside ? `<p>${b.aside}</p>` : ''}${stage(b)}</div><div class="stack">${paras(b.body)}${b.link ? `<p class="actions"><a class="textlink" href="${b.link.href}">${esc(b.link.label)}</a></p>` : ''}</div></div>`,
  rows: (b) => `${head(b)}<ul class="features" data-reveal>${b.items.map((i) => `<li class="feature">${tile(i.title, i.icon)}<div class="feature-txt"><h3>${esc(i.title)}</h3>${i.status ? pill(i.status, i.dev) : ''}<p>${i.body}</p></div></li>`).join('')}</ul>`,
  diagram: (b) => `<div class="split split--even" data-reveal><div class="stack"><h2>${esc(b.h2)}</h2>${paras(b.body)}</div><figure class="flow" aria-label="${esc(b.flow.label)}">${flowNode(b.flow.top, 'div', ' flow-node--top')}<div class="flow-cols">${b.flow.cols.map((c) => `<ol class="flow-col">${c.map((n) => flowNode(n, 'li')).join('')}</ol>`).join('')}</div></figure></div>`,
  showcase: (b) => `${head(b)}<ul class="showcase">${b.items.map((i, k) => `<li data-reveal><div class="showcase-txt"><h3>${esc(i.title)}</h3><p>${i.body}</p>${i.href ? `<p class="actions"><a class="textlink" href="${i.href}">${esc(i.more)}</a></p>` : ''}</div><figure class="showcase-fig" aria-hidden="true">${MOCKS[(b.mocks || MOCK_ORDER)[k % (b.mocks || MOCK_ORDER).length]]()}</figure></li>`).join('')}</ul>`,
  rail: (b) => `${head(b)}<ol class="rail" data-reveal>${b.items.map((i) => `<li><h3>${esc(i.title)}</h3><p>${i.body}</p>${i.when ? `<p class="when">${esc(i.when)}</p>` : ''}</li>`).join('')}</ol>`,
  linkrows: (b) => `${head(b)}<ul class="features features--links" data-reveal>${b.items.map((i) => `<li><a class="feature" href="${i.href}">${tile(i.title, i.icon)}<span class="feature-txt"><h3>${esc(i.title)}</h3><p>${i.body}</p></span></a></li>`).join('')}</ul>`,
  cards: (b) => `${head(b)}<div class="cards cards--${b.cols || 2}" data-reveal>${b.items.map((i) => {
    const inner = `<h3>${esc(i.title)}</h3>${i.status ? pill(i.status, i.dev) : ''}<p>${i.body}</p>${i.more ? `<p class="more"><span class="textlink">${esc(i.more)}</span></p>` : ''}`;
    return i.href ? `<a class="card" href="${i.href}">${inner}</a>` : `<div class="card">${inner}</div>`;
  }).join('')}</div>`,
  checks: (b) => `<div class="split" data-reveal><div><h2>${esc(b.h2)}</h2>${b.aside ? `<p>${b.aside}</p>` : ''}${stage(b)}</div><ul class="checks${b.negative ? ' checks--no' : ''}">${b.items.map((i) => `<li><span class="mark">${b.negative ? cross : tick}</span><p>${i}</p></li>`).join('')}</ul></div>`,
  table: (b) => `${head(b)}<div class="table-wrap" data-reveal><table><thead><tr>${b.cols.map((c) => `<th scope="col">${esc(c)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`).join('')}</tbody></table></div>`,
  faq: (b) => `<div class="split" data-reveal><div><h2>${esc(b.h2 || T.faqHeading)}</h2></div><div class="faq">${b.items.map((i) => `<details><summary>${esc(i.q)}</summary><p>${i.a}</p></details>`).join('')}</div></div>`,
  prose: (b) => `<div class="prose" data-reveal>${b.html}</div>`,
  form: (b) => `<div class="split split--even" data-reveal><div class="stack"><h2>${esc(b.h2)}</h2>${paras(b.body)}${config.calendarUrl ? `<p><a class="textlink" href="${config.calendarUrl}">${esc(T.form.calendar)}</a></p>` : ''}</div>
  <form class="form" data-booking data-offline="${esc(T.form.offline)}" data-sending="${esc(T.form.sending)}" data-failed="${esc(T.form.failed)}" method="post" action="${config.formEndpoint}">
    <input type="hidden" name="lang" value="${LOC}"><input type="hidden" name="page" value="${lp('/book-a-diagnostic/')}"><input type="hidden" name="consent_text" value="${esc(T.form.consent.replace('{privacy}', T.form.consentLink))}">
    <div class="hp" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
    <div><label for="f-name">${esc(T.form.name)}</label><input id="f-name" name="name" type="text" autocomplete="name" required></div>
    <div><label for="f-email">${esc(T.form.email)}</label><input id="f-email" name="email" type="email" autocomplete="email" required></div>
    <div><label for="f-company">${esc(T.form.company)}</label><input id="f-company" name="company" type="text" autocomplete="organization" required></div>
    <div><label for="f-role">${esc(T.form.role)}</label><input id="f-role" name="role" type="text" autocomplete="organization-title" required></div>
    <fieldset><legend>${esc(T.form.markets)}</legend><div class="opts">${T.form.marketOptions.map((m, k) => `<label class="opt"><input type="checkbox" name="markets" value="${esc(en.form.marketOptions[k])}">${esc(m)}</label>`).join('')}</div></fieldset>
    <fieldset><legend>${esc(T.form.product)}</legend><div class="opts">${T.form.productOptions.map((m, k) => `<label class="opt"><input type="checkbox" name="product" value="${esc(en.form.productOptions[k])}">${esc(m)}</label>`).join('')}</div></fieldset>
    <div><label for="f-challenge">${esc(T.form.challenge)}</label><textarea id="f-challenge" name="challenge" required></textarea></div>
    <label class="opt consent"><input type="checkbox" name="consent" value="yes" required><span>${esc(T.form.consent).replace('{privacy}', `<a class="textlink" href="/legal/privacy/">${esc(T.form.consentLink)}</a>`)}</span></label>
    <button class="btn btn--primary" type="submit">${esc(T.form.send)}</button>
    <p class="form-status" role="status"></p>
  </form></div>`,
  cta: (b) => `<div class="cta on-dark" data-reveal><div class="cta-copy"><h2>${esc(b.h2)}</h2><p class="muted">${b.body}</p></div><a class="btn btn--primary btn--lg" href="${b.href || '/book-a-diagnostic/'}">${esc(b.label)}</a></div>`,
};

// Hero illustration: one B2B buyer moves through three phases, and a dollar confirms the last one.
function growthFigure(label) {
  const steps = T.hero.steps.map((t, i) => `<li class="fn-step fn-step--${i}"><span class="fn-seal">${tick}</span><span class="fn-name">${esc(t)}</span></li>`).join('');
  return `<figure class="hero-media viz" data-hero-media aria-label="${esc(label)}">
  <div class="viz-card funnel" aria-hidden="true">
    <div class="fn-who">
      <span class="fn-avatar">${icon('user')}</span>
      <span class="fn-id"><strong>${esc(T.hero.buyer)}</strong><span>${esc(T.hero.company)}</span></span>
      <span class="fn-coin">${icon('dollar')}</span>
    </div>
    <ol class="fn-steps">${steps}</ol>
  </div>
</figure>`;
}

// Interface sketches for the home page: what the client sees in their own tools, drawn in the brand style.
// They carry labels only, never figures or names, so nothing in them reads as a result or a customer.
const seal = `<span class="seal">${tick}</span>`;
const MOCKS = {
  channels: () => `<div class="mock"><p class="mock-title">${esc(T.mock.channelsTitle)}</p><ul class="mock-grid">${T.mock.channels.map((c, i) => `<li><span class="mock-ico">${icon(['megaphone', 'link', 'mail', 'search'][i])}</span><span>${esc(c)}</span></li>`).join('')}</ul><p class="mock-foot">${seal}<span>${esc(T.mock.channelNote)}</span></p></div>`,
  crm: () => `<div class="mock"><p class="mock-title">${esc(T.mock.crmTitle)}</p><ul class="mock-rows">${T.mock.crmRows.map((r, i) => `<li><span class="mock-avatar">${icon('user')}</span><span class="mock-who"><strong>${esc(r[0])}</strong><span>${esc(r[1])}</span></span><span class="pill${i === 0 ? ' pill--dev' : ''}">${esc(r[2])}</span></li>`).join('')}</ul></div>`,
  report: () => `<div class="mock"><p class="mock-title">${esc(T.mock.reportTitle)}</p><ul class="mock-bars">${T.mock.reportRows.map((r, i) => `<li><span>${esc(r)}</span><span class="mock-bar"><i style="--w:${[82, 64, 46][i]}%"></i></span></li>`).join('')}</ul><p class="mock-foot">${seal}<span>${esc(T.mock.reportNote)}</span></p></div>`,
  approval: () => `<div class="mock"><div class="mock-head"><p class="mock-title">${esc(T.mock.approvalTitle)}</p><span class="pill">${esc(T.mock.approvalTier)}</span></div><ul class="mock-checks">${T.mock.approvalRows.map((r) => `<li>${seal}<span>${esc(r)}</span></li>`).join('')}</ul><p class="mock-done">${esc(T.mock.approvalDone)}</p></div>`,
};
MOCKS.register = () => `<div class="mock"><p class="mock-title">${esc(T.mock.registerTitle)}</p><ul class="mock-rows mock-rows--plain">${T.mock.registerRows.map((r, i) => `<li><span class="mock-who"><strong>${esc(r[0])}</strong></span><span class="pill${i === 0 ? ' pill--dev' : ''}">${esc(r[1])}</span></li>`).join('')}</ul><p class="mock-foot">${seal}<span>${esc(T.mock.registerNote)}</span></p></div>`;
MOCKS.library = () => `<div class="mock"><div class="mock-head"><p class="mock-title">${esc(T.mock.libraryTitle)}</p><span class="pill">${esc(T.mock.libraryScope)}</span></div><ul class="mock-checks">${T.mock.libraryRows.map((r) => `<li>${seal}<span>${esc(r)}</span></li>`).join('')}</ul></div>`;
MOCKS.article = () => `<div class="mock"><div class="mock-head"><p class="mock-title">${esc(T.mock.articleTitle)}</p><span class="pill">${esc(T.mock.articleScope)}</span></div><ul class="mock-checks">${T.mock.articleRows.map((r) => `<li>${seal}<span>${esc(r)}</span></li>`).join('')}</ul></div>`;
const MOCK_ORDER = ['channels', 'crm', 'report', 'approval'];
// A sketch placed under a section heading sits on its own dark stage, so it reads the same on light bands.
const stage = (b) => (b.mock ? `<figure class="mock-stage on-dark" aria-hidden="true">${MOCKS[b.mock]()}</figure>` : '');

function heroMedia(m) {
  if (!m) return '';
  if (m.type === 'growth') return growthFigure(m.label);
  if (m.type === 'mock') return `<figure class="hero-media hero-mock" data-hero-media aria-hidden="true">${MOCKS[m.mock]()}</figure>`;
  if (m.type === 'route') {
    return `<figure class="hero-media panel" data-hero-media aria-label="${esc(m.label)}"><p class="panel-title">${esc(m.title)}</p><ol class="route">${m.rows.map((r) => `<li><strong>${esc(r[0])}</strong><span>${esc(r[1])}</span><em>${esc(r[2])}</em></li>`).join('')}</ol></figure>`;
  }
  return `<figure class="hero-media panel" data-hero-media aria-label="${esc(m.label)}"><p class="panel-title">${esc(m.title)}</p><dl class="facts">${m.rows.map((r) => `<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}</dl></figure>`;
}

function jsonld(page) {
  const crumbs = page.crumbs || [];
  const graph = [];
  if (crumbs.length) {
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [[T.homeCrumb, '/'], ...crumbs, [page.crumbLabel || page.h1, page.path]].map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(lp(p)) })) });
  }
  if (page.path === '/') {
    const org = { '@type': 'Organization', '@id': abs('/#organization'), name: config.name, url: abs(lp('/')), logo: abs('/assets/logo.svg'), description: page.description };
    if (config.sameAs.length) org.sameAs = config.sameAs;
    graph.push(org, { '@type': 'WebSite', url: abs(lp('/')), name: config.name, publisher: { '@id': abs('/#organization') }, inLanguage: LOC });
  }
  if (page.service) graph.push({ '@type': 'Service', name: page.service.name, description: page.description, url: abs(lp(page.path)), provider: { '@type': 'Organization', name: config.name, url: abs(lp('/')) }, areaServed: page.service.area, serviceType: page.service.type });
  const faq = page.blocks.find((b) => b.type === 'faq');
  if (faq) graph.push({ '@type': 'FAQPage', mainEntity: faq.items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: plain(i.a) } })) });
  if (page.article) {
    const a = { '@type': 'Article', headline: page.h1, description: page.description, url: abs(lp(page.path)), author: { '@type': 'Organization', name: 'Revault Research' }, publisher: { '@type': 'Organization', name: config.name, logo: { '@type': 'ImageObject', url: abs('/assets/logo.svg') } }, inLanguage: LOC };
    if (page.article.published) { a.datePublished = page.article.published; a.dateModified = page.article.reviewed || page.article.published; } else warn(`${page.path}: article has no publication date yet, so datePublished is left out of its structured data`);
    graph.push(a);
  }
  return graph.length ? `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>` : '';
}

function render(page) {
  const noindex = page.noindex || page.draft;
  if (page.title.length > 60) warn(`${lp(page.path)}: title is ${page.title.length} characters, over 60`);
  if (page.description.length > 155) warn(`${lp(page.path)}: meta description is ${page.description.length} characters, over 155`);
  const words = page.h1.split(/\s+/).length;
  if (words < 2 || words > 10) warn(`${lp(page.path)}: H1 has ${words} words, outside 2 to 10`);
  const subLen = plain(page.sub).length;
  if (subLen < 160 || subLen > 420) warn(`${lp(page.path)}: hero paragraph is ${subLen} characters, outside 160 to 420`);
  const tones = ['white', 'paper'];
  let prev = 'paper', n = 0;
  const all = page.draft ? [{ type: 'split', tone: 'tint', h2: T.draftHeading, body: [`${page.draft} ${T.draftTail}`] }, ...page.blocks] : page.blocks;
  const body = all.map((b) => {
    let tone = b.tone || (b.type === 'rail' ? 'ink' : tones[n++ % 2]);
    if (tone === prev) tone = tone === 'white' ? 'paper' : 'white';
    prev = tone;
    return `<section class="band band--${tone}${tone === 'ink' ? ' on-dark' : ''}${b.type === 'cta' ? ' band--cta' : ''}"${b.id ? ` id="${b.id}"` : ''}><div class="shell">${blocks[b.type](b)}</div></section>`;
  }).join('\n');
  const alt = config.locales.map((l) => `<link rel="alternate" hreflang="${l === 'en' ? 'en' : l + '-CH'}" href="${abs(prefix(l) + page.path)}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${abs(page.path)}">`;
  const picker = config.locales.length > 1 ? `<nav class="lang" aria-label="${esc(T.langPicker)}"><span>${esc(T.langPicker)}</span><ul>${config.locales.map((l) => `<li><a href="${prefix(l) + (page.path === '/404/' ? '/' : page.path)}" hreflang="${l}" lang="${l}"${l === LOC ? ' aria-current="true"' : ''}>${esc(DICT[l].langName)}</a></li>`).join('')}</ul></nav>` : '';
  const crumbTrail = [[T.homeCrumb, '/'], ...(page.crumbs || [])];
  const html = `<!doctype html>
<html lang="${LOC}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${noindex ? '<meta name="robots" content="noindex, follow">' : `<link rel="canonical" href="${abs(lp(page.path))}">${alt}`}
<meta property="og:type" content="${page.article ? 'article' : 'website'}">
<meta property="og:site_name" content="${config.name}">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${abs(lp(page.path))}">
<meta name="twitter:card" content="summary">
<meta name="theme-color" content="#0d1321">
<link rel="icon" href="/assets/logo.svg" type="image/svg+xml">
<link rel="preload" href="/assets/fonts/red-hat-display.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/red-hat-text.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/styles.css">
${jsonld(page)}
</head>
<body>
<a class="skip" href="#main">${esc(T.skip)}</a>
<div class="scroll-progress" aria-hidden="true"></div>
<header class="site-header on-dark" data-site-header>
  <div class="shell header-row">
    ${brandHtml()}
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="main-nav" data-open="${esc(T.menu)}" data-close="${esc(T.close)}">${esc(T.menu)}</button>
    <nav class="header-nav" id="main-nav" aria-label="${esc(T.mainNav)}">
      <div class="nav-group">${navHtml(page)}</div>
      <a class="btn btn--primary btn--nav" href="/book-a-diagnostic/">${esc(T.book)}</a>
    </nav>
  </div>
</header>
<main id="main">
<section class="hero on-dark${page.path === '/' ? ' hero--home' : ''}" data-hero aria-labelledby="hero-title">
  <div class="shell hero-grid">
    <div class="hero-copy" data-hero-copy>
      <h1 id="hero-title">${esc(page.h1)}</h1>
      <p class="hero-sub" data-hero-sub>${page.sub}</p>
      <div class="hero-actions" data-hero-cta>${page.actions.map(btn).join('')}</div>
    </div>
    ${heroMedia(page.media)}
  </div>
</section>
${body}
</main>
<footer class="site-footer on-dark">
  <div class="shell">
    <div class="foot-grid">
      <div class="foot-brand">${brandHtml()}<p>${esc(T.footTagline)}</p></div>
      ${FOOT.map((links, k) => `<nav aria-label="${esc(T.foot[k][0])}"><h2>${esc(T.foot[k][0])}</h2><ul>${links.map((h, m) => `<li><a href="${h}">${esc(T.foot[k][1][m])}</a></li>`).join('')}</ul></nav>`).join('')}
    </div>
    <div class="foot-base">
      ${page.path === '/' ? '' : `<nav aria-label="${esc(T.breadcrumb)}"><ol class="crumbs">${crumbTrail.map(([l, h]) => `<li><a href="${h}">${esc(l)}</a></li>`).join('')}<li aria-current="page">${esc(page.crumbLabel || page.h1)}</li></ol></nav>`}
      <p>${esc(T.footNoAdvice)}</p>
      %%PICKER%%
    </div>
  </div>
</footer>
<script src="/assets/site.js" defer></script>
</body>
</html>
`;
  // every internal link stays inside the current language folder; the picker is added afterwards so it can cross languages
  const local = LOC === 'en' ? html : html.replace(/href="\/(?!assets\/)/g, `href="/${LOC}/`);
  return local.replace('%%PICKER%%', picker);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, 'assets/fonts'), { recursive: true });
for (const f of ['styles.css', 'site.js', 'logo.svg', 'wordmark.svg', 'logo-full.svg', 'logo-full-light.svg']) copyFileSync(join(root, 'src', f), join(out, 'assets', f));
copyFileSync(join(root, 'node_modules/@fontsource-variable/red-hat-display/files/red-hat-display-latin-wght-normal.woff2'), join(out, 'assets/fonts/red-hat-display.woff2'));
if (THEME) {
  writeFileSync(join(out, 'assets/styles.css'), readFileSync(join(root, 'src/styles.css'), 'utf8') + '\n' + readFileSync(join(root, `src/styles-${THEME}.css`), 'utf8'));
  copyFileSync(join(root, 'node_modules/@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2'), join(out, 'assets/fonts/archivo.woff2'));
}
copyFileSync(join(root, 'node_modules/@fontsource-variable/red-hat-text/files/red-hat-text-latin-wght-normal.woff2'), join(out, 'assets/fonts/red-hat-text.woff2'));

const DICT = { en };
const PAGES = { en: enPages };
for (const l of config.locales) {
  if (l === 'en') continue;
  DICT[l] = (await import(`./src/i18n/${l}.mjs`)).default;
  PAGES[l] = (await import(`./src/content/${l}/index.mjs`)).default;
}
// Icons and pill colours are chosen from the English wording, so a translated page inherits them by position.
for (const l of config.locales) {
  if (l === 'en') continue;
  for (const p of PAGES[l]) {
    const src = enPages.find((e) => e.path === p.path);
    if (!src) { warn(`/${l}${p.path}: no English page at this path`); continue; }
    p.blocks.forEach((b, bi) => (b.items || []).forEach((it, ii) => {
      const e = src.blocks[bi] && src.blocks[bi].items && src.blocks[bi].items[ii];
      if (!e || typeof it !== 'object') return;
      if (!it.icon && e.title) it.icon = e.icon || pickIcon(e.title);
      if (e.status) it.dev = /development/i.test(e.status);
    }));
    if (src.media && src.media.type === 'mock') p.media = src.media;
    // sketches are chosen once, in the English source
    p.blocks.forEach((b, bi) => { const e = src.blocks[bi]; if (e) { if (e.mock) b.mock = e.mock; if (e.mocks) b.mocks = e.mocks; } });
  }
}
let total = 0;
const sitemaps = [];
for (const l of config.locales) {
  LOC = l; T = DICT[l];
  const pages = PAGES[l];
  const seen = new Set();
  for (const page of pages) {
    if (seen.has(page.title)) warn(`${lp(page.path)}: title is not unique`);
    seen.add(page.title);
    const base = join(out, l === 'en' ? '' : l);
    const file = page.path === '/404/' ? join(base, '404.html') : join(base, page.path, 'index.html');
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, render(page));
    total++;
  }
  const indexed = pages.filter((p) => !p.noindex && !p.draft);
  const alts = (p) => config.locales.map((x) => `<xhtml:link rel="alternate" hreflang="${x === 'en' ? 'en' : x + '-CH'}" href="${abs(prefix(x) + p.path)}"/>`).join('');
  writeFileSync(join(out, `sitemap-${l}.xml`), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${indexed.map((p) => `  <url><loc>${abs(lp(p.path))}</loc>${alts(p)}</url>`).join('\n')}\n</urlset>\n`);
  sitemaps.push([l, indexed.length]);
  if (l === 'en') for (const p of pages.filter((p) => p.draft)) warn(`${p.path}: published as a draft with noindex and left out of the sitemaps, in every language`);
}
writeFileSync(join(out, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemaps.map(([l]) => `  <sitemap><loc>${abs(`/sitemap-${l}.xml`)}</loc></sitemap>`).join('\n')}\n</sitemapindex>\n`);
writeFileSync(join(out, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${abs('/sitemap.xml')}\n`);

// While the origin is still the placeholder, any hosted copy is a preview, so search engines are told to stay out.
// The same holds for a themed build, which is a design preview of the live site.
if (THEME || /\.example/.test(config.siteUrl)) writeFileSync(join(out, '_headers'), '/*\n  X-Robots-Tag: noindex\n');
if (/\.example/.test(config.siteUrl)) warn('site.config.mjs: siteUrl is still the placeholder origin');
if (config.formEndpoint === '#') warn('site.config.mjs: formEndpoint is unset, so the booking form sends nothing');
if (!config.calendarUrl) warn('site.config.mjs: calendarUrl is unset, so no calendar link shows under the form');
console.log(`Built ${total} pages in ${config.locales.join(', ')}. Sitemaps: ${sitemaps.map(([l, n]) => `${l} ${n}`).join(', ')}.`);
if (warnings.length) console.log(`\nBefore launch (${warnings.length}):\n` + warnings.map((w) => '  - ' + w).join('\n'));
