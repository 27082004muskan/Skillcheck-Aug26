// ----------TEXT COLOUR CHANGER

let h1=document.querySelector("h1");

h1.addEventListener("click",function(){
    h1.style.color="red";
})

let para=document.querySelector("p");

para.addEventListener("click",function(){
    para.style.color="red";
})

//----------TEXT CHANGER DIRECTLY

let element= document.querySelector("span");
 element.innerText="New Text";


// ----------TEXT CHANGER USING BUTTON
let element= document.querySelector("span");
let text = document.querySelector(".checkbtn");

text.addEventListener("click", function(){
element.innerText="RAJ";
})

//------har click mei naam change ho

let element= document.querySelector("span");
let text = document.querySelector(".checkbtn");


text.addEventListener("click", function(){
if (element.innerText==="Muskan"){

element.innerText="RAJ";

}else{

element.innerText="Muskan";
}
});