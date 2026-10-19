# The UNIQUEfemme Conference 2027: Embodied

Static one-page site for the Embodied conference (May 1st and 2nd, Watson Porter Pavilion). It's plain HTML, CSS and JS with no build step.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## To finish

- **Ticket link:** paste the ticket page URL into `TICKET_URL` at the top of `script.js`. Every ticket button picks it up.
- **Brand fonts:** the site uses Amoresa and The Seasons when they're installed. Otherwise it falls back to Pinyon Script and Cormorant Garamond from Google Fonts. To serve the real fonts to every visitor, add licensed webfont files to `fonts/` as `Amoresa.woff2`, `TheSeasons-Regular.woff2` and `TheSeasons-Bold.woff2`.
- **Speakers, Activations, Vendors, Sponsors:** these currently say "Announcing soon". Update them in `index.html`.

## Hosting

To host on GitHub Pages: in the repo, go to Settings → Pages, choose Deploy from a branch, then pick `main` and `/ (root)`.
