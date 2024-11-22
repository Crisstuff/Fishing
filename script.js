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
    input = document.getElementById("username")
    p = document.getElementById("username-helper-text")

    label.classList.add("Mui-focused")
    label.classList.add("Mui-focused")
    label.classList.add("MuiInputLabel-shrink")

    input.classList.add("Mui-focused")
    input.classList.add("Mui-focused")

    p.classList.add("Mui-focused")
}

function focusPass() {
    label = document.getElementById("password-label")
    input = document.getElementById("password")
    p = document.getElementById("password-helper-text")

    label.classList.add("Mui-focused")
    label.classList.add("Mui-focused")
    label.classList.add("MuiInputLabel-shrink")

    input.classList.add("Mui-focused")
    input.classList.add("Mui-focused")

    p.classList.add("Mui-focused")
}