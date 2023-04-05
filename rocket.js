class Rocket {
    constructor(x, y, width, height, type) {
        this.type = type;
        this.x = x;
        this.y = y;

        this.yBox = [this.y, this.y + height];

        this.width = width;
        this.height = height;

        this.vy = ROCKET_DEFAULT_VELOCITY_Y;

        this.movingUp = false;
        this.movingDown = false;

        this.secondsPassedSinceLastUpdate = 0;

    }

    draw(secondsPassed, ballPosY, vy) {
        this.yBox = [this.y, this.y + this.height];
        this.secondsPassedSinceLastUpdate = secondsPassed;
        if (this.type === ROCKET_TYPES.OPPONENT) {
            this.vy = vy * 0.4;
        }
        else this.vy = vy;

        drawRect(this.x, this.y, this.width, this.height, 'white');
        this.type === ROCKET_TYPES.OPPONENT ?
            this.moveOpponent(ballPosY) :
            this.movePlayer();
    }

    movePlayer() {
        if (this.movingUp) {
            this.move(-this.vy * this.secondsPassedSinceLastUpdate);
        }
        if (this.movingDown) {
            this.move(this.vy * this.secondsPassedSinceLastUpdate);
        }
    }

    move(offsetY) {
        const hits = {
            bottom: this.y + this.height + offsetY >= LOWER_LIMIT,
            top: this.y + offsetY <= UPPER_LIMIT,
        };

        if (hits.bottom) {
            this.y = LOWER_LIMIT - this.height;
        }
        if (hits.top) {
            this.y = UPPER_LIMIT;
        }

        this.y += offsetY
    }

    moveOpponent(ballPosY) {
        const ballIsAbove = ballPosY < this.y;
        const ballIsBelow = ballPosY > this.y + this.height - BALL_SIDE;
        const ballIsInRocket = ballPosY >= this.y && ballPosY <= this.y + this.height;

        if (ballIsAbove) {
            this.move(-this.vy * this.secondsPassedSinceLastUpdate);
        }
        if (ballIsBelow) {
            this.move(this.vy * this.secondsPassedSinceLastUpdate);
        }
        if (ballIsInRocket) {
            this.move(0);
        }

    }

    setMoving(keyCode, moving) {
        if (UP.includes(keyCode)) {
            this.movingUp = moving;
        }
        if (DOWN.includes(keyCode)) {
            this.movingDown = moving;
        }
    }
}

