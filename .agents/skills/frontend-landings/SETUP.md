# GitHub Deployment Guide

Complete step-by-step instructions to publish this repo and enable the live demo.

---

## Step 1: Create the GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `frontend-landings`
3. Description: `A Claude Code skill for generating beautiful, animated single-file HTML landing pages`
4. Set to **Public**
5. Do NOT initialise with README (you already have one)
6. Click **Create repository**

## Step 2: Push the Code

Open your terminal in the folder containing these files and run:

```bash
cd frontend-landings

git init
git add .
git commit -m "Initial release: 10 style presets, demo landing page"
git branch -M main
git remote add origin https://github.com/auwalmusa/frontend-landings.git
git push -u origin main
```

Replace `auwalmusa` with your actual GitHub username.

## Step 3: Enable GitHub Pages (Live Demo)

1. Go to your repo → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow at `.github/workflows/pages.yml` will auto-deploy `demo/index.html`
4. After ~1 minute, your demo will be live at:
   ```
   https://auwalmusa.github.io/frontend-landings/
   ```

## Step 4: Update Placeholder URLs

After pushing, do a find-and-replace across the repo:

| Find | Replace With |
|------|-------------|
| `auwalmusa` | Your actual GitHub username |

Files that need updating:
- `README.md` (install URLs, demo link, profile link)
- `install.sh` (raw GitHub URLs)

Then commit and push:

```bash
git add .
git commit -m "Update URLs with actual GitHub username"
git push
```

## Step 5: Add Repository Topics

On your repo page, click the gear icon next to **About** and add these topics:

```
claude-code, claude, landing-page, tailwind-css, html, skill, 
ai-tools, web-design, frontend, landing-page-generator
```

## Step 6: Add Social Preview Image (Optional)

1. Take a screenshot of the demo landing page
2. Go to repo → **Settings** → **Social preview**
3. Upload the screenshot
4. This appears when the repo is shared on Twitter/LinkedIn/Slack

---

## That's It!

Your repo is live. Share the GitHub link and people can:
- **Star it** to bookmark
- **Install it** with the one-line script
- **View the demo** on GitHub Pages
- **Fork it** to add their own presets
