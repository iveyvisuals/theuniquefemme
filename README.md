# The UNIQUEfemme Conference 2027: Embodied

Static one-page site for the Embodied conference (May 1st and 2nd, Watson Porter Pavilion). It's plain HTML, CSS and JS with no build step.

## Run locally

```bash
python3 -m http.server 8080
```

Then open http://localhost:8080.

## To finish

- **Ticket link:** paste the ticket page URL into `TICKET_URL` at the top of `script.js`. Every ticket button picks it up.
- **Fonts:** free Google Fonts stand-ins are used for the brand fonts: Pinyon Script for Amoresa, Cormorant Garamond for The Seasons, and Montserrat for body text.
- **Speakers, Activations, Vendors, Sponsors:** these currently say "Announcing soon". Update them in `index.html`.

## Hosting

To host on GitHub Pages: in the repo, go to Settings → Pages, choose Deploy from a branch, then pick `main` and `/ (root)`.
