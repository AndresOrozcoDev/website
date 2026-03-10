# Style Presets Reference

Each preset below defines a complete visual system: CSS custom properties, font stacks, Tailwind config extensions, animation character, and design rules. Apply the chosen preset's values throughout the generated landing page.

---

## 1. ☁️ Clean SaaS Minimal

**Vibe**: Stripe, Linear, Vercel. Crisp, confident, quietly premium.

**Fonts**:
- Headline: `"DM Sans", sans-serif` (weight 700)
- Body: `"DM Sans", sans-serif` (weight 400, 500)
- Google Fonts: `family=DM+Sans:wght@400;500;700`

**CSS Variables**:
```css
:root {
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #111827;
  --color-text-secondary: #6B7280;
  --color-primary: #2563EB;
  --color-primary-hover: #1D4ED8;
  --color-accent: #7C3AED;
  --color-border: #E5E7EB;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.06);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.08);
  --radius: 12px;
}
.dark {
  --color-bg: #09090B;
  --color-surface: #18181B;
  --color-text: #FAFAFA;
  --color-text-secondary: #A1A1AA;
  --color-primary: #3B82F6;
  --color-primary-hover: #60A5FA;
  --color-border: #27272A;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.4);
  --shadow-lg: 0 12px 40px rgba(0,0,0,0.5);
}
```

**Tailwind Config**:
```javascript
colors: {
  primary: { DEFAULT: '#2563EB', hover: '#1D4ED8', light: '#DBEAFE' },
  surface: { DEFAULT: '#FFFFFF', dark: '#18181B' },
},
fontFamily: { sans: ['"DM Sans"', 'sans-serif'] },
borderRadius: { DEFAULT: '12px', lg: '16px', xl: '24px' },
```

**Design Rules**:
- Hero: Large headline (text-5xl md:text-7xl), subtle gradient text on key word, generous whitespace
- Cards: White/dark surface, 1px border, subtle shadow, 16px radius
- Buttons: Solid primary with rounded-xl, subtle shadow, scale on hover (transform: scale(1.02))
- Backgrounds: Solid colors, optional very subtle dot grid pattern via radial-gradient
- Animations: Understated — fade-in + slight translateY. Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Spacing: Very generous (py-24 to py-32 between sections)

---

## 2. 🔮 Glassmorphic Modern

**Vibe**: Apple Vision Pro, Figma presentations. Frosted, layered, ethereal.

**Fonts**:
- Headline: `"Sora", sans-serif` (weight 600, 700)
- Body: `"Sora", sans-serif` (weight 400)
- Google Fonts: `family=Sora:wght@400;600;700`

**CSS Variables**:
```css
:root {
  --color-bg: #F0F0F3;
  --color-surface: rgba(255, 255, 255, 0.6);
  --color-text: #1A1A2E;
  --color-text-secondary: #555580;
  --color-primary: #6D5BF7;
  --color-primary-hover: #5A47E0;
  --color-accent: #F472B6;
  --color-border: rgba(255, 255, 255, 0.3);
  --glass-blur: blur(20px);
  --glass-border: 1px solid rgba(255,255,255,0.2);
  --shadow-glass: 0 8px 32px rgba(109, 91, 247, 0.1);
  --radius: 20px;
}
.dark {
  --color-bg: #0F0F1A;
  --color-surface: rgba(30, 30, 50, 0.6);
  --color-text: #EEEEFF;
  --color-text-secondary: #8888BB;
  --color-primary: #8B7BFF;
  --color-primary-hover: #A090FF;
  --color-border: rgba(255, 255, 255, 0.08);
  --shadow-glass: 0 8px 32px rgba(139, 123, 255, 0.15);
}
```

**Design Rules**:
- All cards/panels: `backdrop-filter: blur(20px)`, semi-transparent backgrounds, thin white/translucent borders
- Hero background: Animated gradient mesh (CSS gradient with multiple color stops, animated via keyframes)
- Buttons: Glass effect with border, glow on hover (box-shadow with primary color)
- Background: Floating gradient orbs (absolutely positioned, blur(100px), animated slow drift)
- Animations: Smooth, slightly floaty — longer durations (1s+), ease-out. Cards slide up + fade in.
- Borders: Always subtle, semi-transparent white
- Images/Placeholders: Rounded-2xl with glass border

