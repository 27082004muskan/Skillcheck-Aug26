let clock = document.getElementById("clock");
let button=document.getElementById("checkbtn");

let hour = 0;
let minute = 0;
let second= 0;

let timer; 

function showTime(){
second++;
if(second===60){
    second=0;
    minute++;
}
if(minute===60){
    minute=0;
    hour++;

}// clock.textContent=`${hour}:${minute}:${second}`;
clock.textContent = `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
}


let isRunning = false;
button.addEventListener("click", function () {
if (!isRunning) {

    timer = setInterval(showTime, 1000);

    isRunning = true;

    button.textContent = "Stop";

} else {

    clearInterval(timer);

    isRunning = false;

    button.textContent = "Start";

}

});