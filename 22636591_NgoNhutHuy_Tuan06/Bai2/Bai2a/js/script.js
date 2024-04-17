const formRegister = document.getElementById("form-register");
const formSignIn = document.getElementById("form-sign-in");

const inputs =
  document.querySelectorAll("#form-register input") ||
  document.querySelectorAll("#form-sign-in input");

const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

const usernameRegex = /^[a-zA-Z0-9]{6,}$/;
const passwordRegex = /^[a-zA-Z0-9]{6,}$/;

inputs.forEach((input) => {
  input.addEventListener("blur", (event) => {
    if (input.id === "username") {
      // Check username
      if (usernameRegex.test(input.value)) {
        console.log("Valid username");
      } else {
        console.log("Invalid username");
      }
    } else if (input.id === "password") {
      // Check password
      if (passwordRegex.test(input.value)) {
        console.log("Valid password");
      } else {
        console.log("Invalid password");
      }
    }
  });
});

if (formRegister) {
  // Register form
  formRegister.addEventListener("submit", (event) => {
    event.preventDefault();
  });
} else {
  // Sign in form
}
