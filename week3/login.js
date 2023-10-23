
const form = document.getElementById("form");
form.addEventListener("submit", function (event) {

   let valid = true;
   const emptyFields = [];
   const username = document.getElementById("LOGIN ID");
   const usernameError = document.getElementById("ID ERROR");

   if (username.value.trim() === "") {

       emptyFields.push("LOGIN ID");
       usernameError.textContent = "LOGIN ID MISSING";
       username.classList.remove("VALID ID");
       valid = false;

} else {
  
   usernameError.textContent = "";
   username.classList.add("VALIC ID");

}


const email = document.getElementById("EMAIL");
const emailError = document.getElementById("EMAIL VERIFICATION FAILED");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if (!emailPattern.test(email.value)) {
  
   emailError.textContent = "INCORRECT EMAIL ID";
   email.classList.remove("VALID");
   valid = false;

} else {
  
   emailError.textContent = "";
   email.classList.add("VALID");

}

const password = document.getElementById("PASSCODE");
const passwordError = document.getElementById("PASSCODE");

if (password.value.length < 8) {
   passwordError.textContent = "PASSWORD MUST BE ATLEAST 8 CHARECTERS";
   password.classList.remove("VALID");
   valid = false;

} else {

   passwordError.textContent = "";
   password.classList.add("VALID");

}


const confirmPassword = document.getElementById("confirmPassword");

const confirmPasswordError = document.getElementById("confirmPasswordError");

if (confirmPassword.value !== password.value) {
   confirmPasswordError.textContent = "Passwords do not match";
   confirmPassword.classList.remove("VALID");
   valid = false;

} else {

   confirmPasswordError.textContent = "";
   confirmPassword.classList.add("VALID");

}

if (emptyFields.length > 0) {
   alert("Ooops Somethingn is missing: " + emptyFields.join(", "));
   valid = false;

}

if (!valid) {
   event.preventDefault(); 
}});