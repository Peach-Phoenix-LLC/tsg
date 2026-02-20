# Design System: tsgabrielle®

**Project ID:** 14663654536230992593

## 1. Visual Theme & Atmosphere

The tsgabrielle® aesthetic is a "Holographic High-Fashion" experience. It blends dark, premium space-like atmospheres with vibrant, iridescent liquid text and glassmorphism. The brand philosophy focuses on "Artistic Expression" and "Fashion that empowers," utilizing fluid design to transcend traditional boundaries.

## 2. Color Palette & Roles

| Role | Color Name | Hex Code | Description |
| :--- | :--- | :--- | :--- |
| **Primary** | Iridescent Purple | `#ab2fc1` | The core brand identity color, used for accents and interactive states. |
| **Background** | Deep Cosmos | `#100811` | A rich, near-black purple that provides the high-contrast base for holographic elements. |
| **Accent** | Brand Yellow | `#fef08a` | Used for sub-headings and scarcity indicators to draw immediate attention. |
| **Secondary** | Muted Silver | `#e7e7e7` | Used for body text and subtle borders to maintain readability. |
| **Holographic** | Holo Pink/Cyan | `#ffb6ff`/`#b3ffff` | Key colors in the signature `holo-gradient` used for liquid effects. |

## 3. Typography Rules

- **Headings (H1-H6):** `Lato` (700 weight). Characteristics include tight letter-spacing (`-0.02em`) and uppercase styling for titles to project authority and elegance.
- **Body Text:** `Manrope`. A clean, modern sans-serif that balances the complex visual effects with high readability.
- **Secondary UI:** `Plus Jakarta Sans`. Used for specific UI components like the Admin Panel or metadata descriptors.

## 4. Component Stylings

- **Buttons (`holo-button`):**
  - **Shape:** Pill-shaped (`rounded-full`) or rounded rectangles (`rounded-lg`).
  - **Effects:** Backdrop blur (12px), subtle borders (`glass-border`), and an animated `holo-gradient-intense` background on hover.
  - **High-Vis Wrapper:** Specialized animated borders (`border-rotate`) to highlight primary CTAs like "Add to Bag".
- **Cards/Containers:**
  - **Style:** "Glassmorphism" effect using `backdrop-filter: blur(12px)` and `bg-white/5`.
  - **Shadows:** Layered purple and cyan shadows (`shadow-holo`) to create depth and a floating effect.
- **Interactive Hotspots:**
  - **Visual:** Small white/40 semi-transparent circles with a 1px white border.
  - **Animation:** Continuous `ping` animation to signify interactability.

## 5. Layout Principles

- **Fluidity:** Use of `100vw` and `100vh` sections with full-width immersive imagery.
- **Whitespace:** Generous margin usage and grid alignment to prevent the rich visual effects from feeling cluttered.
- **Micro-Animations:** Subtle `float` and `shimmer` animations on assets to make the page feel "alive" and responsive to user attention.

---
*This document serves as the source of truth for all future tsgabrielle® storefront expansions.*
