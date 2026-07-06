console.log("JS Loaded");

let textInput = document.getElementById("text");
let result = document.getElementById("result");

console.log(textInput);
console.log(result);

textInput.addEventListener("input", function () {
    console.log("Typing...");
    let message = textInput.value;
    result.textContent = message.length;
});