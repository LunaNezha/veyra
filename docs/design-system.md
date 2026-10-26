# Veyra Interactive — design system

## Creative direction

A cinematic, independent gaming studio with an editorial voice. Large, tightly tracked headlines meet quiet technical labels and richly lit original worlds. Acid lime provides one clear interaction color; violet and amber belong to individual game worlds. Atmospheric depth takes priority over decorative interface effects.

## Tokens

| Token      | Value          | Role                                                          |
| ---------- | -------------- | ------------------------------------------------------------- |
| Background | `#0b0d0e`      | Primary obsidian canvas                                       |
| Panel      | `#131617`      | Elevated surfaces and dialogs                                 |
| Accent     | `#d4fa73`      | Primary actions, selected navigation, focus, small highlights |
| Foreground | `#f4f5ef`      | Primary text                                                  |
| Muted      | `#9da3a4`      | Supporting text                                               |
| Border     | White at 8–18% | Quiet grouping and hierarchy                                  |

Space Grotesk carries the wordmark, headings, controls, and body copy. Azeret Mono carries technical labels and collection metadata. Both are local fonts. Headline tracking is intentionally tight; body copy uses comfortable line height.

The layout uses a 1320px content maximum, 48px desktop gutters, and 20px mobile gutters. Primary content spacing is 104px on desktop and 68px on small screens. Cards use 10–14px radii; primary actions use 7px radii.

## Interaction patterns

- Primary CTA: lime surface, dark text, subtle glow, directional arrow.
- Game collection: platform filters with `aria-pressed`, content count announcements, image scale on hover/focus, pointer-driven light, and detail dialog.
- Careers: department filters, accessible expanded state, animated details, and a role dialog with an honest concept notice.
- Dialogs: Headless UI focus containment, Escape, backdrop dismissal, close button, and focus restoration.
- Newsletter: visible email label, native browser validation, explicit demo success announcement, and reset action.
- Branding: geometric V mark, subtle hover rotation, oversized footer wordmark, and coordinated SVG/PNG assets.

Framer Motion handles reveals, filtered collection transitions, pointer light, and the careers accordion. CSS handles image drift and atmospheric lighting. The hero includes a pause control. `prefers-reduced-motion` disables ongoing atmospheric animation, smooth scrolling, and layout motion. A shared media-query subscription responds to preference changes immediately.

## Asset direction

The hero and ECHOFALL share an eclipse-lit alien coast. NEON DIVIDE uses violet city lights and wet asphalt. WILDLIGHT introduces warm light, moss, and intimate fantasy exploration. These worlds have different moods while sharing a cinematic level of detail.

The exact generation prompts and final workspace paths are in `art-direction.json`. Tool: built-in `image_gen`. All images are served locally as WebP, through `next/image`.

## Research and implementation

The UI/UX skill's gaming showcase guidance informed the hierarchy and cinematic art direction. Its Next.js accessibility search did not return a relevant verified match; motion behavior was implemented using the framework's reduced-motion API and general accessible interaction guidance.

21st.dev metadata references: Glowing Card by ravikatiyar162 and Glow Card Grid by ncdai. These informed restrained glass surfaces and pointer lighting; the project uses its own implementation and no retrieved paid component source.

## Content honesty

Veyra is a portfolio concept. Titles, release badges, directors, and openings are illustrative. There are no invented commercial player counts or revenue statistics. The newsletter does not transmit data. Career dialogs do not collect résumés. Social destinations are clearly identified until owned studio profiles are configured.
