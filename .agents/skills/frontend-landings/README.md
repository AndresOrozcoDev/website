<div align="center">

# ⚡ frontend-landings-claude-skill

**A Claude Code skill for generating beautiful, production-ready, animated single-file HTML landing pages.**

Zero build. Zero dependencies. One HTML file. Infinite polish.

[![License: MIT](https://img.shields.io/badge/License-MIT-34D399.svg)](LICENSE)
[![Claude Code](https://img.shields.io/badge/Claude_Code-Skill-A78BFA.svg)](https://docs.anthropic.com)

[Live Demo](https://auwalmusa.github.io/frontend-landings-claude-skill/demo/demo-5-batteric-saas-minimal.html) · [Install](#-installation)

[Live Demo](https://auwalmusa.github.io/frontend-landings-claude-skill/demo/demo-5-batteric-saas-minimal.html) · [Install](#-installation) · [Presets](#-style-presets) · [Usage](#-usage) · [Contributing](#-contributing)

</div>

---

## What Is This?

A skill for [Claude Code](https://docs.anthropic.com) (Anthropic's AI coding agent) that generates **complete, self-contained HTML landing pages** from a simple product description.

Tell Claude what you're building → pick a visual style → get a production-ready landing page in one HTML file. No npm. No build step. Just open in a browser or drag-and-drop deploy.

### What You Get

Every generated landing page includes:

- 📱 **Responsive design** — Mobile-first, tested at 375px / 768px / 1280px
- 🌗 **Dark/light mode** — Auto-detects system preference + manual toggle
- ✨ **Scroll animations** — IntersectionObserver + Anime.js entrance effects
- 🎨 **10 curated visual presets** — From Glassmorphic to Brutalist (see below)
- ♿ **Accessibility** — Semantic HTML, ARIA labels, focus states, skip-to-content
- 🔍 **SEO meta tags** — OpenGraph, Twitter Cards, structured descriptions
- ⚡ **Zero-build architecture** — One HTML file, CDN dependencies only

---

## 🎭 Style Presets

Each preset defines a complete visual system: fonts, colors, shadows, animations, and design rules. No two outputs look alike.

| # | Preset | Vibe | Font Stack |
|:-:|--------|------|-----------|
| 1 | ☁️ **Clean SaaS Minimal** | Stripe, Linear, Vercel | DM Sans |
| 2 | 🔮 **Glassmorphic Modern** | Apple Vision Pro, frosted glass | Sora |
| 3 | 🏗️ **Bold Brutalist** | Anti-design that IS design | Space Mono + IBM Plex Mono |
| 4 | 🌆 **Cyberpunk Neon** | Blade Runner, gaming HUDs | Orbitron + Rajdhani |
| 5 | ✒️ **Elegant Serif Premium** | Luxury editorial, Rolls Royce | Playfair Display + Source Serif 4 |
| 6 | 🎨 **Playful Gradients** | Spotify Wrapped, indie apps | Plus Jakarta Sans |
| 7 | 🌙 **Dark Mode First** | Arc browser, GitHub, Raycast | Outfit + JetBrains Mono |
| 8 | 📻 **Vintage Retro** | Wes Anderson, analog warmth | Fraunces + Lora |
| 9 | 🌿 **Organic Nature** | Patagonia, Aesop, wellness | Libre Baskerville + Nunito Sans |
| 10 | 🏢 **Corporate Professional** | McKinsey, enterprise trust | Merriweather + Source Sans 3 |

> You can also describe a **custom aesthetic** and the skill will synthesise a unique preset by blending existing ones.

---

## 📦 Installation

### Option A: One-Line Install (Recommended)

```bash
curl -sSL https://raw.githubusercontent.com/auwalmusa/frontend-landings-claude-skill/main/install.sh | bash
```

### Option B: Manual Install

```bash
# 1. Clone this repo
git clone https://github.com/auwalmusa/frontend-landings-claude-skill.git

# 2. Create the Claude Code skills directory
mkdir -p ~/.claude/skills/frontend-landings-claude-skill/references

# 3. Copy skill files
cp frontend-landings-claude-skill/SKILL.md ~/.claude/skills/frontend-landings-claude-skill/
cp frontend-landings-claude-skill/references/STYLE_PRESETS.md ~/.claude/skills/frontend-landings-claude-skill/references/

# 4. Restart Claude Code
```

### Option C: Direct Download

```bash
mkdir -p ~/.claude/skills/frontend-landings-claude-skill/references

curl -sSL https://raw.githubusercontent.com/auwalmusa/frontend-landings-claude-skill/main/SKILL.md \
  -o ~/.claude/skills/frontend-landings-claude-skill/SKILL.md

curl -sSL https://raw.githubusercontent.com/auwalmusa/frontend-landings-claude-skill/main/references/STYLE_PRESETS.md \
  -o ~/.claude/skills/frontend-landings-claude-skill/references/STYLE_PRESETS.md
```

### Verify Installation

After restarting Claude Code, the skill should trigger automatically when you ask to create a landing page. Try:

```
Make me a landing page for a task management app called "Flowstate"
```

---

## 🗣️ Usage

### From Scratch (Full Input)

```
Make a landing page for "Flowstate" — a focus timer app for developers.
Tagline: "Deep work, measured."
Features: Pomodoro with code editor integration, GitHub commit streaks,
          team focus sessions, ambient soundscapes, weekly focus analytics.
CTA: "Start Focusing Free"
Style: Dark Mode First
```

### Quick Start (Minimal Input)

```
Landing page for an AI writing tool
```

Claude will ask for details and show the preset menu.

### Improve Existing HTML

```
Here's my current landing page [paste HTML].
Make it look premium with a glassmorphic style.
```

### Custom Aesthetic

```
Build a landing for "Prism Analytics" — I want Bloomberg terminal
meets Apple design. Dark, data-focused, precise typography.
```

---

## 📁 Repository Structure

```
frontend-landings-claude-skill/
├── SKILL.md                      # Main skill instructions (Claude reads this)
├── references/
│   └── STYLE_PRESETS.md           # 10 detailed preset definitions
├── examples/
│   └── INVOCATIONS.md             # Example prompts & expected behavior
├── demo/
│   └── index.html                 # Live demo landing page
├── install.sh                     # One-line installer script
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md          # Bug report template
│   │   └── preset_request.md      # New preset request template
│   └── workflows/
│       └── pages.yml              # GitHub Pages deployment
├── CONTRIBUTING.md                # Contribution guidelines
├── CHANGELOG.md                   # Version history
├── LICENSE                        # MIT License
└── README.md                      # This file
```

---

## 🏗️ Tech Stack (In Every Output)

| Layer | Tool | Source |
|-------|------|--------|
| CSS Framework | Tailwind CSS | `cdn.tailwindcss.com` |
| Animations | Anime.js 3.2 | cdnjs |
| Fonts | Google Fonts | Preset-specific |
| Icons | Inline SVGs | Embedded (Heroicons-style) |
| Interactivity | Vanilla JS | Inline `<script>` |

No npm. No Webpack. No Vite. No build step. One file, works everywhere.

---

## 🚢 Deploying Generated Pages

After generating a landing page, you have one `index.html` file. Deploy anywhere:

| Platform | Method |
|----------|--------|
| **Vercel** | `vercel.com` → New Project → drag & drop |
| **Netlify** | `app.netlify.com` → drag & drop |
| **GitHub Pages** | Push to repo → Settings → Pages → Deploy |
| **Cloudflare Pages** | Connect repo or drag & drop |
| **Any web server** | Just serve the file |

---

## 🎯 What Makes This Different

Most AI-generated landing pages look identical — generic gradients, Inter font, rounded cards on white. This skill is **opinionated** about avoiding that:

| Problem | Our Solution |
|---------|-------------|
| Generic fonts (Inter, Roboto) | Custom font pairings per preset |
| Default Tailwind look | Custom CSS variables for deep theming |
| No animations | Anime.js + IntersectionObserver scroll reveals |
| Dark mode as afterthought | First-class dark mode with system detection |
| Cookie-cutter layouts | Preset-specific design rules that create genuinely different aesthetics |

---

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

**Quick ways to contribute:**
- 🎨 **Submit a new preset** — Define fonts, colors, CSS variables, and design rules
- 🐛 **Report bugs** — Found an issue with generated output? Open an issue
- 📝 **Improve docs** — Better examples, clearer instructions, typo fixes
- ⭐ **Star the repo** — Helps others discover it

---

## 📄 License

[MIT](LICENSE) — do whatever you want with it.

---

## 🙏 Credits

Built as a [Claude Code](https://docs.anthropic.com) skill. Inspired by the craft of great landing pages from Linear, Vercel, Stripe, Arc, and every indie maker who ships beautiful products.

---

<div align="center">

**Built with ☕ by [Auwal Musa](https://github.com/auwalmusa)**

If this saved you time, consider giving it a ⭐

</div>
