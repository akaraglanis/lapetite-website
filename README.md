# La Petite — Boutique Cake Studio

A small, playful static website for a one-baker boutique cake business.

## Tech stack

Plain HTML, CSS and a tiny bit of vanilla JS. No build step, no dependencies.

## Running it

Just double-click `index.html` to open it in your browser.

For a slightly nicer dev experience (so the contact form's `fetch` can work
without browser quirks), serve it locally:

```powershell
# any of these will work, pick whichever is on your machine
python -m http.server 8080
# or
npx serve .
```

Then visit http://localhost:8080.

## Project structure

```
.
├── index.html        # Home
├── menu.html         # Cake menu
├── about.html        # About the baker
├── contact.html      # Contact form
├── assets/
│   ├── css/styles.css
│   └── js/
│       ├── nav.js        # mobile nav toggle + active link highlighting
│       └── contact.js    # form validation & submission
└── inputs/           # drop source assets (photos, logos) here
```

## Wiring up the contact form

Right now the form falls back to opening the visitor's email client with a
pre-filled `mailto:` message. To receive proper email submissions:

1. Sign up for a free form-handling service (any will do):
   - **Formspree** — https://formspree.io (recommended, simple, free tier)
   - **Web3Forms** — https://web3forms.com (no signup, just an API key)
   - **Getform** — https://getform.io
2. Create a new form and copy its endpoint URL.
3. Open `assets/js/contact.js` and paste it into the `FORM_ENDPOINT` constant
   at the top of the file.
4. Update `FALLBACK_EMAIL` to your real email address (it's used as the
   `mailto:` fallback and shown in error messages).

## Adding real cake photos

1. Drop image files into `inputs/cakes/` (your source library).
2. Copy the ones you want on the site into a new `assets/images/cakes/` folder.
3. In `menu.html` and `index.html`, replace each `<div class="cake-thumb …">`
   block with an `<img src="assets/images/cakes/your-photo.jpg" alt="…">`
   inside the same card, and remove the gradient class.

## Deploying

Any static host works. Easiest free options:

- **Netlify** — drag and drop this folder onto https://app.netlify.com/drop.
- **Vercel** — `npx vercel` from this folder.
- **GitHub Pages** — push the repo and enable Pages in the settings.
- **Cloudflare Pages** — connect a Git repo, no build command needed.
