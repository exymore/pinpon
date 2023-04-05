import Canvas from "./services/canvas.js";
import Init from "./services/init.js";
import {AppState} from "./entities/state/AppState.js";

const update = (secondsPassed) => {
    Canvas.clearCanvas();
    Canvas.drawAppState(secondsPassed);
};

let oldTimeStamp = 0;

function gameLoop(timeStamp) {
    AppState.secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    update(AppState.secondsPassed);
    window.requestAnimationFrame(gameLoop);
}

Init.initGame();
window.requestAnimationFrame(gameLoop);