**Background Orbs CSS**:
```css
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.4;
  animation: float 20s ease-in-out infinite;
}
@keyframes float {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
```

---

## 3. 🏗️ Bold Brutalist

**Vibe**: Craigslist-meets-high-fashion. Raw, intentional, anti-design that IS design.

**Fonts**:
- Headline: `"Space Mono", monospace` (weight 700)
- Body: `"IBM Plex Mono", monospace` (weight 400)
- Google Fonts: `family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@400;500`

**CSS Variables**:
```css
:root {
  --color-bg: #F5F5F0;
  --color-surface: #FFFFFF;
  --color-text: #000000;
  --color-text-secondary: #444444;
  --color-primary: #FF3300;
  --color-primary-hover: #CC2900;
  --color-accent: #0000FF;
  --color-border: #000000;
  --border-width: 3px;
  --shadow-brutal: 6px 6px 0px #000000;
  --radius: 0px;
}
.dark {
  --color-bg: #111111;
  --color-surface: #1A1A1A;
  --color-text: #F5F5F0;
  --color-text-secondary: #AAAAAA;
  --color-primary: #FF4422;
  --color-border: #F5F5F0;
  --shadow-brutal: 6px 6px 0px #F5F5F0;
}
```

**Design Rules**:
- NO border-radius anywhere. Everything is sharp rectangles.
- Thick black borders (3px) on everything — cards, buttons, inputs
- Box shadows: Hard offset (6px 6px 0px) with solid color, no blur
- Headlines: UPPERCASE, letter-spacing: 0.05em, sometimes rotated slightly (-2deg)
- Hover: Shadow offset shifts (translate -2px -2px, shadow grows to 8px 8px)
- Backgrounds: Solid colors, optional halftone dot pattern
- Feature cards: Alternating background colors (primary, accent, black)
- Animations: Snappy, almost jarring — short durations (300ms), ease-in-out
- Links: Thick underline, not color-only indication

---

## 4. 🌆 Cyberpunk Neon

**Vibe**: Blade Runner UI, gaming dashboards, sci-fi HUDs.

**Fonts**:
- Headline: `"Orbitron", sans-serif` (weight 700, 900)
- Body: `"Rajdhani", sans-serif` (weight 400, 500)
- Google Fonts: `family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600`

**CSS Variables**:
```css
:root {
  --color-bg: #0A0A0F;
  --color-surface: #12121A;
  --color-text: #E0E0FF;
  --color-text-secondary: #7070A0;
  --color-primary: #00F0FF;
  --color-primary-hover: #00D4E0;
  --color-accent: #FF00AA;
  --color-accent-secondary: #AAFF00;
  --color-border: rgba(0, 240, 255, 0.2);
  --glow-primary: 0 0 20px rgba(0, 240, 255, 0.3), 0 0 60px rgba(0, 240, 255, 0.1);
  --glow-accent: 0 0 20px rgba(255, 0, 170, 0.3);
  --radius: 4px;
}
/* This preset is dark-first — light mode is a softer version */
.light-mode {
  --color-bg: #F0F0F8;
  --color-surface: #FFFFFF;
  --color-text: #0A0A0F;
  --color-primary: #0088AA;
  --color-accent: #CC0088;
  --glow-primary: 0 0 10px rgba(0, 136, 170, 0.2);
}
```

**Design Rules**:
- Default to DARK mode (this is a dark-first preset)
- Neon glow on primary elements: box-shadow with colored glow, text-shadow for headlines
- Borders: Thin (1px), colored with primary/accent, subtle glow
- Buttons: Outlined with glow on hover, or filled with glow pulse animation
- Backgrounds: Dark with subtle grid pattern (linear-gradient grid lines)
- Scanline overlay (optional): subtle repeating-linear-gradient with 1px transparent lines
- Headlines: Uppercase, wide letter-spacing, sometimes with gradient text (primary→accent)
- Animations: Glitch effects on hero text (optional), sharp fade-ins, neon pulse on CTA
- Feature icons: Outlined with glow effect

**Grid Background CSS**:
```css
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: 
    linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  pointer-events: none;
  z-index: 0;
}
```

---

## 5. ✒️ Elegant Serif Premium

