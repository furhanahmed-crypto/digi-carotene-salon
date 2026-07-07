# AGENTS

## Project conventions

- Use `index.php` as the main entry point for the landing page.
- Keep shared layout concerns inside `includes/`.
- Keep each visible landing-page block in its own file under `includes/sections/`.
- Keep presentation logic in `assets/css/styles.css`.
- Keep interactive client-side behavior in `assets/js/main.js`.
- Reuse existing image assets from the project root unless a new asset folder is introduced intentionally.

## Editing guidance

- Prefer structural markup in section partials and avoid inline styles where possible.
- Preserve the existing visual design unless the task explicitly asks for redesign.
- When adding a new section, create a dedicated partial and include it from `index.php`.
- When changing styles, update `assets/css/styles.css` instead of adding inline `<style>` blocks.
- When changing interactive behavior, update `assets/js/main.js` instead of embedding inline scripts.
