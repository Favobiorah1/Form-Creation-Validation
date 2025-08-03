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

        // Create a <ul> to hold user names
        const userList = document.createElement('ul');

        // Loop through users and create <li> for each
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the <ul> to the container
        dataContainer.appendChild(userList);

    } catch (error) {
        dataContainer.textContent = 'Failed to load user data. Please try again later.';
        console.error('Fetch error:', error);
    }
}

// Invoke on DOMContentLoaded
document.addEventListener('DOMContentLoaded', fetchUserData);
