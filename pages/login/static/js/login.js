function doLogin(event) {
    event.preventDefault();
    if (validForm()) {
        window.location = "../views/search.html";
    }
}

function validForm() {
    const usernameElem = document.querySelector("#username");
    const passwordElem = document.querySelector("#password");

    if (!usernameElem.value) {
        usernameElem.classList.add("invalid");
        alert("Username is required");
        return false;
    } else if (!passwordElem.value) {
        passwordElem.classList.add("invalid");
        alert("Password is required");
        return false;
    }

    return true;
}