from pathlib import Path
import base64

ROOT = Path('.')
SRC = ROOT / '.banner-src' / 'gcc.part0'
IMG = ROOT / 'public' / 'images' / 'social' / 'gcc-approved-hero.jpg'
IMG.parent.mkdir(parents=True, exist_ok=True)
IMG.write_bytes(base64.b64decode(SRC.read_text(encoding='utf-8').strip()))

component = ROOT / 'components' / 'approved-hero-banner.tsx'
component.write_text('''export function ApprovedHeroBanner() {\n  return (\n    <section aria-label="GCC Market Entry featured banner" className="mx-auto w-full max-w-[1480px] px-3 pt-4 sm:px-5 sm:pt-6">\n      <img\n        src="/images/social/gcc-approved-hero.jpg"\n        alt="GCC Market Entry — expand your brand into the GCC"\n        width={1200}\n        height={675}\n        fetchPriority="high"\n        decoding="async"\n        className="h-auto w-full rounded-2xl shadow-2xl"\n      />\n    </section>\n  )\n}\n''', encoding='utf-8')

for rel in ['app/page.tsx', 'app/bm/page.tsx', 'app/ar/page.tsx']:
    p = ROOT / rel
    s = p.read_text(encoding='utf-8')
    imp = 'import { ApprovedHeroBanner } from "@/components/approved-hero-banner"\n'
    if imp not in s:
        anchor = 'import { GccMarketEntryGuide } from "@/components/gcc-market-entry-guide"\n'
        s = s.replace(anchor, anchor + imp, 1)
    if '<ApprovedHeroBanner />' not in s:
        s = s.replace('    <>\n      <GccMarketEntryGuide', '    <>\n      <ApprovedHeroBanner />\n      <GccMarketEntryGuide', 1)
    p.write_text(s, encoding='utf-8')

layout = ROOT / 'app' / 'layout.tsx'
s = layout.read_text(encoding='utf-8')
s = s.replace('const socialImage = siteUrl + "images/social/gcc-market-entry-share-1200x630.png"', 'const socialImage = siteUrl + "images/social/gcc-approved-hero.jpg"')
s = s.replace('        height: 630,', '        height: 675,', 1)
layout.write_text(s, encoding='utf-8')

try:
    SRC.unlink()
except FileNotFoundError:
    pass
try:
    (ROOT/'.banner-src').rmdir()
except OSError:
    pass
for p in [ROOT/'.github/scripts/install-approved-hero.py', ROOT/'.github/workflows/install-approved-hero.yml']:
    try:
        p.unlink()
    except FileNotFoundError:
        pass
