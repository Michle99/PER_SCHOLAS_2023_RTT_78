// Step 1: Get references to the registration and login forms in the DOM.
const registrationForm = document.getElementById('registration');
const loginForm = document.getElementById('login');

// Step 2: Add a submit event listener to the registration form.
registrationForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission.

  // Step 3: Implement Registration Form Validation.
  const username = registrationForm.querySelector('input[name="username"]').value;
  const email = registrationForm.querySelector('input[name="email"]').value;
  const password = registrationForm.querySelector('input[name="password"]').value;
  const repeatPassword = registrationForm.querySelector('input[name="passwordCheck"]').value;
  const termsAgreed = registrationForm.querySelector('input[name="terms"]').checked;

  // Validation checks
  const usernameValid = isUsernameValid(username);
  const emailValid = isEmailValid(email);
  const passwordValid = isPasswordValid(password, repeatPassword);
  const termsAccepted = termsAgreed;

  if (usernameValid && emailValid && passwordValid && termsAccepted) {
    // If all validation passes, store the user data.
    storeUserData(username, email, password);

    // Clear form fields and show a success message.
    registrationForm.reset();
    displaySuccessMessage('Registration successful!');
  } else {
    // Display an error message.
    displayErrorMessage('Registration failed. Please check the form fields.');
  }
});

// Step 4: Implement Validation Functions for Registration.
function isUsernameValid(username) {
  return /^[a-zA-Z0-9]{4,}$/.test(username) &&
         new Set(username).size >= 2 &&
         !/\s/.test(username) &&  // No whitespace
         !/[!@#$%^&*()_+]/.test(username); // No special characters
}

function isEmailValid(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email) &&
         !email.endsWith('@example.com');
}

function isPasswordValid(password, repeatPassword) {
  return password.length >= 12 &&
         /[A-Z]/.test(password) &&
         /[a-z]/.test(password) &&
         /\d/.test(password) &&
         /[!@#$%^&*()_+]/.test(password) &&
         !/password/i.test(password) &&
         password === repeatPassword;
}

function storeUserData(username, email, password) {
  // Convert usernames and emails to lowercase before storing.
  username = username.toLowerCase();
  email = email.toLowerCase();

  // Retrieve existing user data from localStorage if it exists or initialize an empty array.
  let userData = JSON.parse(localStorage.getItem('userData')) || [];

  // Check if the username is already taken.
  if (userData.some(user => user.username === username)) {
    displayErrorMessage('That username is already taken.');
    return;
  }

  // Create a user object and add it to the userData array.
  const newUser = { username, email, password };
  userData.push(newUser);

  // Store the updated user data in localStorage.
  localStorage.setItem('userData', JSON.stringify(userData));
  console.log("user data: ", userData);
}

// Step 5: Implement Display Functions for Success and Error Messages.
function displaySuccessMessage(message) {
  const errorDisplay = document.getElementById('errorDisplay');
  errorDisplay.innerHTML = `<div class="success">${message}</div>`;
}

function displayErrorMessage(message) {
  const errorDisplay = document.getElementById('errorDisplay');
  errorDisplay.innerHTML = `<div class="error">${message}</div>`;
}

// Step 6: Add a submit event listener to the login form.
loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission.

  // Step 7: Implement Login Form Validation.
  const username = loginForm.querySelector('input[name="username"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;
  const persist = loginForm.querySelector('input[name="persist"]').checked;

  // Retrieve user data from localStorage.
  const userData = JSON.parse(localStorage.getItem('userData')) || [];

  // Validation checks for login
  const user = userData.find(user => user.username === username.toLowerCase());
  if (!user) {
    displayErrorMessage('Username does not exist.');
  } else if (user.password !== password) {
    displayErrorMessage('Incorrect password.');
  } else {
    const successMessage = persist ? 'Login successful (Keep me logged in).' : 'Login successful';
    loginForm.reset();
    displaySuccessMessage(successMessage);
  }
});
