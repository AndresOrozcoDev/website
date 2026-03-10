# Contributing to frontend-landings

Thanks for your interest in contributing! This skill is designed to help anyone generate beautiful landing pages with Claude Code.

## Ways to Contribute

### 🎨 Submit a New Style Preset

This is the most impactful contribution. To add a new preset:

1. Fork the repo
2. Edit `references/STYLE_PRESETS.md`
3. Add your preset following the existing structure:
   - **Vibe** — 2–3 reference brands/aesthetics
   - **Fonts** — Headline + Body from Google Fonts (no Inter, Roboto, Arial)
   - **CSS Variables** — Both `:root` (light) and `.dark` (dark) themes
   - **Design Rules** — Specific guidance on cards, buttons, backgrounds, animations, spacing

**Preset quality bar:**
- Must feel distinctly different from existing presets
- Must define both light and dark themes
- Fonts must be available on Google Fonts
- Must include specific animation character (timing, easing, style)
- Must avoid generic "default Tailwind" aesthetics

4. Submit a PR with a screenshot or description of the intended look

### 🐛 Report Bugs

If Claude generates output that doesn't match the skill's intent:
- Use the **Bug Report** issue template
- Include the prompt you used
- Include the relevant section of generated HTML
- Describe what you expected vs what happened

### 📝 Improve Documentation

- Better examples in `examples/INVOCATIONS.md`
- Clearer wording in `SKILL.md`
- Typo fixes, broken links, etc.

### 💡 Feature Requests

Open an issue with:
- What you'd like to see
- Why it would be useful
- How it fits the "single-file HTML" constraint

## Development Guidelines

- **Keep it zero-build.** Every output must work as a single HTML file with CDN dependencies only.
- **Respect the CDN stack.** Tailwind CDN, Anime.js, Google Fonts. No additional libraries without strong justification.
- **Test presets mentally at 3 breakpoints.** 375px (mobile), 768px (tablet), 1280px (desktop).
- **Maintain accessibility.** Semantic HTML, ARIA labels, focus states, color contrast.

## Pull Request Process

1. Fork and branch from `main`
2. Make your changes
3. Ensure your preset/changes follow the structure of existing content
4. Submit a PR with a clear description

## Code of Conduct

Be kind. Be constructive. Help make landing pages beautiful.
