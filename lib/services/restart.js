import Init from "./init.js";
import {resetBall} from "../entities/state/instances/ball.js";
import {resetRockets} from "../entities/state/instances/rockets.js";

function resetOptions() {
    resetBall();
    resetRockets();
}

function restart() {
    resetOptions();
    Init.restart()
}

export {restart};
