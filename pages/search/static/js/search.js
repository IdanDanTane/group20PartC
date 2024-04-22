// search.js

document.getElementById('searchForm').addEventListener('submit', function(event) {
    var typeOfCycling = document.getElementById('TypeOfCycling').value;
    var location = document.getElementById('Location').value;

    // Check if at least one field is filled out
    if (typeOfCycling === 'hide' && location === 'hide') {
        alert('Please select at least one field.');
        event.preventDefault(); // Prevent form submission
    }
});
