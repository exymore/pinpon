import {SCORE_OFFSET_Y} from "../../../constants/constants.js";
import {Score} from "../../gameObjects/Score.js";
import {AppState} from "../AppState.js";

export function createPlayerScoreObject() {
    AppState.playerScoreObject = new Score(AppState.canvasInstance.width / 4, SCORE_OFFSET_Y, AppState.playerScore);
}

export function createOpponentScoreObject() {
    AppState.opponentScoreObject = new Score(AppState.canvasInstance.width - AppState.canvasInstance.width / 4, SCORE_OFFSET_Y, AppState.opponentScore)
}

export function incPlayerScore() {
    AppState.playerScore++;
    AppState.playerScoreObject.score = AppState.playerScore;
}

export function incOpponentScore() {
    AppState.opponentScore++;
    AppState.opponentScoreObject.score = AppState.opponentScore;
}
