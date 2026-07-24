const image = document.getElementById("arrowAction");
const sound = new Audio("draw.mp3");

image.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play().catch(error => {
        console.error("The sound could not be played:", error);
    });
});