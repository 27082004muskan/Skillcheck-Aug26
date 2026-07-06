let age = document.getElementById("age");
let button = document.getElementById("checkbtn");
let result = document.getElementById("result");

button.addEventListener("click", function() {
let userAge = parseInt(age.value);
if(userAge>=18){
result.textContent = "You are eligible to vote.";
}
else{
 result.textContent = "You are not eligible to vote.";
}
});


