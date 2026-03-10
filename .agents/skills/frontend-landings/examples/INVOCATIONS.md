# Example Invocations

These are sample prompts that should trigger the frontend-landings skill and demonstrate expected behavior.

---

## Example 1: From Scratch — SaaS Product

**User prompt:**
> Make a landing page for "Flowstate" — a focus timer app for developers. Tagline: "Deep work, measured." Features: Pomodoro with code editor integration, GitHub commit streaks, team focus sessions, ambient soundscapes, weekly focus analytics. CTA: "Start Focusing Free". I like the Dark Mode First style.

**Expected behavior:**
1. Skill triggers, recognizes "from scratch" mode
2. User already chose preset 7 (Dark Mode First) — skip preset menu
3. Generate complete single-file HTML with:
   - Outfit font loaded from Google Fonts
   - Dark theme as default, light toggle available
   - Hero with "Deep work, measured." headline, animated word reveal
   - 5 feature cards with relevant inline SVG icons
   - Stats section with animated counters
   - CTA section with glow effect
   - Footer with links
   - All scroll animations via IntersectionObserver
   - Full meta tags

---

## Example 2: From Scratch — Preset Selection

**User prompt:**
> Generate a landing page for my new coffee subscription box called "Roast Route"

**Expected behavior:**
1. Skill triggers, recognizes "from scratch" mode
2. Shows the preset selection menu (1-10 + custom)
3. After user picks (e.g., "8" for Vintage Retro):
   - Asks for any missing info: features, CTA preference
   - Generates warm, retro-styled page with Fraunces/Lora fonts
   - Coffee-relevant feature cards
   - Pricing section with 3 subscription tiers
   - Testimonials styled as vintage quote cards
4. Outputs complete HTML file

---

## Example 3: Improve Existing

**User prompt:**
> Here's my current landing page HTML [pastes code]. It looks generic and boring. Can you make it look amazing? Maybe something glassmorphic?

**Expected behavior:**
1. Skill triggers, recognizes "improve" mode
2. Analyzes pasted HTML structure and content
3. Applies Glassmorphic Modern preset (2)
4. Preserves all original content/copy
5. Enhances with:
   - Sora font
   - Glass-effect cards with backdrop-filter
   - Floating gradient orbs in background
   - Smooth scroll animations
   - Dark/light mode toggle
   - Responsive improvements
   - SEO meta tags
6. Outputs complete single-file HTML

---

## Example 4: Minimal Input

**User prompt:**
> Landing page for an AI writing tool

**Expected behavior:**
1. Skill triggers
2. Shows preset menu
3. Asks for: product name, tagline, key features, CTA preference
4. Once gathered, generates complete page

---

## Example 5: Custom Aesthetic

**User prompt:**
> Build a landing for "Prism Analytics" — data visualization platform. I want something that feels like a Bloomberg terminal mixed with Apple's design sensibility. Dark background, data-focused, precise.

**Expected behavior:**
1. Skill triggers, recognizes custom aesthetic request
2. Synthesizes custom preset blending Cyberpunk Neon + Dark Mode First + Clean SaaS
3. Picks appropriate fonts (e.g., monospace headlines, clean sans body)
4. Generates with custom CSS variables matching the described vibe
5. Includes data-relevant sections: stats, feature grid, dashboard preview placeholder
