#!/usr/bin/env python3
import glob
import re
import json
from pathlib import Path

HTML_GLOBS = list(Path('.').glob('*.html'))

def check_file(p: Path):
    text = p.read_text(encoding='utf-8')
    head_match = re.search(r'<head[^>]*>(.*?)</head>', text, re.S | re.I)
    head = head_match.group(1) if head_match else ''
    checks = {
        'meta:description': bool(re.search(r'<meta\s+name=["\']description["\']', head, re.I)),
        'canonical': bool(re.search(r'<link\s+rel=["\']canonical["\']', head, re.I)),
        'og:title': bool(re.search(r'property=["\']og:title["\']', head, re.I)),
        'og:description': bool(re.search(r'property=["\']og:description["\']', head, re.I)),
        'twitter:card': bool(re.search(r'<meta\s+name=["\']twitter:card["\']', head, re.I)),
        'twitter:creator': bool(re.search(r'<meta\s+name=["\']twitter:creator["\']', head, re.I)),
        'robots': bool(re.search(r'<meta\s+name=["\']robots["\']', head, re.I)),
        'ga4': bool(re.search(r'googletagmanager\.com\/gtag|gtag\(', head, re.I)),
    }
    return checks

def main():
    all_results = {}
    summary = {k:0 for k in ['meta:description','canonical','og:title','og:description','twitter:card','twitter:creator','robots','ga4']}
    files = sorted([p.name for p in HTML_GLOBS])
    print('Found %d HTML files' % len(files))
    for p in files:
        res = check_file(Path(p))
        all_results[p] = res
        for k,v in res.items():
            if v: summary[k]+=1

    print('\nPer-file results:')
    for p, r in all_results.items():
        missing = [k for k,v in r.items() if not v]
        print(f'- {p}: missing {len(missing)} -> {missing}')

    print('\nSummary (files containing each tag):')
    for k,v in summary.items():
        print(f'- {k}: {v}/{len(files)}')

    # Check for SearchAction in index.html
    idx = Path('index.html')
    if idx.exists():
        txt = idx.read_text(encoding='utf-8')
        has_search = bool(re.search(r'"@type"\s*:\s*"SearchAction"', txt))
        print('\nindex.html SearchAction present:', has_search)

if __name__ == '__main__':
    main()
