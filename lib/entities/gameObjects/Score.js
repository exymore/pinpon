import {ctx} from "../state/instances/canvas.js";

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
        ctx.font = "72px Silkscreen";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText(this.value.toString(), this.x, this.y);
    }
}
