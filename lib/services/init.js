import {createOpponentRocket, createPlayerRocket} from "../entities/state/instances/rockets.js";
import {createBall} from "../entities/state/instances/ball.js";
import {createOpponentScoreObject, createPlayerScoreObject} from "../entities/state/instances/score.js";
import KeyboardListeners from "./keyboardListeners.js";

function createGameObjects() {
    createPlayerRocket();
    createOpponentRocket();

    createBall();

    createPlayerScoreObject();
    createOpponentScoreObject();
}

const initGame = () => {
    createGameObjects();
    KeyboardListeners.initKeyboardListeners();
};

const restart = () => {
    createGameObjects();
};

export default {initGame, restart};
