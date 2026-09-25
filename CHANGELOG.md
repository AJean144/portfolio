# Changelog

All notable changes to andelljean.me. Versions are `MAJOR.MINOR.PATCH.MICRO`.

## [1.0.0.0] - 2026-09-25

### Added
- The site now matches the current resume: Forward Deployed Engineer, with every role from RapidFire to Differential Consulting.
- Six project labels, each led by a real number from the resume ($2,000+, $2M+, ~60%, ~4h → ~1h).
- A "shipping manifest" table of all seven roles, plus skills, community work, and education.
- One-click resume PDF download, and a contact section with separate paths for hiring and for client projects.
- A 3D orange you can drag to spin. The variety picker (Valencia, Honeybell, Ruby Red, Key Lime) recolors the fruit and the page live.
- LinkedIn portfolio photo in a "Grower" badge in the hero.
- Real page title, description, and social preview tags, plus a favicon.
- Playwright smoke tests in CI: content renders, the resume downloads, the picker works, and the page survives without WebGL.

### Changed
- New visual identity: a Florida citrus crate label, with flat lithograph colors, crate lettering, and die-cut labels.
- Fonts are self-hosted instead of loaded from Google.

### Fixed
- The page no longer goes blank on browsers without WebGL. The 3D fruit falls back to a flat drawing.

### Removed
- The 15MB desktop-PC 3D model, old placeholder sections, and out-of-date experience entries.
- Unused runtime dependencies (react-router, framer-motion, Radix, and others): 20 down to 7. Tailwind and PostCSS are gone too.