**Vibe**: Rolls Royce, high-end editorial, luxury fashion houses.

**Fonts**:
- Headline: `"Playfair Display", serif` (weight 700, 900)
- Body: `"Source Serif 4", serif` (weight 400)
- Accent/Nav: `"Cormorant Garamond", serif` (weight 500)
- Google Fonts: `family=Playfair+Display:wght@700;900&family=Source+Serif+4:wght@400;600&family=Cormorant+Garamond:wght@500;600`

**CSS Variables**:
```css
:root {
  --color-bg: #FFFDF8;
  --color-surface: #FFFFFF;
  --color-text: #1C1917;
  --color-text-secondary: #78716C;
  --color-primary: #92400E;
  --color-primary-hover: #78350F;
  --color-accent: #B8860B;
  --color-accent-light: #F5DEB3;
  --color-border: #E7E5E4;
  --shadow-elegant: 0 4px 24px rgba(0,0,0,0.06);
  --radius: 2px;
}
.dark {
  --color-bg: #1C1917;
  --color-surface: #292524;
  --color-text: #FFFDF8;
  --color-text-secondary: #A8A29E;
  --color-primary: #D4A843;
  --color-primary-hover: #E5B94E;
  --color-accent: #D4A843;
  --color-border: #44403C;
}
```

