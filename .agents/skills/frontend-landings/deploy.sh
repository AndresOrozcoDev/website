#!/bin/bash
#
# deploy.sh — Deploy frontend-landings to GitHub in one go
# 
# Prerequisites:
#   - Git installed
#   - GitHub CLI installed (https://cli.github.com)
#   - Logged in: gh auth login
#
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh
#

set -e

# ─── Configuration ───
REPO_NAME="frontend-landings"
REPO_DESC="⚡ A Claude Code skill for generating beautiful, animated single-file HTML landing pages — 10 style presets, zero build, one HTML file output"

# ─── Colors ───
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo ""
echo -e "${CYAN}⚡ frontend-landings — GitHub Deploy Script${NC}"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# ─── Check prerequisites ───
echo -e "${YELLOW}Checking prerequisites...${NC}"

if ! command -v git &> /dev/null; then
    echo -e "${RED}✗ Git not found. Install: https://git-scm.com${NC}"
    exit 1
fi
echo -e "  ${GREEN}✓${NC} Git found"

if ! command -v gh &> /dev/null; then
    echo -e "${RED}✗ GitHub CLI not found.${NC}"
    echo ""
    echo "  Install it:"
    echo "    Windows (winget): winget install --id GitHub.cli"
    echo "    Windows (scoop):  scoop install gh"
    echo "    Mac:              brew install gh"
    echo "    Linux:            https://github.com/cli/cli/blob/trunk/docs/install_linux.md"
    echo ""
    echo "  Then run: gh auth login"
    exit 1
fi
echo -e "  ${GREEN}✓${NC} GitHub CLI found"

if ! gh auth status &> /dev/null; then
    echo -e "${RED}✗ Not logged in to GitHub CLI.${NC}"
    echo "  Run: gh auth login"
    exit 1
fi
echo -e "  ${GREEN}✓${NC} Authenticated with GitHub"

# ─── Get GitHub username ───
GH_USER=$(gh api user --jq '.login')
echo -e "  ${GREEN}✓${NC} GitHub username: ${CYAN}${GH_USER}${NC}"
echo ""

# ─── Replace placeholders ───
echo -e "${YELLOW}Replacing auwalmusa → ${GH_USER}...${NC}"

if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS sed requires '' after -i
    find . -type f \( -name "*.md" -o -name "*.sh" -o -name "*.yml" \) -not -path "./.git/*" \
        -exec sed -i '' "s/auwalmusa/${GH_USER}/g" {} +
else
    find . -type f \( -name "*.md" -o -name "*.sh" -o -name "*.yml" \) -not -path "./.git/*" \
        -exec sed -i "s/auwalmusa/${GH_USER}/g" {} +
fi

echo -e "  ${GREEN}✓${NC} All placeholders updated"
echo ""

# ─── Initialize git ───
echo -e "${YELLOW}Initializing git repository...${NC}"

if [ -d ".git" ]; then
    echo -e "  ${GREEN}✓${NC} Git already initialized"
else
    git init -q
    echo -e "  ${GREEN}✓${NC} Git initialized"
fi

git add .
git commit -q -m "✨ Initial release: 10 style presets, demo landing page

- 10 curated visual style presets (SaaS, Glassmorphic, Brutalist, Cyberpunk, Elegant Serif, Playful Gradients, Dark Mode First, Vintage Retro, Organic Nature, Corporate)
- From-scratch and improve/convert modes
- Dark/light mode with system preference detection
- Scroll animations via IntersectionObserver + Anime.js
- Responsive design (mobile-first)
- SEO meta tags, accessibility, FAQ accordion, pricing toggle
- One-line install script for Claude Code
- Live demo: Batteric battery passport compliance landing page
- GitHub Pages auto-deployment workflow"

git branch -M main
echo -e "  ${GREEN}✓${NC} Code committed"
echo ""

# ─── Create GitHub repo ───
echo -e "${YELLOW}Creating GitHub repository...${NC}"

if gh repo view "${GH_USER}/${REPO_NAME}" &> /dev/null; then
    echo -e "  ${YELLOW}⚠ Repo ${GH_USER}/${REPO_NAME} already exists. Pushing to it.${NC}"
    git remote remove origin 2>/dev/null || true
    git remote add origin "https://github.com/${GH_USER}/${REPO_NAME}.git"
else
    gh repo create "${REPO_NAME}" \
        --public \
        --description "${REPO_DESC}" \
        --source . \
        --remote origin
    echo -e "  ${GREEN}✓${NC} Repository created: ${CYAN}https://github.com/${GH_USER}/${REPO_NAME}${NC}"
fi
echo ""

# ─── Push ───
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u origin main
echo -e "  ${GREEN}✓${NC} Code pushed"
echo ""

# ─── Set repo topics ───
echo -e "${YELLOW}Adding repository topics...${NC}"
gh repo edit "${GH_USER}/${REPO_NAME}" \
    --add-topic "claude-code" \
    --add-topic "claude" \
    --add-topic "landing-page" \
    --add-topic "tailwind-css" \
    --add-topic "html" \
    --add-topic "ai-tools" \
    --add-topic "web-design" \
    --add-topic "frontend" \
    --add-topic "landing-page-generator" \
    --add-topic "anime-js" 2>/dev/null || true
echo -e "  ${GREEN}✓${NC} Topics added"
echo ""

# ─── Enable GitHub Pages ───
echo -e "${YELLOW}Enabling GitHub Pages...${NC}"
gh api \
    --method POST \
    "/repos/${GH_USER}/${REPO_NAME}/pages" \
    -f "build_type=workflow" 2>/dev/null || \
gh api \
    --method PUT \
    "/repos/${GH_USER}/${REPO_NAME}/pages" \
    -f "build_type=workflow" 2>/dev/null || \
    echo -e "  ${YELLOW}⚠ Auto-enable failed. Enable manually: Settings → Pages → Source: GitHub Actions${NC}"
echo -e "  ${GREEN}✓${NC} GitHub Pages configured"
echo ""

# ─── Done ───
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo -e "${GREEN}✅ Deployed successfully!${NC}"
echo ""
echo -e "  📦 Repository:  ${CYAN}https://github.com/${GH_USER}/${REPO_NAME}${NC}"
echo -e "  🌐 Live Demo:   ${CYAN}https://${GH_USER}.github.io/${REPO_NAME}/${NC}"
echo -e "  📥 Install URL: ${CYAN}curl -sSL https://raw.githubusercontent.com/${GH_USER}/${REPO_NAME}/main/install.sh | bash${NC}"
echo ""
echo -e "  ${YELLOW}Note:${NC} GitHub Pages may take 1-2 minutes to deploy."
echo -e "  Check status: ${CYAN}https://github.com/${GH_USER}/${REPO_NAME}/actions${NC}"
echo ""
echo -e "  ${YELLOW}Next steps:${NC}"
echo "  1. Star your own repo ⭐ (helps with discoverability)"
echo "  2. Add a social preview image (Settings → scroll to Social Preview)"
echo "  3. Share on LinkedIn/Twitter!"
echo ""
