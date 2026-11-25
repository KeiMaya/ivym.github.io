# Personal website

A static personal site for GitHub Pages: plain HTML, CSS and JavaScript, with no build step.

## Structure

- `index.html` holds all the content: hero, about, projects, writing and contact
- `assets/style.css` holds the styles. Colours are CSS variables at the top, with a dark theme
- `assets/main.js` runs the theme toggle, active nav highlighting and scroll reveal
- `404.html` is the not-found page
- `.nojekyll` makes GitHub Pages serve the files as they are

## Make it yours

1. Search `index.html` for `Your Name` and replace it, plus the `YN` initials (also in `assets/favicon.svg`).
2. Rewrite the placeholder text in each section.
3. Change the project cards and writing links to point at real work.
4. Set your real email and profile URLs in the Contact section.
5. To change the accent colour, edit `--accent` in `assets/style.css`.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Publish

In the repository's **Settings → Pages**, choose **Deploy from a branch** and pick the branch and `/ (root)`.
