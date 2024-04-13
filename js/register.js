// Get references to form elements
var form = document.getElementById('form');
var firstname = document.getElementById('form3Example1');
var lastname = document.getElementById('form3Example2');
var email = document.getElementById('form3Example3');
var password = document.getElementById('form3Example4');
var ConfPassword = document.getElementById('form3Example5');
var phone = document.getElementById('form3Example6');
var username = document.getElementById('form3Example7');

// Retrieve user data from local storage
var userDataFromStorage = JSON.parse(localStorage.getItem('user Data Forml local'));

// Initialize an array to store user data

var alluser = userDataFromStorage || [];


// Add event listener for form submission

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Create an object to store user data
   var userData = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
        ConfPassword: ConfPassword.value,
        phone: phone.value,
        username: username.value
    };

    // Add user data to the array
    alluser.push(userData);

    // Save the updated user data to local storage
    localStorage.setItem('userDataFormllocal', JSON.stringify(alluser));


    // Optionally, you can display a success message or perform other actions here
    alert('User data saved successfully!'); 


});



