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
    console.log("sound played");

       
    
    
});

const object2 = document.getElementById("bogen");
const sound2 = new Audio("./archery/draw.mp3");

object2.addEventListener("click", () => {
  
    sound2.currentTime = 0;
    sound2.volume = 1;
    sound2.play();

    setTimeout(() => {

    sound.currentTime = 0;
    sound.play();
    console.log("sound played");
}, 4000);


       
    
    
});


const modelViewer = document.querySelector('#bow');

object2.addEventListener("click", () => {
  
 

modelViewer.play({repetitions: 1});



       
    
    
});




 








