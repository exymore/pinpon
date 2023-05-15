import Canvas from "../../services/canvas.js";
import {
    LOWER_LIMIT,
    OPPONENT_HIT_THE_ROCKET_POS_X,
    PLAYER_HIT_THE_ROCKET_POS_X,
    UPPER_LIMIT
} from "../../constants/computed.js";
import {
    BALL_DEFAULT_VELOCITY_X, BALL_DEFAULT_VELOCITY_Y,
    BALL_HIT_X_VELOCITY_MULTIPLIER,
    BALL_HIT_Y_VELOCITY_MULTIPLIER,
    ROCKET_TYPES
} from "../../constants/constants.js";
import Score from "../../services/score.js";
import {AppState} from "../state/AppState.js";

export class Ball {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.vx = BALL_DEFAULT_VELOCITY_X;
        this.vy = BALL_DEFAULT_VELOCITY_Y;
        this.side = side;
    }

    draw(playerRocket, opponentRocket) {
        Canvas.drawRect(this.x, this.y, this.side, this.side, 'white');
        this.startMoving(playerRocket, opponentRocket);
    }

    startMoving(playerRocket, opponentRocket) {
        this.vx *= .995;
        this.vy *= .9959;

        this.x += this.vx;
        this.y += this.vy;

        const movingTo = {
            player: this.vx < 0,
            opponent: this.vx > 0
        };

        const hitting = {
            top: this.y <= UPPER_LIMIT(),
            bottom: this.y + this.side >= LOWER_LIMIT(AppState.canvasInstance),

            playerRocket: false,
            opponentRocket: false
        };


        if (hitting.top || hitting.bottom) {
            this.vy = -this.vy;
            return;
        }

        if (movingTo.player) {
            hitting.playerRocket = this.isHitting(playerRocket)
        }
        if (movingTo.opponent) {
            hitting.opponentRocket = this.isHitting(opponentRocket)
        }


        if (this.x < PLAYER_HIT_THE_ROCKET_POS_X()) {
            if (hitting.playerRocket) {
                this.hit(playerRocket);
            } else {
                Score.setPlayerVictory(ROCKET_TYPES.OPPONENT)
            }
        }

        if (this.x > OPPONENT_HIT_THE_ROCKET_POS_X(AppState.canvasInstance)) {
            if (hitting.opponentRocket) {
                this.hit(opponentRocket);
            } else {
                Score.setPlayerVictory(ROCKET_TYPES.PLAYER)
            }
        }
    }

    isHitting(rocket) {
        return this.y + this.side >= rocket.yBox[0] && this.y <= rocket.yBox[1]
    }

    hit(rocket) {
        this.vx = this.getBallVX(rocket);
        this.vy = this.getBallVY(rocket);
    }

    getBallVX(rocket) {
        if (rocket.type === ROCKET_TYPES.PLAYER) {
            return -BALL_DEFAULT_VELOCITY_X * BALL_HIT_X_VELOCITY_MULTIPLIER;
        }
        if (rocket.type === ROCKET_TYPES.OPPONENT) {
            return BALL_DEFAULT_VELOCITY_X * BALL_HIT_X_VELOCITY_MULTIPLIER;
        }
    }

    getBallVY(rocket) {
        const normalizedYPos = this.y - rocket.yBox[0];
        let normalizedYPosPercentage = normalizedYPos / rocket.height;

        if (normalizedYPosPercentage < 0.5) {
            normalizedYPosPercentage = -(1 - normalizedYPosPercentage);
        }

        return BALL_DEFAULT_VELOCITY_Y * normalizedYPosPercentage * BALL_HIT_Y_VELOCITY_MULTIPLIER;
    }
}
