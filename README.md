# Clock — The Next Watch

A personal app for choosing my next watch. Static, no build step; installable to a phone home screen.

## Host it (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → pick this branch, folder `/ (root)`.
Open the Pages URL on your phone, then Share → **Add to Home Screen** (iOS) or ⋮ → **Install app** (Android).

## Files
- `index.html` — landing page (self-contained styles + script)
- `manifest.webmanifest`, `icons/` — home-screen name and icon
- `sw.js` — offline cache (network-first, so updates appear on next open)
