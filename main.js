const timerDiv = document.querySelector(".timer"),
      timerText = timerDiv.querySelector("#text"),
      startTimerButton = timerDiv.querySelector("#start"),
      stopTimerButton = timerDiv.querySelector("#stop"),
      resetTimerButton = timerDiv.querySelector("#reset");

const h1 = document.querySelector("h1");

let timerValue = 0;
let timerInterval;

function tick(textHolder, newTextValue) {
    textHolder.innerHTML = `${Math.floor(newTextValue / 60).toString().padStart(2, "0")}:${(newTextValue % 60).toString().padStart(2, "0")}`
}

h1.addEventListener("mouseenter", _ => {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
});

h1.addEventListener("mouseleave", _ => {
    document.body.style.backgroundColor = "white";
})

startTimerButton.addEventListener("click", (event) => {
    event.preventDefault();

    startTimerButton.innerHTML = "Start"

    if (!timerInterval) {
        timerInterval = setInterval( _ => {
            timerValue += 1;
            tick(timerText, timerValue);
        }, 1000);
    }
});

stopTimerButton.addEventListener("click", (event) => {
    event.preventDefault();

    startTimerButton.innerHTML = "Continue"

    clearInterval(timerInterval);
    timerInterval = null;
});

resetTimerButton.addEventListener("click", _ => {

    startTimerButton.innerHTML = "Start" 

    timerValue = 0;
    tick(timerText, timerValue);
});