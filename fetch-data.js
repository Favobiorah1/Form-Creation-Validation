// Define async function
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Display each user's name
        users.forEach(user => {
            const userElement = document.createElement('p');
            userElement.textContent = user.name;
            dataContainer.appendChild(userElement);
        });

    } catch (error) {
        // Handle fetch errors
        dataContainer.textContent = 'Failed to load user data. Please try again later.';
        console.error('Fetch error:', error);
    }
}

// Call fetchUserData when DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);