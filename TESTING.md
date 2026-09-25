# Testing

100% test coverage is the key to great vibe coding. Tests let you move fast, trust your instincts, and ship with confidence. Without them, vibe coding is just yolo coding. With tests, it's a superpower.

This site is one static page, so the suite is a Playwright smoke test that drives the real built site.

- **Framework:** @playwright/test 1.63, Chromium, desktop and Pixel 7 projects.
- **Run:** `npm test` (builds, serves on :4318, runs `e2e/`). First time: `npx playwright install chromium`.
- **CI:** `.github/workflows/test.yml` runs lint and the suite on every push and PR.

## Layers

- **Smoke / E2E (`e2e/smoke.spec.js`):** the page renders resume content, the resume PDF downloads, the variety picker retints the page, and the page survives without WebGL.
- **Unit / integration:** none. There's no logic outside the page yet. Add Vitest when some appears.

## Conventions

- One `*.spec.js` per area in `e2e/`. Assert what a visitor sees, via roles and text first.
- Counts come from `src/content.js`, so the tests follow content edits instead of breaking on them.
- A bug fix gets a regression test. The WebGL test is the example.
