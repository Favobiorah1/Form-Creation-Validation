document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div
    const form = document.getElementById('myForm');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validation variables
        let isValid = true;
        const messages = [];

        // Username validation (min 3 characters)
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Email validation (must contain @ and .)
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Email must contain @ and . characters.');
        }

        // Password validation (min 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.innerHTML = ''; // Clear previous messages
        feedbackDiv.className = ''; // Reset class

        if (isValid) {
            feedbackDiv.textContent = 'Form submitted successfully!';
            feedbackDiv.className = 'success';
            // Here you could actually submit the form to a server
            // form.submit();
        } else {
            feedbackDiv.className = 'error';
            messages.forEach(message => {
                const p = document.createElement('p');
                p.textContent = message;
                feedbackDiv.appendChild(p);
            });
        }
    });
});
