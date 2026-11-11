# Measures the visible ink of every icon in build.mjs and writes the viewBox that centres it.
# Run after adding or changing an icon: python3 scripts/center-icons.py
import json, re, pathlib
from playwright.sync_api import sync_playwright
root = pathlib.Path(__file__).resolve().parent.parent
src = (root / 'build.mjs').read_text()
block = src[src.index('const ICONS = {'):src.index('const ICON_RULES')]
icons = dict(re.findall(r"^\s+(\w+): '(.*)',$", block, re.M))
html = '<body>' + ''.join(f'<svg id="{k}" viewBox="0 0 24 24" width="240" height="240" fill="none" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><g>{v}</g></svg>' for k, v in icons.items())
out = {}
with sync_playwright() as p:
    try: b = p.chromium.launch()
    except Exception: b = p.chromium.launch(channel='chrome')
    page = b.new_page(); page.set_content(html)
    for k in icons:
        bb = page.evaluate(f"(()=>{{const b=document.querySelector('#{k} g').getBBox();return [b.x,b.y,b.width,b.height]}})()")
        cx, cy = bb[0] + bb[2] / 2, bb[1] + bb[3] / 2
        out[k] = f"{cx - 12:.2f} {cy - 12:.2f} 24 24"
    b.close()
(root / 'src' / 'icon-viewboxes.json').write_text(json.dumps(out, indent=1) + '\n')
print(len(out), 'icons centred')
