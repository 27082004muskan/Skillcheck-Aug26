// Select the h1 element where the time will be displayed
const clock = document.getElementById("clock");

// Function to update the time
function showTime() {

    // Get current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    // Add a leading 0 if the number has only one digit
    hour = String(hour).padStart(2, "0");
    minute = String(minute).padStart(2, "0");
    second = String(second).padStart(2, "0");

    // Display the time
    clock.textContent = `${hour}:${minute}:${second}`;
}

// Show the time immediately when the page loads
showTime();

// Update the clock every 1 second
setInterval(showTime, 1000);