import {Rocket} from "../../gameObjects/Rocket.js";
import {
    ROCKET_DEFAULT_VELOCITY_Y,
    ROCKET_HEIGHT,
    ROCKET_TYPES,
    ROCKET_WIDTH
} from "../../../constants/constants.js";
import {ROCKET_CENTER_Y} from "../../../constants/computed.js";
import {canvasInstance} from "./canvas.js";

export let playerRocket;
export let opponentRocket;

export let rocketVY = ROCKET_DEFAULT_VELOCITY_Y;

export function createPlayerRocket() {
    playerRocket = new Rocket(20, canvasInstance.height / 2 - 60, ROCKET_WIDTH, ROCKET_HEIGHT, ROCKET_TYPES.PLAYER);
}

export function createOpponentRocket() {
    opponentRocket = new Rocket(canvasInstance.width - 20, ROCKET_CENTER_Y, ROCKET_WIDTH, ROCKET_HEIGHT, ROCKET_TYPES.OPPONENT)
}

export function resetRockets() {
    playerRocket = null;
    opponentRocket = null;
}

export function setRocketVY(vy) {
    rocketVY = vy;
}
