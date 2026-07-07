
let input = document.querySelector("input");
let result = document.querySelector("#result");
let count = document.querySelector("#length");
input.addEventListener("input",function(){
    if(input.value.length>=1){
      result.textContent="Hello "+input.value;
        count.textContent ="Length of a letter is: " +input.value.length;

    }else{
result.textContent="Please enter your name";
    }
        
})