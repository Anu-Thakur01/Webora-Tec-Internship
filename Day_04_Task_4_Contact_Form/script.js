// Contact form validation (no backend needed)
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

const fields = {
  name: {
    input: document.getElementById("name"),
    error: document.getElementById("nameError"),
    check: (v) => (v.length < 2 ? "Please enter your name." : ""),
  },
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailError"),
    check: (v) => {
      if (!v) return "Please enter your email.";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email like name@example.com.";
    },
  },
  message: {
    input: document.getElementById("message"),
    error: document.getElementById("messageError"),
    check: (v) => (v.length < 10 ? "Please write at least 10 characters." : ""),
  },
};

// Check one field, show or clear its error, return true if valid
function validateField(field) {
  const message = field.check(field.input.value.trim());
  field.error.textContent = message;
  field.input.classList.toggle("invalid", message !== "");
  field.input.setAttribute("aria-invalid", message !== "");
  return message === "";
}

// Re-check a field while the user fixes it
Object.values(fields).forEach((field) => {
  field.input.addEventListener("input", () => {
    successMsg.hidden = true;
    if (field.input.classList.contains("invalid")) validateField(field);
  });
  field.input.addEventListener("blur", () => validateField(field));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const results = Object.values(fields).map(validateField);
  const allValid = results.every(Boolean);

  if (!allValid) {
    // Move focus to the first field with an error
    Object.values(fields).find((f) => f.input.classList.contains("invalid")).input.focus();
    successMsg.hidden = true;
    return;
  }

  const firstName = fields.name.input.value.trim().split(" ")[0];
  successMsg.textContent = `Thank you, ${firstName}! Your message has been sent.`;
  successMsg.hidden = false;
  form.reset();
});