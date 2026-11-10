# Day 2 – Task 2: Product Cards

A responsive product listing page for a fictional flower shop called **Bloomify**, showing six bouquets as cards.

## What I built
- A page header with the brand logo, a heading and a short tagline
- Six product cards, each with an image, name, short description, price (in Rs.) and an **Add to cart** button
- Products: Rose Romance, Sunny Sunflowers, Lavender Dream, Pink Peony, Tulip Delight, White Orchid
- Footer with copyright

## What I practised
- Building a card layout with **CSS Grid** using `repeat(auto-fit, minmax(260px, 1fr))`, so the number of columns adjusts to the screen width automatically
- Card hover effects: lift with shadow, border colour change, and a gentle image zoom
- Button hover and focus states
- Single-column layout on small screens (below 640px)
- Meaningful `alt` text on every image and `prefers-reduced-motion` support

## Files
```
Day_02_Task_2_Product_Cards/
├── index.html
├── style.css
└── assets/        (six bouquet images)
```

## How to run
Open `index.html` in any browser. The "Add to cart" buttons are visual only (no cart logic in this task).

## Tech
HTML5, CSS3 (Grid, transitions), Google Fonts