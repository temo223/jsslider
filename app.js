//1//
const clock = document.querySelector("#clock");

function updateClock() {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    clock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

updateClock();

const intervalId = setInterval(updateClock, 1000);



//2//