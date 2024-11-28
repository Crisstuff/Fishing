function handleFormSubmit(event) {
    event.preventDefault(); // Prevents the default form submission behavior (page refresh)
    
    // Collect form data (example)
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Do something with the data (e.g., send it to the server via AJAX)
    console.log('Form submitted:', data);

    // Optionally provide feedback to the user
}

function focusUser() {
    label = document.getElementById("username-label")
    input = document.getElementById("userBox")
    p = document.getElementById("username-helper-text")

    label.classList.add("Mui-focused")
    label.classList.add("Mui-focused")
    label.classList.add("MuiInputLabel-shrink")

    input.classList.add("Mui-focused")
    input.classList.add("Mui-focused")

    p.classList.add("Mui-focused")

    console.log(process.env.mysqlPass)
}

function focusPass() {
    label = document.getElementById("password-label")
    input = document.getElementById("passBox")
    p = document.getElementById("password-helper-text")

    label.classList.add("Mui-focused")
    label.classList.add("Mui-focused")
    label.classList.add("MuiInputLabel-shrink")

    input.classList.add("Mui-focused")
    input.classList.add("Mui-focused")

    p.classList.add("Mui-focused")
}

function unfocusUser() {
    label = document.getElementById("username-label")
    input = document.getElementById("username")
    inputBox = document.getElementById("userBox")
    p = document.getElementById("username-helper-text")

    if (input.value == "") {
        label.classList.remove("Mui-focused")
        label.classList.remove("Mui-focused")
        label.classList.remove("MuiInputLabel-shrink")
    
        inputBox.classList.remove("Mui-focused")
        inputBox.classList.remove("Mui-focused")
    
        p.classList.remove("Mui-focused")
    }
}

function unfocusPass() {
    label = document.getElementById("password-label")
    input = document.getElementById("password")
    inputBox = document.getElementById("passBox")
    p = document.getElementById("password-helper-text")

    if (input.value == "") {
        label.classList.remove("Mui-focused")
        label.classList.remove("Mui-focused")
        label.classList.remove("MuiInputLabel-shrink")

        inputBox.classList.remove("Mui-focused")
        inputBox.classList.remove("Mui-focused")

        p.classList.remove("Mui-focused")
    }
}

function checkValue() {
    inputUser = document.getElementById("username")
    inputPass = document.getElementById("password")

    if (inputUser.value != "") {
        focusUser()
    }
    if (inputPass.value != "") {
        focusPass()
    }
}

function passVis() {
    const inputPass = document.getElementById("password")
    const eye = document.getElementById("passEye")
    console.log(eye)

    if (inputPass.type == "password") {
        inputPass.type = "text"
    } else {
        inputPass.type = "password"
    }

    if (eye.getAttribute("d") == "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z") {
        eye.setAttribute("d", "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z")
    } else {
        eye.setAttribute("d", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z")
    }
}

function rememberCheck() {
    const checkbox = document.getElementById("rememberCheck")

    if (checkbox.getAttribute("d") == "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z") {
        checkbox.setAttribute("d", "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z")
    } else {
        checkbox.setAttribute("d", "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z")
    }
}