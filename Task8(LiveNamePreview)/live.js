let input = document.querySelector("input");
let result = document.querySelector("#result");
let l = document.querySelector("#length");
input.addEventListener("input",function(){
if(input.value.length>=1){
result.textContent="Hello " + input.value;

}
else{
    result.textContent="Please enter your name"
}
})
