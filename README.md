# Sahasra's NLP Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev      # open the printed localhost URL
npm run build    # production build in /dist
```
Needs Node 18+.

## Edit your content
Everything lives in `src/portfolioData.js`: name, philosophy answer, achievements, notes, journey, CrisisBridge details, links, reflection.
Anything marked **PLACEHOLDER** needs your real content.

## Replace images
Put files in `public/images/` and update the paths in `portfolioData.js`.
- Profile: `images/profile.jpg`
- Notes: drop photos in `public/images/notes/`, then add or remove entries in the `notes` array (keep the original photos untouched to preserve handwriting).
- Achievement screenshots: `images/ach-*.png`

## Publish on GitHub Pages
1. Create a GitHub repo and push this folder to the `main` branch.
2. Repo → Settings → Pages → Source: **GitHub Actions**.
3. Each push to `main` deploys automatically (workflow in `.github/workflows/deploy.yml`). The site appears at `https://<username>.github.io/<repo>/`.
