# Day 3 – Task 3: Landing Page

A landing page for **Pixelnest**, a pretend UI/UX design studio. It is a practice project, so the studio and email address are fictional.

## What I built
- Navigation bar with Home, Why us, How it works and Contact links
- **Hero** with a headline, short pitch, two buttons, and a browser-window mockup drawn using only CSS
- **Why choose Pixelnest** with three feature cards (Clean design, Works on every screen, Fast delivery)
- **How it works** with a three-step numbered process
- **Call to action** box with an "Email us" button
- Footer with location, contact links and a note that this is a practice project

## What I practised
- Structuring a full landing page with clear sections and visual hierarchy
- Creating illustrations with pure CSS (the browser mockup) instead of images
- Feature cards using an `auto-fit` grid, with hover lift and highlight
- In-page navigation using anchor links (`#features`, `#process`, `#contact`)
- Responsive layout with breakpoints at 900px (hero stacks) and 640px
- `prefers-reduced-motion` support

## Files
```
Day_03_Task_3_Landing_Page/
├── index.html
└── style.css
```

## How to run
Open `index.html` in any browser. No dependencies.

## Notes
The header was changed from `position: sticky` to `position: relative` in a later commit, so it now scrolls away with the page.

## Tech
HTML5, CSS3 (Grid, Flexbox, custom properties), Google Fonts