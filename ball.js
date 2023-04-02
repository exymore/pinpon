class Ball {
    constructor(x, y, side) {
        this.x = x;
        this.y = y;
        this.vx = BALL_DEFAULT_VELOCITY_X;
        this.vy = BALL_DEFAULT_VELOCITY_Y;
        this.side = side;
    }

    draw(rocketX, opponentRocketX, vx, vy) {
        drawRect(this.x, this.y, this.side, this.side, 'white');
        this.startMoving(rocketX, opponentRocketX, vx, vy);
    }

    startMoving(playerRocket, opponentRocket, vx, vy) {
        this.setVelocity(vx, vy);
        this.x += this.vx;
        this.y += this.vy;

        const movingTo = {
            player: this.vx < 0,
            opponent: this.vx > 0
        };

        const hitting = {
            top: this.y + this.vy <= UPPER_LIMIT,
            bottom: this.y + this.vy + this.side >= LOWER_LIMIT,

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
        this.vx = -this.vx;
        ballVX *= BALL_HIT_VELOCITY_MULTIPLIER;

        setTimeout(() => {
            ballVX /= BALL_HIT_VELOCITY_MULTIPLIER
        }, 750)
    }

    setVelocity(vx, vy) {
        this.vx < 0 ? this.vx = -vx : this.vx = vx;
        this.vy < 0 ? this.vy = -vy : this.vy = vy;
    }
}
