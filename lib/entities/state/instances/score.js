import {SCORE_OFFSET_Y} from "../../../constants/constants.js";
import {Score} from "../../gameObjects/Score.js";
import {canvasInstance} from "./canvas.js";

export let playerScore = 0;
export let opponentScore = 0;

export let playerScoreObject;
export let opponentScoreObject;

export function createPlayerScoreObject() {
    playerScoreObject = new Score(canvasInstance.width / 4, SCORE_OFFSET_Y, playerScore);
}

export function createOpponentScoreObject() {
    opponentScoreObject = new Score(canvasInstance.width - canvasInstance.width / 4, SCORE_OFFSET_Y, opponentScore)
}

export function incPlayerScore() {
    playerScore++;
    playerScoreObject.score = playerScore;
}

export function incOpponentScore() {
    opponentScore++;
    opponentScoreObject.score = opponentScore;
}
