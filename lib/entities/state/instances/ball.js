import {Ball} from "../../gameObjects/Ball.js";
import {BALL_SIDE} from "../../../constants/constants.js";
import {AppState} from "../AppState.js";

export function createBall() {
    AppState.ball = new Ball(AppState.canvasInstance.width / 2 + 10, AppState.canvasInstance.height / 2, BALL_SIDE, 'white');
}

export function resetBall() {
    AppState.ball = null;
}
