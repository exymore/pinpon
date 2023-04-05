import {playerRocket} from "../entities/state/instances/rockets.js";

const initRocketListeners = function () {
    window.addEventListener('keydown', function (e) {
        playerRocket.setMoving(e.code, true);
    });

    window.addEventListener('keyup', function (e) {
        playerRocket.setMoving(e.code, false);
    });
};

export default {
    initRocketListeners
}
