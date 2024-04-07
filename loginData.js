const formData = {
    signupTitle: '',
    signupPara: '',
    mainTitleSignup: '',
    signupBtn: '',
    loginLink: '',
    loginTitle: '',
    loginPara: '',
    mainTitleLogin: '',
    forgotLink: '',
    loginBtn: '',
};
fetch('login.json')
    .then(response => response.json())
    .then(data => {
        formData.signupTitle = data[0].formData.signupTitle;
        formData.signupPara = data[0].formData.signupPara;
        formData.mainTitleSignup = data[0].formData.mainTitleSignup;
        formData.signupBtn = data[0].formData.signupBtn;
        formData.loginLink = data[0].formData.loginLink; 
        formData.loginTitle = data[0].formData.loginTitle;
        formData.loginPara = data[0].formData.loginPara;
        formData.mainTitleLogin = data[0].formData.mainTitleLogin;
        formData.forgotLink = data[0].formData.forgotLink;
        formData.loginBtn = data[0].formData.loginBtn;

        localStorage.setItem('formData', JSON.stringify(formData));
    })
    .catch(error => console.error('Error fetching data:', error));

// Get references to the signup and login form boxes
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

// Get reference to the signup and login button links
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');

// Add event listeners to the button links & function to toggle between signup and login forms
signupLink.addEventListener('click', toggleSignup);
function toggleSignup() {
    signupForm.style.display = 'flex';
    loginForm.style.display = 'none';
}
loginLink.addEventListener('click', toggleLogin);
function toggleLogin() {
    signupForm.style.display = 'none';
    loginForm.style.display = 'flex';
}

///Login Form

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values entered in the username and password fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the entered credentials match admin credentials
    if (username === 'admin' && password === 'admin@1234') {
        // Direct to admin dashbaord if the credentials are correct
        window.location.href = 'admin.html';
    } else {
        // Load registered users from local storage
        var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        
        // Check if the entered credentials match any registered user
        var userFound = registeredUsers.some(function(user) {
            return user.username === username && user.password === password;
        });

        // If the user is found among registered users, directing to user dashbaord
        if (userFound) {
            window.location.href = 'user.html';
        } else {
            // If neither admin nor registered user display an error message
            alert('Invalid username or password. Please try again.');
        }
    }
});


//SignUp Page

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get the values entered in the username, email, and password fields
    var regUsername = document.getElementById('regUsername').value;
    var regEmail = document.getElementById('regEmail').value;
    var regPassword = document.getElementById('regPassword').value;

    // Load registered users from local storage
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    
    // Check if the entered username or email already exists in the registered users' list
    var userExists = registeredUsers.some(function(user) {
        return user.username === regUsername || user.email === regEmail;
    });

    // If the user already exists, display an alert and prevent registration
    if (userExists) {
        alert('This username or email is already in use. Please choose a different one.');
    } else {
        // Creating a new user object
        var newUser = {
            username: regUsername,
            email: regEmail,
            password: regPassword
        };
        // Add the new user to the array of registered users
        registeredUsers.push(newUser);

        // Store the updated array in local storage
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        // Redirect the user to the login page
        window.location.href = 'login.html';

        // Inform the user about successful registration
        alert('Registration Successful!');
    }
});

