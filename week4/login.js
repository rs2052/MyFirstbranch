const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
    let valid = true;
    const emptyFields = [];

    // Username
    const username = document.getElementById("lL"); // Assuming "lL" is the correct ID
    const usernameError = document.getElementById("IDError");

    if (username.value.trim() === "") {
        emptyFields.push("Login ID");
        usernameError.textContent = "Login ID Missing";
        username.classList.remove("VALID");
        valid = false;
    } else {
        usernameError.textContent = "";
        username.classList.add("VALID");
    }

    // Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email.value)) {
        emailError.textContent = "Incorrect Email ID";
        email.classList.remove("VALID");
        valid = false;
    } else {
        emailError.textContent = "";
        email.classList.add("VALID");
    }

    // Password
    const password = document.getElementById("passcode"); // Assuming "passcode" is the correct ID
    const passwordError = document.getElementById("passcodeError");

    if (password.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters";
        password.classList.remove("VALID");
        valid = false;
    } else {
        passwordError.textContent = "";
        password.classList.add("VALID");
    }

    // Confirm Password
    const confirmPassword = document.getElementById("confirmPasscode"); // Assuming "confirmPasscode" is the correct ID
    const confirmPasswordError = document.getElementById("confirmPasscodeError");

    if (confirmPassword.value !== password.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPassword.classList.remove("VALID");
        valid = false;
    } else {
        confirmPasswordError.textContent = "";
        confirmPassword.classList.add("VALID");
    }

    if (emptyFields.length > 0) {
        alert("Oops, something is missing: " + emptyFields.join(", "));
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});