import {restart} from "./restart.js";
import {ROCKET_TYPES} from "../constants/constants.js";
import {incOpponentScore, incPlayerScore} from "../entities/state/instances/score.js";

const setPlayerVictory = (type) => {
    if (type === ROCKET_TYPES.OPPONENT) incOpponentScore();
    if (type === ROCKET_TYPES.PLAYER) incPlayerScore();
    restart();
};

export default {setPlayerVictory};
