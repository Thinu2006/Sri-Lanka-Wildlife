const menu = {
    menuTitle: '',
};
const content = {
    titleOne:'',
    titleTwo:'',

};


fetch('adminData.json')
    .then(response => response.json())
    .then(data => {
        menu.menuTitle=data[0].menu.menuTitle;
        content.titleOne=data[1].content.titleOne;
        content.titleTwo=data[1].content.titleTwo;

        localStorage.setItem('menu', JSON.stringify(menu));
        localStorage.setItem('content', JSON.stringify(content));
    })
    .catch(error => console.error('Error fetching data:', error));


// JS to toggling the menu//

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const menu = document.getElementById('menu');

    // Function to open the menu
    function openMenu() {
        menu.style.height = 'auto';
        menu.style.display = 'block';
        closeBtn.style.display = 'block';
        menuToggle.style.display = 'none';
    }

    // Function to close the menu
    function closeMenu() {
        menu.style.height = '0';
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuToggle.style.display = 'block';
    }

    // Event listener for menu toggle button
    menuToggle.addEventListener('click', function () {
        openMenu();
    });

    // Event listener for close button
    closeBtn.addEventListener('click', function () {
        closeMenu();
    });

    // Event listener for window resize to close menu
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});


//Registered users//

// Retrieve registered users from local storage
let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

// Display registered users on the admin page
let usersContainer = document.getElementById('registeredUsersContainer');
if (registeredUsers.length > 0) {
    usersContainer.innerHTML = '<h3>Registered Users:</h3>';
    registeredUsers.forEach(function(user) {
        usersContainer.innerHTML += '<p>Username: ' + user.username + '<br> Password: ' + user.password +'<br> Email: ' + user.email + '</p><br>';
    });
} else {
    usersContainer.innerHTML = '<p class="no-users-message">No registered users yet.</p>';
}

    

////Newsletter subcription////

document.addEventListener("DOMContentLoaded", function() { 
    // Gets the subscriptions list
    const subscriptionsList = document.getElementById('subscriptionsList'); 

    // Retrieve subscriptions from localStorage and display them///
    function displaySubscriptions() { 
        // Gets subscriptions from local storage
        const storedSubscriptions = localStorage.getItem('newsletterSubscriptions'); 
        // Checks if subscriptions exist in local storage
        if (storedSubscriptions) { 
            // Parses the subscriptions from JSON
            const subscriptions = JSON.parse(storedSubscriptions); 
            // Goes through each subscription email
            subscriptions.forEach(function(email) { 
                // Creates a list items
                const listItem = document.createElement('li'); 
                // Sets the content of the list to email
                listItem.textContent = email; 
                // Appends the list item to the subscriptions list
                subscriptionsList.appendChild(listItem); 
            });
        }
    }
    displaySubscriptions(); 
});
    

