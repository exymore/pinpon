import {Rocket} from "../../gameObjects/Rocket.js";
import {
    ROCKET_DEFAULT_VELOCITY_Y,
    ROCKET_HEIGHT,
    ROCKET_TYPES,
    ROCKET_WIDTH
} from "../../../constants/constants.js";
import {ROCKET_CENTER_Y} from "../../../constants/computed.js";
import {AppState} from "../AppState.js";

export function createPlayerRocket() {
    AppState.playerRocket = new Rocket(20, ROCKET_CENTER_Y(AppState.canvasInstance), ROCKET_DEFAULT_VELOCITY_Y, ROCKET_WIDTH, ROCKET_HEIGHT, ROCKET_TYPES.PLAYER);
}

export function createOpponentRocket() {
    AppState.opponentRocket = new Rocket(AppState.canvasInstance.width - 20, ROCKET_CENTER_Y(AppState.canvasInstance), ROCKET_DEFAULT_VELOCITY_Y, ROCKET_WIDTH, ROCKET_HEIGHT, ROCKET_TYPES.OPPONENT)
    // Slow down opponent rocket after 3 seconds to prevent it from being too slow at the start
    setTimeout(() => {
        AppState.opponentRocket.vy = ROCKET_DEFAULT_VELOCITY_Y * AppState.difficulty;
    }, 3000)
}

export function resetRockets() {
    AppState.playerRocket = null;
    AppState.opponentRocket = null;
}
