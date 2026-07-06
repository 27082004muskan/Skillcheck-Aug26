let name= document.getElementById("name");
let button= document.getElementById("checkbtn");
let result = document.getElementById("result");

button.addEventListener("click", function(){
    let username=name.value;
    if(username.trim() != ""){
        result.textContent="Hello " +username;
    }else{
        result.textContent="Please enter your name !";
     }
})