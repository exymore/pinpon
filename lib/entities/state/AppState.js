import {APP_STATES, DIFFICULTY_OPTIONS} from "../../enums/appState.js";

export class AppState {
    static secondsPassed = 0;
    static oldTimeStamp = 0;
    static state = APP_STATES.SPLASH_SCREEN;
    static difficulty = DIFFICULTY_OPTIONS.EASY;

    static playerRocket = null;
    static opponentRocket = null;

    static ball = null;

    static playerScoreObject = null;
    static opponentScoreObject = null;

    static canvasInstance = null;
    static ctx = null;

    static playerScore = 0;
    static opponentScore = 0;
}
