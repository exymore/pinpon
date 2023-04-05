import {createOpponentRocket, createPlayerRocket} from "../entities/state/instances/rockets.js";
import {createBall} from "../entities/state/instances/ball.js";
import {createOpponentScoreObject, createPlayerScoreObject} from "../entities/state/instances/score.js";

const initGame = () => {
    createPlayerRocket();
    createOpponentRocket();

    createBall();

    createPlayerScoreObject();
    createOpponentScoreObject()
};

export default {initGame};