**Design Rules**:
- Typography is king — large serif headlines (text-6xl+), generous line-height (1.2 for headlines, 1.7 for body)
- Accent elements in gold (#B8860B or similar warm metallic)
- Thin horizontal rules (1px, gold or muted) as section dividers
- Buttons: Minimal — outlined with serif text, or text-only with arrow (→)
- Backgrounds: Warm off-white, optional subtle paper texture via CSS noise
- Animations: Slow and graceful — 1.2s+ durations, ease-out. Letters reveal one by one in hero.
- Spacing: Extremely generous — luxury is white space
- Cards: Borderless or with very thin borders, relying on spacing and typography for hierarchy
- Images: Large, editorial crop style, optional subtle sepia filter

---

## 6. 🎨 Playful Gradients

**Vibe**: Spotify Wrapped, Notion marketing, indie apps. Fun, bold, approachable.

**Fonts**:
- Headline: `"Plus Jakarta Sans", sans-serif` (weight 700, 800)
- Body: `"Plus Jakarta Sans", sans-serif` (weight 400, 500)
- Google Fonts: `family=Plus+Jakarta+Sans:wght@400;500;700;800`

**CSS Variables**:
```css
:root {
  --color-bg: #FEFBF6;
  --color-surface: #FFFFFF;
  --color-text: #1E293B;
  --color-text-secondary: #64748B;
  --color-primary: #8B5CF6;
  --color-primary-hover: #7C3AED;
  --gradient-hero: linear-gradient(135deg, #667EEA 0%, #764BA2 50%, #F093FB 100%);
  --gradient-cta: linear-gradient(135deg, #F093FB 0%, #F5576C 50%, #FFD200 100%);
  --gradient-card: linear-gradient(135deg, #a78bfa22, #f472b622);
  --color-border: #E2E8F0;
  --shadow-playful: 0 10px 30px -5px rgba(139, 92, 246, 0.15);
  --radius: 20px;
}
.dark {
  --color-bg: #0F172A;
  --color-surface: #1E293B;
  --color-text: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-primary: #A78BFA;
  --gradient-hero: linear-gradient(135deg, #4338CA 0%, #6D28D9 50%, #DB2777 100%);
  --color-border: #334155;
}
```

**Design Rules**:
- Heavy use of gradients — hero background, CTA sections, accent elements
- Large border-radius everywhere (20px cards, full-rounded buttons)
- Bouncy animations: `cubic-bezier(0.34, 1.56, 0.64, 1)` for hover transforms
- Feature cards: Subtle gradient backgrounds, rounded, with slight rotation on hover (1-2deg)
- Buttons: Gradient backgrounds, rounded-full, shadow with color tint
- Backgrounds: Light with floating gradient shapes (blurred, low opacity)
- Emoji as visual accents (sparingly, in feature cards or headers)
- Pill-shaped badges above headlines ("✨ Now in Beta", "🚀 New Feature")
- Animations: Playful bounce on scroll-in, wobble on hover

---

## 7. 🌙 Dark Mode First

**Vibe**: Arc browser, GitHub, Raycast. Developer-friendly luxury darkness.

**Fonts**:
- Headline: `"Outfit", sans-serif` (weight 600, 700)
- Body: `"Outfit", sans-serif` (weight 400)
- Code: `"JetBrains Mono", monospace` (weight 400)
- Google Fonts: `family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400`

**CSS Variables**:
```css
:root {
  --color-bg: #09090B;
  --color-surface: #141416;
  --color-surface-elevated: #1C1C1F;
  --color-text: #FAFAFA;
  --color-text-secondary: #71717A;
  --color-primary: #A78BFA;
  --color-primary-hover: #C4B5FD;
  --color-accent: #34D399;
  --color-border: #27272A;
  --color-border-subtle: #1F1F23;
  --shadow-dark: 0 0 0 1px rgba(255,255,255,0.05), 0 8px 24px rgba(0,0,0,0.4);
  --radius: 12px;
}
/* Light mode exists but is secondary */
.light {
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-surface-elevated: #F4F4F5;
  --color-text: #09090B;
  --color-text-secondary: #71717A;
  --color-primary: #7C3AED;
  --color-border: #E4E4E7;
}
```

**Design Rules**:
- Default dark. Light mode is the alt.
- Surfaces: Layered darkness — bg < surface < surface-elevated
- Borders: Very subtle, often rgba(255,255,255,0.05) — just enough to see
- Cards: Dark surface with subtle border, elevated shadow
- Buttons: Filled primary with slight glow, or ghost with border
- Code snippets: Slightly elevated surface with monospace font, syntax-highlight colors
- Animations: Smooth and professional — 600ms, ease-out. Subtle glow pulse on CTA.
- Accent color (green/emerald) used sparingly for success states, highlights
- Gradient text: Optional on hero headline (primary → accent gradient)
- Nav: Blurred background (backdrop-filter) with border-bottom

---

## 8. 📻 Vintage Retro

**Vibe**: Wes Anderson, vintage packaging, analog warmth.

**Fonts**:
- Headline: `"Fraunces", serif` (weight 700, 900)
- Body: `"Lora", serif` (weight 400)
- Accent: `"Inconsolata", monospace` (weight 400)
- Google Fonts: `family=Fraunces:wght@700;900&family=Lora:wght@400;500&family=Inconsolata:wght@400`

**CSS Variables**:
```css
:root {
  --color-bg: #FDF6EC;
  --color-surface: #FFF8EF;
  --color-text: #3D2B1F;
  --color-text-secondary: #8B7355;
  --color-primary: #C44D30;
  --color-primary-hover: #A83D24;
  --color-accent: #2D5F4A;
  --color-accent-secondary: #D4A843;
  --color-border: #D4C5AA;
  --shadow-retro: 4px 4px 0px #D4C5AA;
  --radius: 8px;
}
.dark {
  --color-bg: #2A2118;
  --color-surface: #3D2B1F;
  --color-text: #FDF6EC;
  --color-text-secondary: #C4A882;
  --color-primary: #E5654A;
  --color-border: #5C4A38;
  --shadow-retro: 4px 4px 0px #5C4A38;
}
```

**Design Rules**:
- Warm color palette throughout — everything feels sun-faded and cozy
- Decorative borders: Double borders, dashed accents, ornamental dividers
- Buttons: Slightly rounded (8px), retro shadow (hard offset), warm colors
- Backgrounds: Paper texture feel (subtle noise via CSS), optional stamp/badge shapes
- Headlines: Sometimes italicized serif, sometimes small-caps
- Feature layout: More editorial — alternating left/right with generous text blocks
- Badge/stamp elements: Circular badges with border, rotated slightly
- Animations: Gentle — slow fades, no aggressive movements. Things appear, not slam in.
- Footer: Styled like vintage letterhead
- Decorative elements: Stars ★, arrows →, em dashes —, ornamental rules

---

## 9. 🌿 Organic Nature

**Vibe**: Patagonia, Aesop, wellness brands. Earthy, calm, intentional.

**Fonts**:
- Headline: `"Libre Baskerville", serif` (weight 700)
- Body: `"Nunito Sans", sans-serif` (weight 400, 600)
- Google Fonts: `family=Libre+Baskerville:wght@400;700&family=Nunito+Sans:wght@400;600`

**CSS Variables**:
```css
:root {
  --color-bg: #F7F5F0;
  --color-surface: #FFFFFF;
  --color-text: #2D3B2D;
  --color-text-secondary: #5C6B5C;
  --color-primary: #4A7C59;
  --color-primary-hover: #3D6B4A;
  --color-accent: #8B6914;
  --color-accent-light: #E8DCC8;
  --color-border: #D8D0C4;
  --shadow-organic: 0 4px 20px rgba(45, 59, 45, 0.08);
  --radius: 16px;
}
.dark {
  --color-bg: #1A2318;
  --color-surface: #243022;
  --color-text: #E8E4DC;
  --color-text-secondary: #A0A89C;
  --color-primary: #6AAB7B;
  --color-border: #3A4838;
}
```

**Design Rules**:
- Organic, flowing shapes — use CSS clip-path or border-radius for blob-like sections
- Color palette: Greens, warm browns, cream, sage
- Buttons: Rounded (16px), earthy colors, subtle leaf or nature icon accents
- Section dividers: Wavy SVG dividers between sections (not straight lines)
- Backgrounds: Warm neutrals, optional subtle leaf pattern (very faint)
- Typography: Serif headlines for authority, sans body for readability
- Animations: Slow, nature-inspired — things grow into place. Scale from 0.95→1 + fade.
- Cards: Soft shadows, generous padding, slightly rounded
- Imagery: Placeholder boxes with nature-toned backgrounds
- Testimonials: Large pull-quotes in serif italic

**Wavy Divider SVG**:
```html
<svg class="w-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
  <path d="M0,60 C300,120 600,0 1200,60 L1200,120 L0,120 Z" fill="currentColor"/>
</svg>
```

---

## 10. 🏢 Corporate Professional

**Vibe**: McKinsey, Salesforce, enterprise trust. Clean, authoritative, reliable.

**Fonts**:
- Headline: `"Merriweather", serif` (weight 700, 900)
- Body: `"Source Sans 3", sans-serif` (weight 400, 600)
- Google Fonts: `family=Merriweather:wght@700;900&family=Source+Sans+3:wght@400;600`

**CSS Variables**:
```css
:root {
  --color-bg: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-text: #0F172A;
  --color-text-secondary: #475569;
  --color-primary: #1E40AF;
  --color-primary-hover: #1E3A8A;
  --color-accent: #0F766E;
  --color-accent-light: #CCFBF1;
  --color-border: #CBD5E1;
  --shadow-corp: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
  --shadow-corp-lg: 0 10px 30px rgba(0,0,0,0.08);
  --radius: 8px;
}
.dark {
  --color-bg: #0F172A;
  --color-surface: #1E293B;
  --color-text: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-primary: #3B82F6;
  --color-border: #334155;
}
```

**Design Rules**:
- Structured, grid-based layouts — nothing off-grid or chaotic
- Color palette: Navy, slate, teal accents. Conservative but not boring.
- Headlines: Serif for trust, clear hierarchy (clear size steps between h1→h2→h3)
- Buttons: Solid, slightly rounded (8px), professional shadow
- Social proof prominent: Logo bar early, trust badges, certifications
- Stats section: Large numbers with supporting text, clean grid
- Cards: Clean white with subtle border and shadow, well-structured content
- Animations: Minimal and professional — simple fade-up on scroll, no bouncing or playfulness
- Footer: Comprehensive — multiple columns, legal links, compliance badges
- CTA: Direct, action-oriented language ("Schedule a Demo", "Contact Sales")
- Testimonials: Include name, title, company — enterprise credibility

---

## Custom Preset Guidance

If the user describes their own aesthetic instead of picking a number, synthesize a custom preset by:

1. **Identify the closest 2–3 presets** and blend their approaches
2. **Extract key signals**: color words, mood words, reference brands
3. **Define the 5 essentials**: fonts (2), primary color, background tone, border-radius, animation character
4. **Generate CSS variables** following the same structure as above
5. **Apply consistently** throughout all sections

Always define both `:root` (light) and `.dark` (dark) variables, even for dark-first presets.
