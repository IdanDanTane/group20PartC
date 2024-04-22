
 function submitFeedback(event) {
     event.preventDefault(); // Prevent the form from submitting normally

     // Collect form field values
     const location = document.getElementById('location').value;
     const typeOfCycling = document.getElementById('typeOfCycling').value;
     const stars = document.getElementById('stars').value;
     const review = document.getElementById('review').value;

     // Create a JavaScript object representing the document
     const documentData = {
         location: location,
         typeOfCycling: typeOfCycling,
         stars: parseInt(stars), // Convert stars to a number
         review: review
     };

     // Send a POST request to the server with the document data
     fetch('/submit-feedback', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(documentData)
     })
         .then(response => {
             if (response.ok) {
                 console.log('Feedback submitted successfully');
                 // Optionally, display a success message or redirect the user
             } else {
                 console.error('Failed to submit feedback');
                 // Optionally, display an error message to the user
             }
         })
         .catch(error)
 }

function validForm() {
    const locationElem = document.querySelector("#location");
    const nameElem = document.querySelector("#TypeOfCycling");
    const rateElem = document.querySelector("#rate");
    const reviewElem = document.querySelector("#review");


    if ((!locationElem.value)|| (locationElem.value=="hide")) {
        locationElem.classList.add("invalid");
        alert("Location is required");
        return false;
    }
    locationElem.classList.remove("invalid");

    if ((!nameElem.value) || (nameElem.value=="hide")) {
        nameElem.classList.add("invalid");
        alert("Route name is required");
        return false;
    }
    nameElem.classList.remove("invalid");

    if (!rateElem.value) {
        rateElem.classList.add("invalid");
        alert("You must rate your experience");
        return false;
    }
    rateElem.classList.remove("invalid");

    if (!reviewElem.value) {
        reviewElem.classList.add("invalid");
        alert("Review is required");
        return false;
    }
    reviewElem.classList.remove("invalid");

    return true;
}
