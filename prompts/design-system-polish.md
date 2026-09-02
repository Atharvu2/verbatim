# Implementation Prompt: Design System Visual & Typography Refinement

## 1. Goal
Refine the Verbatim Design System based on user feedback and visual audit:
1. Fix the "Watch Video" text button and play circle icons in Section 07 (Buttons), Lesson Video cards, and everywhere else so text and play circle icons have proper spacing, sizing, and alignment (`Watch Video` with a crisp play icon).
2. Replace the `Accessible` principle icon in Section 14 with the standard accessibility human icon (`Accessibility` from `lucide-react`) matching `verbatim-designsystem.png`.
3. Enhance typographic cohesion, hierarchy, sizes, weights, letter-spacing, and slate/black tone contrast between **Instrument Serif** (display/editorial headings) and **Inter** (clean UI/body text) across all sections.

---

## 2. Skills Read & Referenced
- `AGENTS.md` (UI replication, exact visual fidelity, loop workflow)
- `modern-web-guidance` (Typography hierarchy, semantic icons, accessible contrast)

---

## 3. Code & Images Inspected
- `uploaded_media_0_1788379707003.png`: Shows Text button column with `Watch○` squeezed text and missing spacing.
- `uploaded_media_1_1788379707003.png`: Shows `Sparkles` icon on "Accessible" card instead of the accessibility person icon.
- `design/verbatim-designsystem.png`: The reference source showing `Watch Video [PlayCircle]` with 2px stroke, the `Accessibility` icon for Accessible principle, and balanced typography.
- `components/ui/button.tsx`: Button text variant padding, gap, and size styling.
- `components/cards/lesson-video-card.tsx`: Video card play trigger styling.
- `app/page.tsx`: Showcase layout, typography scale table, and section headers.

---

## 4. Decisions & Visual Enhancements

1. **Button "Watch Video" & Play Icon Fixes**:
   - Update Text button in `components/ui/button.tsx`: ensure `variant="text"` preserves appropriate inline padding (`px-2 py-1` or `h-auto gap-2`), flex alignment, and font size.
   - In `app/page.tsx`, change button labels in the Text column from `Watch` to `Watch Video` matching the design spec.
   - Use a custom, optically balanced SVG play circle icon or `PlayCircle` from `lucide-react` with `w-4 h-4`, `strokeWidth={2}`, and proper gap (`gap-2`) so the icon is crisp and never overlaps text.

2. **Accessibility & Principle Icons**:
   - In `14 PRINCIPLES`, import `Accessibility` from `lucide-react` for the "Accessible" card.
   - Ensure the "Focus & Calm" card uses `Target` or `Compass` concentric icon matching the design.

3. **Typography & Visual Hierarchy Harmonization**:
   - **Instrument Serif**:
     - Display 1 (`text-5xl md:text-6xl font-serif text-neutral-900 tracking-tight leading-[1.15]`): High elegance, authoritative yet friendly.
     - Display 2 (`text-3xl md:text-4xl font-serif text-neutral-900 tracking-tight leading-[1.2]`): Clear editorial presence for section titles.
   - **Inter**:
     - Heading 1 (`text-2xl font-sans font-semibold text-neutral-900 tracking-tight`): Card titles.
     - Heading 2 (`text-lg font-sans font-semibold text-neutral-900`): Sub-sections.
     - Heading 3 (`text-base font-sans font-medium text-neutral-900`): Small titles.
     - Body Large (`text-base text-neutral-700 leading-relaxed`), Body (`text-sm text-neutral-600 leading-normal`), Small (`text-xs text-neutral-500`).
   - Refine text colors: Primary titles `#0F172A` (Neutral 900), subtitles `#334155` (Neutral 700), body copy `#475569` (Neutral 600), captions/metadata `#64748B` (Neutral 500).
   - In Section 03 (Type Scale), render actual live rendered examples of each style level with their typography tokens.

---

## 5. Files to Touch
- `components/ui/button.tsx`: Refine text variant padding, height, and icon spacing.
- `components/cards/lesson-video-card.tsx`: Ensure clean play icon alignment and spacing.
- `app/page.tsx`: Fix "Watch Video" text buttons, update Accessible icon to `Accessibility`, harmonize typography scales and visual weights across all 14 sections.

---

## 6. Acceptance Criteria
1. Text buttons clearly display `Watch Video` with an optically balanced play-circle icon and clean spacing.
2. The "Accessible" principle card displays the proper accessibility figure icon.
3. The type hierarchy between Instrument Serif and Inter feels natural, cohesive, legible, and visually balanced with appropriate weights and neutral color values.
4. `npm run build` and `npm run lint` succeed with 0 errors.

---

## 7. Checks to Run
- `npm run lint`
- `npm run build`

---

## 8. Manual Test Steps
1. Navigate to `http://localhost:3000`.
2. Inspect Section 07 (Buttons) -> Verify `Watch Video` text button in Default, Hover, and Disabled states.
3. Inspect Section 14 (Principles) -> Verify the `Accessibility` icon on the "Accessible" card.
4. Inspect Section 02 & 03 (Typography & Type Scale) and section headings to verify the harmonious visual pairing of Instrument Serif and Inter.
