$(document).ready(() => {

    $('#email').on('input', () => {
        const email = $('#email').val();
        if (!email) {
            $('#emailError').text('Email cannot be empty.');
        } else if (!/^[a-zA-Z0-9._-]+@northeastern\.edu$/.test(email)) {
            $('#emailError').text('Invalid northeastern email.');
        } else {
            $('#emailError').text('');
        }
    });

    $('#username').on('input', () => {
        const username = $('#username').val();
        if (!username) {
            $('#usernameError').text('Username cannot be empty.');
        } else if (/[^a-zA-Z0-9]/.test(username)) {
            $('#usernameError').text('Username cannot have special characters.');
        } else if (username.length < 5 || username.length > 15) {
            $('#usernameError').text('Username must be between 5 to 15 characters.');
        } else {
            $('#usernameError').text('');
        }
    });

    // You can add similar validation checks for the password and confirm password here

    $('#loginBtn').click(() => {
        const emailError = $('#emailError').text();
        const usernameError = $('#usernameError').text();
        // Similar error checks for password and confirm password

        if (!emailError && !usernameError /* add other error checks here */) {
            sessionStorage.setItem('loggedInUser', $('#username').val());
            window.location.href = 'calculator.html';
        } else {
            alert('Please correct the errors before proceeding.');
        }
    });
});
