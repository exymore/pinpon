import {canvasInstance, ctx} from "../entities/state/instances/canvas.js";

canvasInstance.width = window.innerWidth / 1.5 - (window.innerWidth % 10);
canvasInstance.height = window.innerHeight - (window.innerHeight % 10);

import {LOWER_LIMIT} from "../constants/computed.js";
import KeyboardListeners from "./keyboardListeners.js";
import {APP_STATES} from "../enums/appState.js";
import {AppState} from "../entities/state/AppState.js";
import {opponentRocket, playerRocket, rocketVY} from "../entities/state/instances/rockets.js";
import {opponentScore, opponentScoreObject, playerScore, playerScoreObject} from "../entities/state/instances/score.js";
import {ball} from "../entities/state/instances/ball.js";

const drawRect = (x, y, w, h, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
};

const clearCanvas = () => {
    ctx.clearRect(0, 0, canvasInstance.width, canvasInstance.height);
};

const drawAppState = (secondsPassed) => {
    drawBg();

    if (AppState.state === APP_STATES.SPLASH_SCREEN) {
        drawSplashScreen();
    }

    if (AppState.state === APP_STATES.GAME) {
        drawGame(secondsPassed);
    }
};

function drawSplashScreen() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(0, 0, canvasInstance.width, canvasInstance.height);

    ctx.textAlign = 'center';

    ctx.fillStyle = "white";
    ctx.font = "72px Silkscreen";
    ctx.fillText('Pinpon', canvasInstance.width / 2, canvasInstance.height / 2 - 100);

    ctx.font = "32px Silkscreen";
    ctx.fillText('Select difficulty', canvasInstance.width / 2, canvasInstance.height / 2);

    ctx.font = "24px Silkscreen";
    ctx.fillText('Press 1 for easy', canvasInstance.width / 2, canvasInstance.height / 2 + 50);
    ctx.fillText('Press 2 for medium', canvasInstance.width / 2, canvasInstance.height / 2 + 100);
    ctx.fillText('Press 3 for hard', canvasInstance.width / 2, canvasInstance.height / 2 + 150);
}

function drawGame(secondsPassed) {
    KeyboardListeners.initRocketListeners();
    playerRocket.draw(secondsPassed, null, rocketVY);
    opponentRocket.draw(secondsPassed, ball.y, rocketVY);

    playerScoreObject.draw(playerScore);
    opponentScoreObject.draw(opponentScore);

    ball.draw(playerRocket, opponentRocket)
}

function drawBg() {
    // BG
    drawRect(0, 0, canvasInstance.width, canvasInstance.height, 'black');

    // Top and bottom lines
    drawRect(0, 10, canvasInstance.width, 20, 'white');
    drawRect(0, LOWER_LIMIT, canvasInstance.width, 20, 'white');

    // Dash lines
    for (let i = 15; i < canvasInstance.height - 20; i += 70) {
        drawRect(canvasInstance.width / 2, i, 20, 55, 'white');
    }
}

export default {
    drawRect,
    clearCanvas,
    drawAppState,
    drawSplashScreen,
    drawGame,
    drawBg
}
