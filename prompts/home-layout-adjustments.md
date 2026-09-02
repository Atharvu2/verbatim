# Implementation Prompt: Home Layout & Hero Button Adjustment

## 1. Goal
1. Fix the "Explore Courses" button so the right arrow icon is strictly inline beside the text on the same line with `whitespace-nowrap` and flex alignment.
2. Reduce the vertical height and padding of the navbar, hero section, typography margins, search bar, and courses spacing so the top of the course cards is visible above the fold on desktop viewports.

---

## 2. Skills Read & Referenced
- `AGENTS.md` (Workflow loop, Next.js UI reproduction standards)
- `modern-web-guidance` (Above-the-fold viewport optimization, CSS flexbox alignment, whitespace management)

---

## 3. Code Inspected
- `components/ui/button.tsx`: `baseStyles`, children wrapping, and icon slot behavior.
- `components/home/hero-section.tsx`: Margins (`mb-6`, `mb-8`, `mb-10`), padding (`pt-16 pb-12`), search bar height (`h-16`).
- `components/home/featured-courses.tsx`: Section padding (`pt-8 pb-14`), card padding (`p-6`).
- `components/nav/navbar.tsx`: Header padding (`py-3.5`).

---

## 4. Decisions & Layout Changes

1. **"Explore Courses" Button Arrow Alignment**:
   - In `components/ui/button.tsx`, ensure `whitespace-nowrap` is applied to the button and inner content. Pass `icon={<ArrowRight className="w-4 h-4" />}` and `iconPosition="right"` to `Button` so the arrow is structured as an aligned flex item with fixed gap.
   - Add `whitespace-nowrap` to prevent any text wrap or icon drops.

2. **Vertical Spacing & Above-The-Fold Visibility**:
   - **Navbar**: Reduce vertical padding from `py-3.5` to `py-2.5`.
   - **Hero Section**:
     - Container padding: Reduce from `pt-12 sm:pt-16 pb-12` to `pt-6 sm:pt-8 pb-6`.
     - Eyebrow badge margin: Reduce from `mb-6` to `mb-3.5`.
     - Headline font size & margin: Adjust to `text-4xl sm:text-5xl md:text-[54px] leading-[1.1] mb-3.5`.
     - Subtitle font size & margin: Adjust to `text-sm sm:text-base leading-relaxed mb-5 max-w-lg`.
     - CTA button container: Reduce margin from `mb-10` to `mb-5`.
     - Search Bar height: Adjust from `h-16` (64px) to `h-13 sm:h-14` (52px–56px).
   - **Courses Section**:
     - Section padding: Adjust from `pt-8 pb-14` to `pt-2 pb-10`.
     - Card padding & spacing: Use `p-5` and tighter margins so the tops of all 3 course cards peek cleanly into the initial desktop screen view.

---

## 5. Files to Touch
- `components/ui/button.tsx`: Add `whitespace-nowrap` and ensure inline icon alignment.
- `components/home/hero-section.tsx`: Compact vertical margins, refine headline/subtitle sizes, use `icon` prop with `ArrowRight`.
- `components/home/featured-courses.tsx`: Tighten top spacing so cards show above the fold.
- `components/nav/navbar.tsx`: Tighten header padding.

---

## 6. Acceptance Criteria
1. The "Explore Courses" button has the arrow positioned horizontally right beside the text with proper gap, never wrapping to a second line.
2. The initial desktop viewport displays the header, hero section, search bar, and the top section of the course cards so users immediately perceive more content below.
3. `npm run lint` and `npm run build` pass with 0 errors.

---

## 7. Checks to Run
- `npm run lint`
- `npm run build`

---

## 8. Manual Test Steps
1. Navigate to `http://localhost:3000`.
2. Verify the "Explore Courses →" button has the text and arrow on a single horizontal line.
3. Verify on a 1080p desktop screen that the "All Courses" section title and cards peek into view above the fold.
