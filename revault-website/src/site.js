// Small progressive enhancements. The site reads and navigates fully without this file.
// Automated browsers (crawlers, screenshot and audit tools) get the settled page with no entrance motion.
if (!navigator.webdriver) document.documentElement.classList.add('js');

const header = document.querySelector('[data-site-header]');
const onScroll = () => header && header.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('main-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? menuBtn.dataset.close : menuBtn.dataset.open;
  });
}

const targets = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach((t) => io.observe(t));
} else {
  targets.forEach((t) => t.classList.add('is-in'));
}

// The booking form posts to the endpoint set in site.config.mjs (the Worker at /api/book) and then opens the thanks page.
// Until an endpoint is set, it says so plainly.
const form = document.querySelector('form[data-booking]');
if (form) {
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', async (e) => {
    if (form.getAttribute('action') === '#') {
      e.preventDefault();
      status.textContent = form.dataset.offline;
      return;
    }
    if (!window.fetch || !window.FormData) return; // the browser posts the form itself
    e.preventDefault();
    button.disabled = true;
    status.textContent = form.dataset.sending;
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { accept: 'application/json' } });
      const out = await res.json();
      if (!res.ok || !out.ok) throw new Error(out.error || 'failed');
      window.location.assign(out.next);
    } catch (err) {
      button.disabled = false;
      status.textContent = form.dataset.failed;
    }
  });
}

// Cards carry a soft light that follows the pointer.
if (window.matchMedia('(hover: hover)').matches) {
  document.addEventListener('pointermove', (e) => {
    const el = e.target.closest && e.target.closest('.feature, .card, .flow-node');
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });
}

// Scroll progress hairline.
const bar = document.querySelector('.scroll-progress');
if (bar) {
  const setBar = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.setProperty('--scroll', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
  };
  setBar();
  window.addEventListener('scroll', setBar, { passive: true });
  window.addEventListener('resize', setBar, { passive: true });
}
