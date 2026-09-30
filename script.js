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