import {
    BALL_DEFAULT_VELOCITY_X,
    BALL_DEFAULT_VELOCITY_Y,
    ROCKET_DEFAULT_VELOCITY_Y
} from "../constants/constants.js";

import Init from "./init.js";
import {resetBall, setBallVX, setBallVY} from "../entities/state/instances/ball.js";
import {resetRockets, setRocketVY} from "../entities/state/instances/rockets.js";
import {opponentScore, playerScore} from "../entities/state/instances/score.js";

function resetOptions() {
    const round = playerScore + opponentScore;

    resetBall();
    resetRockets();

    setRocketVY(ROCKET_DEFAULT_VELOCITY_Y + round * 5);
    setBallVX(BALL_DEFAULT_VELOCITY_X);
    setBallVY(BALL_DEFAULT_VELOCITY_Y);
}

function restart() {
    resetOptions();
    Init.initGame()
}

export {restart};
