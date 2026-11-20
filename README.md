# Clock — The Next Watch

A personal app for choosing my next watch. Static, no build step; installable to a phone home screen.

## Host it (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → pick this branch, folder `/ (root)`.
Open the Pages URL on your phone, then Share → **Add to Home Screen** (iOS) or ⋮ → **Install app** (Android).

## Files
- `index.html` — landing page, plus the shortlist, picks and detail views (routed by `#deck` / `#picks`)
- `watches.js` — the Main Watch candidates: specs, prices (with the date checked), fit and budget verdicts, styling notes
- `fun.js` — the Fun Rotation: small, playful watches under $500 (tiny digitals, dainty gold, colour, vintage), with a durability rating each
- `draw.js` — draws each watch as SVG in millimetres, true to scale on a 6¼″ wrist
- `deck.js`, `deck.css` — swipe decks for both lists (right = keep or want, left = pass), shortlist ranking, own/want tracking, mood filters, detail sheet. Picks are saved in the browser's localStorage only
- `manifest.webmanifest`, `icons/` — home-screen name and icon
- `sw.js` — offline cache (network-first, so updates appear on next open)
