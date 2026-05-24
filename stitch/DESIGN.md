---
name: Rugged Functionalism
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#434843'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#737973'
  outline-variant: '#c3c8c1'
  surface-tint: '#4d6453'
  primary: '#061b0e'
  on-primary: '#ffffff'
  primary-container: '#1b3022'
  on-primary-container: '#819986'
  inverse-primary: '#b4cdb8'
  secondary: '#8e4f00'
  on-secondary: '#ffffff'
  secondary-container: '#fe9415'
  on-secondary-container: '#643600'
  tertiary: '#131629'
  on-tertiary: '#ffffff'
  tertiary-container: '#282a3f'
  on-tertiary-container: '#9091aa'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d0e9d4'
  primary-fixed-dim: '#b4cdb8'
  on-primary-fixed: '#0b2013'
  on-primary-fixed-variant: '#364c3c'
  secondary-fixed: '#ffdcc1'
  secondary-fixed-dim: '#ffb877'
  on-secondary-fixed: '#2e1600'
  on-secondary-fixed-variant: '#6c3a00'
  tertiary-fixed: '#e0e0fc'
  tertiary-fixed-dim: '#c4c4df'
  on-tertiary-fixed: '#181a2e'
  on-tertiary-fixed-variant: '#43455b'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: '1.5'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  stack-xs: 4px
  stack-sm: 8px
  stack-md: 16px
  gutter: 12px
  margin-mobile: 16px
  margin-desktop: 32px
  max-width: 1200px
---

## Brand & Style

The design system is engineered for "Rugged Functionalism," prioritizing utility and resilience over ornament. It is designed specifically for field teams operating in unpredictable environments where screen glare, low-light conditions, and physical fatigue are constant factors. The personality is utilitarian, dependable, and authoritative.

The aesthetic draws from **Minimalism** and **Modern Corporate** influences but incorporates industrial "rugged" elements—sharp edges, high-contrast indicators, and heavy-weight typography. The goal is to evoke the feeling of a professional-grade physical tool, ensuring that the user's cognitive load is dedicated to the task at hand rather than navigating the interface. High information density is maintained through rigorous structural alignment and a lack of decorative shadows or gradients.

## Colors

This design system utilizes a high-contrast palette optimized for visibility.

- **Primary (Forest Green):** Used for structural navigation and primary branding. It provides a grounded, professional foundation.
- **Secondary (Warning Orange):** Reserved for critical action triggers and high-priority status flags. It must be used sparingly to maintain its disruptive quality.
- **Backgrounds:** The primary surface is a low-glare off-white (`#F8F9FA`) to reduce eye strain, while secondary surfaces use neutral grays to create clear visual compartmentalization.
- **Semantic Colors:**
    - **Ready (Green):** Indicates full offline synchronization and operational readiness.
    - **Missing (Red):** Flags critical data gaps or item shortages.
    - **Conflict (Yellow/Amber):** Highlights synchronization issues requiring manual resolution.

## Typography

Typography is the primary driver of hierarchy in the design system.

- **Headlines:** Uses **Hanken Grotesk** with extra-bold weights. This ensures that section titles are legible even at a distance or through screen glare.
- **Body:** **Inter** is used for its exceptional legibility and neutral character. A slightly heavier base weight (500) is preferred for standard body text to ensure stroke thickness remains visible in harsh light.
- **Technical Data:** **JetBrains Mono** is utilized for status labels, IDs, and tabular data. The monospaced nature ensures that numerical values remain aligned and easily scannable in dense lists.

## Layout & Spacing

The design system employs a **Fixed Grid** model on desktop and a **Fluid Grid** on mobile devices.

- **Grid:** A 12-column system is used for desktop. To maximize information density, gutters are kept narrow (12px).
- **Rhythm:** An 8px base grid governs all vertical spacing, but a 4px "micro-step" is permitted for dense UI components like data tables and nested lists.
- **Density:** Information should be packed tightly but separated by clear, high-contrast borders rather than white space. Padding inside containers is standardized at 12px for compact views and 16px for standard views.
- **Adaptivity:** On mobile, margins reduce to 16px and all multi-column layouts stack vertically. The priority on mobile is "one-handed reachability," placing primary action buttons at the bottom of the viewport.

## Elevation & Depth

In keeping with the rugged aesthetic, the design system avoids ambient shadows and soft blurs. Depth is conveyed through **Tonal Layers** and **Bold Borders**.

- **Surface Tiers:** Background is Level 0. Main content cards are Level 1 (Pure White). Active overlays or modals are Level 2 (White with a 2px solid border).
- **Outlines:** Instead of shadows, use 1px or 2px solid borders (`#DEE2E6`) to define elements.
- **Interaction:** Active states are indicated by color shifts (e.g., Forest Green to Black) rather than "lifting" the element with shadows. This maintains a "flat-built" look that feels more like a mechanical dashboard than a digital layer.

## Shapes

The shape language is strictly **Soft (0.25rem)**.

Corners are kept crisp to reflect a professional, industrial feel. Only primary action buttons and status chips use the standard 0.25rem radius. Structural elements like data cards and container blocks may use 0px (sharp) corners to reinforce the sense of a rigid, durable interface. Large-scale containers should never exceed 0.5rem (rounded-lg) to maintain the functionalist tone.

## Components

- **Buttons:** Primary buttons are Forest Green with white text. High-alert buttons use Warning Orange. All buttons use 700-weight typography in all-caps for maximum impact. 
- **Status Badges:** Compact, rectangular chips with solid background colors. Use `label-caps` typography. The badge color should reflect the 'Offline Readiness' state clearly.
- **Data Tables:** Dense layout with 1px solid horizontal dividers. Use `data-mono` for all numerical values. Row heights are locked to 32px for maximum density.
- **Input Fields:** Heavy 2px borders when focused. Labels must always be visible (no floating labels) and use `label-caps`.
- **Readiness Bar:** A persistent, high-contrast bar at the top or bottom of the screen indicating "Kit Status." It uses Forest Green for "Synced" and Warning Orange for "Changes Pending."
- **Checkboxes:** Oversized (20px x 20px) to allow for easy tapping in field conditions, with a high-contrast checkmark.