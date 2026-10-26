document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const successMessage = document.getElementById('successMessage');

    // Validation rules
    const validators = {
        name: (value) => value.trim().length >= 2 ? '' : 'Name must be at least 2 characters long.',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Please enter a valid email address.',
        message: (value) => value.trim().length >= 10 ? '' : 'Message must be at least 10 characters long.'
    };

    // Real-time validation on input
    [nameInput, emailInput, messageInput].forEach(input => {
        input.addEventListener('input', () => validateField(input));
        input.addEventListener('blur', () => validateField(input));
    });

    function validateField(input) {
        const fieldName = input.name;
        const errorSpan = document.getElementById(`${fieldName}Error`);
        const errorMsg = validators[fieldName](input.value);
        
        if (errorMsg) {
            input.classList.add('invalid');
            errorSpan.textContent = errorMsg;
            return false;
        } else {
            input.classList.remove('invalid');
            errorSpan.textContent = '';
            return true;
        }
    }

    // Form submission handler
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const isNameValid = validateField(nameInput);
        const isEmailValid = validateField(emailInput);
        const isMessageValid = validateField(messageInput);

        if (isNameValid && isEmailValid && isMessageValid) {
            successMessage.hidden = false;
            form.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.hidden = true;
            }, 5000);
        }
    });
});