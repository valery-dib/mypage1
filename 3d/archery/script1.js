
const viewer = document.querySelector("#viewer");
const drawSound = document.querySelector("#drawSound");
const hitSound = document.querySelector("#hitSound");

const DRAW_END = 0.83;
const RELEASE_START = 4.0;
const HIT_TIME = 5.3;

let isDrawing = false;
let isDrawn = false;
let hitPlayed = false;

viewer.addEventListener("load", () => {
viewer.pause();
viewer.currentTime = 0;
});

// =====================
// Нажали ПРОБЕЛ
// =====================

document.addEventListener("keydown", (e) => {

if (e.code !== "Space") return;

e.preventDefault();

if (e.repeat) return;
if (isDrawing || isDrawn) return;

isDrawing = true;

viewer.currentTime = 0;

drawSound.currentTime = 0;
drawSound.play();

viewer.play();

requestAnimationFrame(checkDraw);

});

function checkDraw() {

if (!isDrawing) return;

if (viewer.currentTime >= DRAW_END) {

viewer.pause();
viewer.currentTime = DRAW_END;

drawSound.pause();
drawSound.currentTime = 0;

isDrawing = false;
isDrawn = true;

return;
}

requestAnimationFrame(checkDraw);

}

// =====================
// Отпустили ПРОБЕЛ
// =====================

document.addEventListener("keyup", (e) => {

if (e.code !== "Space") return;

if (!isDrawn) return;

isDrawn = false;
hitPlayed = false;

viewer.currentTime = RELEASE_START;

viewer.play();

requestAnimationFrame(checkHit);

});

function checkHit() {

if (!hitPlayed && viewer.currentTime >= HIT_TIME) {

hitPlayed = true;

hitSound.currentTime = 0;
hitSound.play();

}

if (!viewer.paused) {

requestAnimationFrame(checkHit);

} else {

viewer.pause();
viewer.currentTime = 0;

}

}