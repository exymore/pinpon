import {AppState} from "../entities/state/AppState.js";
import {APP_STATES, DIFFICULTY_OPTIONS} from "../enums/appState.js";

function handleSetDifficulty(keyCode) {
    let difficulty;

    if (keyCode === 'Digit1') {
        difficulty = DIFFICULTY_OPTIONS.EASY;
    }

    if (keyCode === 'Digit2') {
        difficulty = DIFFICULTY_OPTIONS.MEDIUM;
    }

    if (keyCode === 'Digit3') {
        difficulty = DIFFICULTY_OPTIONS.HARD;
    }

    if (difficulty !== undefined) {
        AppState.difficulty = difficulty;
        AppState.state = APP_STATES.GAME;
    }
}

const removeDifficultyListeners = function () {
    window.removeEventListener('keydown', handleSetDifficulty)
};

const initKeyboardListeners = function () {
    window.addEventListener('keydown', function (e) {
        if (AppState.state === APP_STATES.SPLASH_SCREEN) {
            handleSetDifficulty(e.code);
        }
        if (AppState.state === APP_STATES.GAME) {
            AppState.playerRocket.setMoving(e.code, true);
        }
    });

    window.addEventListener('keyup', function (e) {
        AppState.playerRocket.setMoving(e.code, false);
    });
};

export default {
    initKeyboardListeners
}
