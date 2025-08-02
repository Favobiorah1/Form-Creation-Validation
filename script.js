document.addEventListener('DOMContentLoaded', function() {
    // Select the form and feedback div
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get and trim input values
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
            messages.push('Please enter a valid email address (must contain @ and .).');
        }

        // Password validation (min 8 characters)
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Display feedback
        feedbackDiv.innerHTML = ''; // Clear previous messages
        
        if (isValid) {
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.className = 'success';
            // Here you could submit the form to a server if needed
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