const mysql = require("mysql")

function testMysql() {
    const db = mysql.createConnection({
        host: "192.168.1.46",
        user: "scammer",
        password: process.env.mysqlPass
    })
}

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
    input = document.getElementById("userBox")
    p = document.getElementById("username-helper-text")

    if (input.value == "") {
        label.classList.remove("Mui-focused")
        label.classList.remove("Mui-focused")
        label.classList.remove("MuiInputLabel-shrink")
    
        input.classList.remove("Mui-focused")
        input.classList.remove("Mui-focused")
    
        p.classList.remove("Mui-focused")
    }
}

function unfocusPass() {
    label = document.getElementById("password-label")
    input = document.getElementById("passBox")
    p = document.getElementById("password-helper-text")

    if (input.value == "") {
        label.classList.remove("Mui-focused")
        label.classList.remove("Mui-focused")
        label.classList.remove("MuiInputLabel-shrink")

        input.classList.remove("Mui-focused")
        input.classList.remove("Mui-focused")

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

function redirect(){
    window.location = "https://finn.no"
}