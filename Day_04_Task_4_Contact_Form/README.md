# Day 4 – Task 4: Contact Form

A styled contact page with a form that validates input using JavaScript. There is no backend, so nothing is actually sent.

## What I built
- Two-column layout: contact info on the left, the form on the right
- Form fields: **Name**, **Email**, **Message**
- Inline error messages under each field
- A success message after a valid submission

## Validation rules
| Field   | Rule |
|---------|------|
| Name    | At least 2 characters |
| Email   | Required, and must look like `name@example.com` |
| Message | At least 10 characters |

## How it behaves
- Each field is checked when the user leaves it (`blur`)
- Once a field shows an error, it re-checks live as the user types, so the error clears as soon as it is fixed
- On submit, all fields are checked; if any is invalid, focus moves to the first invalid field
- If everything is valid, the page shows "Thank you, *first name*! Your message has been sent." and the form resets

## What I practised
- DOM selection and event listeners (`input`, `blur`, `submit`)
- Regular expressions for email checking
- Preventing the default submit with `preventDefault()`
- Accessibility: `novalidate` with custom messages, `aria-invalid`, `role="alert"` on errors, `role="status"` on the success message, visible focus styles
- Mobile-friendly styling (16px inputs avoid iPhone zoom) and `prefers-reduced-motion` support

## Files
```
Day_04_Task_4_Contact_Form/
├── index.html
├── style.css
└── script.js
```

## How to run
Open `index.html` in any browser and try submitting the form empty, with a bad email, and with valid details.

## Tech
HTML5, CSS3, vanilla JavaScript