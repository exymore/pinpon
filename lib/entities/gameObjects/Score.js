import {AppState} from "../state/AppState.js";

export class Score {
    constructor(x, y, value = 0) {
        this.x = x;
        this.y = y;
        this.value = value
    }

    draw(value) {
        if (value !== this.value) {
            this.value = value
        }
        AppState.ctx.font = "72px Silkscreen";
        AppState.ctx.fillStyle = "white";
        AppState.ctx.textAlign = "center";
        AppState.ctx.fillText(this.value.toString(), this.x, this.y);
    }
}
