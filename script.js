const themeButton = document.querySelector("#theme-button");
const room = document.querySelector(".room");
const statusMessage = document.querySelector("#status-message");

let calmMode = false;

themeButton.addEventListener("click", function () {
  calmMode = !calmMode;
  if (calmMode) {
    document.body.style.backgroundColor = "#312e81";
    room.style.backgroundColor = "#4338ca";
     themeButton.textContent = "Return to Focus";
    statusMessage.textContent = "Calm mode activated.";
  } else {
    document.body.style.backgroundColor = "#0f172a";
    room.style.backgroundColor = "#1e293b";
    themeButton.textContent = "Change Mood";
    statusMessage.textContent = "Focus mode restored.";
  }
});
const movingObject = document.querySelector("#moving-object");

let objectPosition = 0;

// Keyboard interaction
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    objectPosition -= 30;
    statusMessage.textContent = "The focus object moved left.";
  } else if (event.key === "ArrowRight") {
    objectPosition += 30;
    statusMessage.textContent = "The focus object moved right.";
  } else {
    return;
  }