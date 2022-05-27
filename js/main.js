// Custom validation message for e-mail field
const email = document.getElementById("email");

email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid e-mail address!");
        email.reportValidity();
    } else {
        email.setCustomValidity("");
    }
});

// Checking if (Confirm Password) field value matches (Password) field
const pswd = document.getElementById("password");
const pswdConfirm = document.getElementById("password_confirm");
const form = document.getElementById("sign_up_form");
const pswdError = document.querySelector("#password_confirm + span.error");

pswdConfirm.addEventListener("input", function (event) {
    /**
     * Each time the user types something, it checks
     * if the form field is valid
     */
    if (pswdConfirm.value === pswd.value) {
        /**
         * In this case, if an error is visable, it gets removed
         */
        // Reset the content of the message
        pswdError.textContent = "";
        // Reset the visual state of the message
        pswdError.className = "error";
    } else {
        // If there is still an error, show the correct error
        showError();
    }
});

form.addEventListener("submit", function (event) {
    // If the passwords match and are filled, submit
    if (pswdConfirm.value !== pswd.value) {
        // If not, show an error message
        showError();
        // Prevent the form from being submitted by canceling the event
        event.preventDefault();
    }
})

function showError() {
    if(pswdConfirm.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      pswdError.textContent = "You need to fill this field!";
    } 

    if (pswdConfirm !== pswd) {
        // The passwords do not match
        // Display an error message for mismatched passwords
        pswdError.textContent = "The passwords do not match!";
    }
    
    // Set the styling appropriately
    pswdError.className = "error active";
} 
