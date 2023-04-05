class Ball {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.side = side;
    }

    draw(rocketX, opponentRocketX) {
        drawRect(this.x, this.y, this.side, this.side, 'white');
        this.startMoving(rocketX, opponentRocketX);
    }

    startMoving(playerRocket, opponentRocket) {
        ballVX *= .996;
        ballVY *= .999;

        this.x += ballVX;
        this.y += ballVY;

        const movingTo = {
            player: ballVX < 0,
            opponent: ballVX > 0
        };

        const hitting = {
            top: this.y <= UPPER_LIMIT,
            bottom: this.y + this.side >= LOWER_LIMIT,

            playerRocket: false,
            opponentRocket: false
        };


        if (hitting.top || hitting.bottom) {
            ballVY = -ballVY;
            return;
        }

        if (movingTo.player) {
            hitting.playerRocket = this.isHitting(playerRocket)
        }
        if (movingTo.opponent) {
            hitting.opponentRocket = this.isHitting(opponentRocket)
        }

        if (this.x < PLAYER_HIT_THE_ROCKET_POS_X) {
            if (hitting.playerRocket) {
                this.hit(playerRocket);
            } else {
                setPlayerVictory(ROCKET_TYPES.OPPONENT)
            }
        }

        if (this.x > OPPONENT_HIT_THE_ROCKET_POS_X) {
            if (hitting.opponentRocket) {
                this.hit(opponentRocket);
            } else {
                setPlayerVictory(ROCKET_TYPES.PLAYER)
            }
        }
    }

    isHitting(rocket) {
        return this.y + this.side >= rocket.yBox[0] && this.y <= rocket.yBox[1]
    }

    hit(rocket) {
        ballVX = this.getBallVX(rocket);
        ballVY = this.getBallVY(rocket);
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
            normalizedYPosPercentage = - (1 - normalizedYPosPercentage);
        }

        return BALL_DEFAULT_VELOCITY_Y * normalizedYPosPercentage * BALL_HIT_Y_VELOCITY_MULTIPLIER;
    }
}
