// contactus.js


function sendForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Capture form data
  const formData = {
    name: document.getElementById('fullName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value
  };

  // Send an HTTP POST request to the server
  fetch('/submit-contact-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Form submitted successfully');
      // Optionally, display a success message or redirect the user
    } else {
      console.error('Failed to submit form');
      // Optionally, display an error message to the user
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
// Function to validate the form
function validateForm() {
    // Retrieving form inputs
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Regular expressions for email and phone number validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{3}-\d{7}$/;

    // Boolean variables to track validation status
    var isValid = true;

    // Reset error messages
    document.getElementById("fullNameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("phoneError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Validate full name
    if (fullName.trim() === "") {
        document.getElementById("fullNameError").textContent = "Please enter your full name";
        isValid = false;
    }

    // Validate email
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        isValid = false;
    }

    // Validate phone number
    if (phone !== "" && !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid phone number (Format: 050-1234567)";
        isValid = false;
    }

    // Validate message
    if (message.trim() === "") {
        document.getElementById("messageError").textContent = "Please enter your message";
        isValid = false;
    }

    // Return validation result
    return isValid;
}


