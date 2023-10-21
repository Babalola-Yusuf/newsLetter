const form = document.querySelector("form");
const email = document.getElementById("email");
const error = document.getElementById('error');
const main = document.querySelector('main');
const successMessage = document.querySelector('#success-message');

// As per the HTML Specification
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Now we can rebuild our validation constraint
// Because we do not rely on CSS pseudo-class, we have to
// explicitly set the valid/invalid class on our email field
window.addEventListener("load", () => {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed email address.
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  email.classList.toggle = isValid ? "valid" : "invalid";
});

// This defines what happens when the user types in the field
email.addEventListener("input", () => {
  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (isValid) {
    email.classList.remove("invalid");
    email.classList.add("valid");
    error.textContent = "";
    error.classList.remove("error");
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    error.classList.add("error");
    error.textContent = "Valid email required";
  }
});

// This defines what happens when the user tries to submit the data
form.addEventListener("submit", (event) => {
  event.preventDefault();   
  const isValid = email.value.length !== 0 & emailRegExp.test(email.value);
  if (!isValid) {
    email.classList.add("invalid");
    error.textContent = "I expect an email, darling!";
 
  } else {
    email.classList.remove("invalid");
    email.classList.add("valid");
    error.textContent = "";
    let emailValue = email.value;
    localStorage.setItem('emailValue', emailValue);
/*   form.submit(); */
    window.location.href= "./success.html";  
  }
  form.reset();
});

