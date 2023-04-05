import {Ball} from "../../gameObjects/Ball.js";
import {BALL_DEFAULT_VELOCITY_X, BALL_DEFAULT_VELOCITY_Y, BALL_SIDE} from "../../../constants/constants.js";
import {canvasInstance} from "./canvas.js";

export let ball;

export let ballVX = BALL_DEFAULT_VELOCITY_X;
export let ballVY = BALL_DEFAULT_VELOCITY_Y;

export function createBall() {
    ball = new Ball(canvasInstance.width / 2 + 10, canvasInstance.height / 2, BALL_SIDE, 'white');
}

export function resetBall() {
    ball = null;
}

export function setBallVX(vx) {
    ballVX = vx;
}

export function setBallVY(vy) {
    ballVY = vy;
}

