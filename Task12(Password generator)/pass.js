// =============================
// Selecting all HTML elements
// =============================

const generate = document.getElementById("generate");
const length = document.getElementById("length");

const upper = document.getElementById("box1");
const lower = document.getElementById("box2");
const number = document.getElementById("box3");
const symbol = document.getElementById("box4");

const result = document.getElementById("result");
const copy = document.getElementById("copy");

// This variable is declared outside so both
// Generate and Copy buttons can access it.
let password = "";


// ========================================
// Generate Password Button
// ========================================

generate.addEventListener("click", () => {

    // Get the length entered by the user
    let lengthValue = Number(length.value);

    // Clear old password before generating a new one
    password = "";

    // This string will contain all allowed characters
    let characters = "";

    // Check which checkboxes are selected
    // and add those characters to the string

    if (upper.checked) {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (lower.checked) {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }

    if (number.checked) {
        characters += "0123456789";
    }

    if (symbol.checked) {
        characters += "!@#$%^&*";
    }

    // Validate password length

    if (lengthValue <= 0) {
        result.textContent = "Please enter a valid password length.";
        return;
    }

    // If no checkbox is selected

    if (characters === "") {
        result.textContent = "Please select at least one option.";
        return;
    }

    // Generate password

    for (let i = 0; i < lengthValue; i++) {

        // Generate a random index
        let randomIndex = Math.floor(Math.random() * characters.length);

        // Add one random character to the password
        password += characters[randomIndex];
    }

    // Display generated password

    result.textContent = `Your Password is: ${password}`;

});


// ========================================
// Copy Button
// ========================================

copy.addEventListener("click", () => {

    // If password is empty

    if (password === "") {
        alert("Generate a password first!");
        return;
    }

    // Copy password to clipboard

    navigator.clipboard.writeText(password);

    // Show confirmation

    alert("Password Copied Successfully!");
});