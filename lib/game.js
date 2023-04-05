import Canvas from "./services/canvas.js";
import Init from "./services/init.js";
import {AppState} from "./entities/state/AppState.js";

const update = (secondsPassed) => {
    Canvas.clearCanvas();
    Canvas.drawAppState(secondsPassed);
};

function gameLoop(timeStamp) {
    AppState.secondsPassed = (timeStamp - AppState.oldTimeStamp) / 1000;
    AppState.oldTimeStamp = timeStamp;

    update(AppState.secondsPassed);
    window.requestAnimationFrame(gameLoop);
}

Init.initGame();
window.requestAnimationFrame(gameLoop);

