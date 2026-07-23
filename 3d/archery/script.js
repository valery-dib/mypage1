console.log('script loaded'); 
const viewer = document.querySelector('#viewer');
const drawSound = document.querySelector('#drawSound');
const hitSound = document.querySelector('#hitSound');

const DRAW_END = 0.83;     // натяжение завершено
const RELEASE_START = 4.0; // начало полёта в тайм-лайне модели
const HIT_TIME = 5.3;      // момент попадания в мишень

let isDrawing = false;
let isDrawn = false;

viewer.addEventListener('load', () => {
  viewer.pause();
  viewer.currentTime = 0;
});

// Зажали Space — начинаем натяжение
document.addEventListener('keydown', (e) => {
  if (e.code !== 'Space') return;
  e.preventDefault(); // чтобы страница не скроллилась

  if (e.repeat) return; // браузер шлёт повторные keydown, пока клавиша зажата — игнорируем
  if (isDrawn || isDrawing) return; // уже натягиваем или натянуто — повторно не запускаем

  isDrawing = true;
  viewer.currentTime = 0;
  drawSound.currentTime = 0;
  drawSound.play();
  viewer.play({ repetitions: 1 }); 
  requestAnimationFrame(checkDrawComplete);
});

function checkDrawComplete() {
  if (!isDrawing) return;
  if (viewer.currentTime >= DRAW_END) {
    viewer.pause();
    viewer.currentTime = DRAW_END;
    isDrawing = false;
    isDrawn = true;
    return;
  }
  requestAnimationFrame(checkDrawComplete);
}

// Отпустили Space — выстрел, если натяжение было завершено
document.addEventListener('keyup', (e) => {
  if (e.code !== 'Space') return;
  if (!isDrawn) return; // отпустили раньше, чем натянули — ничего не делаем
  isDrawn = false;
  viewer.currentTime = RELEASE_START;
  viewer.play({ repetitions: 1 });

  let hitTriggered = false;
  function checkHit() {
    if (!hitTriggered && viewer.currentTime >= HIT_TIME) {
      hitSound.currentTime = 0;
      hitSound.play();
      hitTriggered = true;
    }
    if (!viewer.paused) {
      requestAnimationFrame(checkHit);
    }
  }
  requestAnimationFrame(checkHit);
});