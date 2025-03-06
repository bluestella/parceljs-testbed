// Select the countdown timer elements
const daysLabel = document.getElementById("days");
const hoursLabel = document.getElementById("hours");
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");

const targetDate = new Date("December 9, 2025 17:00:00").getTime();

setInterval(setTime, 1000);

function setTime() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval();
        daysLabel.innerHTML = "00";
        hoursLabel.innerHTML = "00";
        minutesLabel.innerHTML = "00";
        secondsLabel.innerHTML = "00";
        // Add code to disable the offer page or show a message that the offer has expired
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysLabel.innerHTML = pad(days);
    hoursLabel.innerHTML = pad(hours);
    minutesLabel.innerHTML = pad(minutes);
    secondsLabel.innerHTML = pad(seconds);
}

function pad(val) {
    const valString = val.toString();
    return valString.length < 2 ? "0" + valString : valString;
}
