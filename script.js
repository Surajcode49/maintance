// Set the date for when the website will be back
const returnDate = new Date("December 20, 2024 12:00:00").getTime();

// Update the countdown every second
const timer = setInterval(() => {
    const now = new Date().getTime();
    const difference = returnDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the HTML
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Stop the timer when the date is reached
    if (difference < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "We're Back Online!";
    }
}, 1000);
