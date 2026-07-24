// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

const object = document.getElementById("ziel");
const sound = new Audio("./archery/hit.mp3");

object.addEventListener("click", () => {
  
    sound.currentTime = 0;
    sound.play();

       
    
    
});

const object = document.getElementById("bogen");
const sound = new Audio("./archery/draw.mp3");

object.addEventListener("click", () => {
  
    sound.currentTime = 0;
    sound.volume = 0.5;
    sound.play();


       
    
    
});

const animations = "arrowAction";