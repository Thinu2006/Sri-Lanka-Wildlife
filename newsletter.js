///Newsletter Subscriptions//

document.addEventListener("DOMContentLoaded", function() { 
    // Getting email input
    const emailInput = document.getElementById('emailInput'); 
    // Getting subscription form element
    const subscribeForm = document.getElementById('subscribeForm');

    subscribeForm.addEventListener('submit', function(event) { 
        event.preventDefault(); 
        // Getting the trimmed value of the email input
        const email = emailInput.value.trim(); 
         // Checking if email is not empty
        if (email) {
            // Gets existing subscriptions from local storage and starts an empty array
            let subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions')) || []; 
            // Adding the email to the array
            subscriptions.push(email); 
            // Stores array in local storage
            localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions)); 
            // Clears the email input field
            emailInput.value = ''; 
            //Gives an alerted when its successful
            alert('Successfully Subscribed!');
        }
    });
});