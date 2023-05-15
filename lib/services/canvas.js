AppState.canvasInstance = document.getElementById('pinpon-canvas');
AppState.ctx = AppState.canvasInstance.getContext('2d');
AppState.canvasInstance.width = window.innerWidth / 1.5 - (window.innerWidth % 10);
AppState.canvasInstance.height = window.innerHeight - (window.innerHeight % 10);

import {LOWER_LIMIT} from "../constants/computed.js";
import {APP_STATES} from "../enums/appState.js";
import {AppState} from "../entities/state/AppState.js";


const drawRect = (x, y, w, h, color) => {
    AppState.ctx.fillStyle = color;
    AppState.ctx.fillRect(x, y, w, h);
};

const clearCanvas = () => {
    AppState.ctx.clearRect(0, 0, AppState.canvasInstance.width, AppState.canvasInstance.height);
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
    AppState.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    AppState.ctx.fillRect(0, 0, AppState.canvasInstance.width, AppState.canvasInstance.height);

    AppState.ctx.textAlign = 'center';

    AppState.ctx.fillStyle = "white";
    AppState.ctx.font = "72px Silkscreen";
    AppState.ctx.fillText('Pinpon', AppState.canvasInstance.width / 2, AppState.canvasInstance.height / 2 - 100);

    AppState.ctx.font = "32px Silkscreen";
    AppState.ctx.fillText('Select difficulty', AppState.canvasInstance.width / 2, AppState.canvasInstance.height / 2);

    AppState.ctx.font = "24px Silkscreen";
    AppState.ctx.fillText('Press 1 for easy', AppState.canvasInstance.width / 2, AppState.canvasInstance.height / 2 + 50);
    AppState.ctx.fillText('Press 2 for medium', AppState.canvasInstance.width / 2, AppState.canvasInstance.height / 2 + 100);
    AppState.ctx.fillText('Press 3 for hard', AppState.canvasInstance.width / 2, AppState.canvasInstance.height / 2 + 150);
}

function drawGame(secondsPassed) {
    AppState.playerRocket.draw(secondsPassed, null);
    AppState.opponentRocket.draw(secondsPassed, AppState.ball.y);

    AppState.playerScoreObject.draw(AppState.playerScore);
    AppState.opponentScoreObject.draw(AppState.opponentScore);

    AppState.ball.draw(AppState.playerRocket, AppState.opponentRocket);
}

function drawBg() {
    // BG
    drawRect(0, 0, AppState.canvasInstance.width, AppState.canvasInstance.height, 'black');

    // Top and bottom lines
    drawRect(0, 10, AppState.canvasInstance.width, 20, 'white');
    drawRect(0, LOWER_LIMIT(AppState.canvasInstance), AppState.canvasInstance.width, 20, 'white');

    // Dash lines
    for (let i = 15; i < AppState.canvasInstance.height - 20; i += 70) {
        drawRect(AppState.canvasInstance.width / 2, i, 20, 55, 'white');
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
