// Checks one translated language against the English source without building the site.
// Usage: node scripts/check-content.mjs de
import en from '../src/content/index.mjs';
import enT from '../src/i18n/en.mjs';
const l = process.argv[2];
if (!l) { console.error('Usage: node scripts/check-content.mjs <language>'); process.exit(2); }
const pages = (await import(`../src/content/${l}/index.mjs`)).default;
const T = (await import(`../src/i18n/${l}.mjs`)).default;
const plain = (s) => String(s).replace(/<[^>]+>/g, '');
const out = [];
const shape = (v) => (Array.isArray(v) ? `[${v.map(shape).join(',')}]` : v && typeof v === 'object' ? `{${Object.keys(v).sort().map((k) => `${k}:${shape(v[k])}`).join(',')}}` : typeof v);
if (shape(T) !== shape(enT)) out.push(`src/i18n/${l}.mjs does not have the same keys and list lengths as src/i18n/en.mjs`);
if (pages.length !== en.length) out.push(`${pages.length} pages, English has ${en.length}`);
const titles = new Set();
for (const e of en) {
  const p = pages.find((x) => x.path === e.path);
  if (!p) { out.push(`${e.path}: missing`); continue; }
  const at = (m) => out.push(`${e.path}: ${m}`);
  if (titles.has(p.title)) at('title is not unique'); titles.add(p.title);
  if (p.title.length > 60) at(`title is ${p.title.length} characters, over 60`);
  if (p.description.length > 155) at(`meta description is ${p.description.length} characters, over 155`);
  const w = p.h1.split(/\s+/).length; if (w < 2 || w > 10) at(`H1 has ${w} words, outside 2 to 10`);
  if (/[.:!]$/.test(p.h1)) at('H1 ends with punctuation');
  const n = plain(p.sub).length; if (n < 160 || n > 420) at(`hero paragraph is ${n} characters, outside 160 to 420`);
  if (p.actions.length !== e.actions.length || p.actions.some((a, i) => a.href !== e.actions[i].href)) at('hero buttons differ from English in number or link');
  if (p.blocks.length !== e.blocks.length) { at(`${p.blocks.length} blocks, English has ${e.blocks.length}`); continue; }
  p.blocks.forEach((b, i) => {
    const s = e.blocks[i];
    if (b.type !== s.type || b.id !== s.id || b.tone !== s.tone) at(`block ${i + 1}: type, id or tone differs from English`);
    if ((b.items || []).length !== (s.items || []).length) at(`block ${i + 1}: ${(b.items || []).length} items, English has ${(s.items || []).length}`);
    if (b.h2 && /[.:!]$/.test(b.h2)) at(`block ${i + 1}: heading ends with punctuation`);
    const hrefs = (x) => JSON.stringify(x).match(/href=\\?"[^"\\]+|"href":"[^"]+/g) || [];
    if (hrefs(b).join() !== hrefs(s).join()) at(`block ${i + 1}: links differ from English`);
  });
  const txt = JSON.stringify(p);
  if (/—|–/.test(txt)) at('contains an em or en dash');
  if (l === 'de' && /ß/.test(txt)) at('contains ß, Swiss German uses ss');
}
console.log(out.length ? out.map((o) => '  - ' + o).join('\n') + `\n${out.length} issue(s)` : `OK: ${l} matches the English structure and every length limit`);
process.exit(out.length ? 1 : 0);
