# Digi Carotene Salon Landing Page

This project has been reorganized from a single HTML file into a modular PHP landing page.

## Structure

- `index.php` is the main entry point.
- `includes/head.php`, `includes/nav.php`, `includes/footer.php`, and `includes/scripts.php` hold shared layout pieces.
- `includes/sections/` contains one file per landing page section.
- `assets/css/styles.css` contains all page styling.
- `assets/js/main.js` contains the reveal and carousel behavior.
- `assets/images/` contains image assets such as the logo and hero image.

## Local usage

Serve the folder with PHP, for example:

```bash
php -S localhost:8000
```

Then open [http://localhost:8000](http://localhost:8000).

## Notes

- The hero illustration has been replaced with `assets/images/salon-guy-img-1.png`.
- The original file `Digi_Carotene_Salon_Growth_Partnership.html` is still present as a reference source.
- Some case study values are still placeholder content and should be replaced before sharing externally.
