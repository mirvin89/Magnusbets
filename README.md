# MagnusBets - Smart Betting Tracker

A React-based betting tracker app.

## Features
- Track bets with event details, wager, odds, and outcomes (win/loss/push/pending)
- Real-time stats: total bets, win rate, total wagered, profit/loss, ROI
- Filter bets by outcome
- Persistent storage via localStorage
- Sample NBA bets loaded from `data.json` if no saved data

## Live Demo
https://mirvin89.github.io/Magnusbets/

## Local Setup
1. `npm install`
2. `npm run build` (builds app.js from src/app.jsx)
3. `npx serve .`

## Files
- `index.html`: Main page with Tailwind CDN + React CDN + bundled app.js
- `app.js`: Bundled/transpiled JSX (esbuild)
- `data.json`: Sample betting picks
- `.nojekyll`: For GitHub Pages

## Build
Edit `app.jsx`, run `npm run build`.

Fixed issues:
- Unescaped HTML entities causing raw text display
- JSX syntax errors (duplicate className)
- Bundled to plain JS (no Babel standalone)
- Added sample data load