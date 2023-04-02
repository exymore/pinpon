const init = () => {
    playerRocket = new Rocket(20, canvas.height / 2 - 60, ROCKET_WIDTH, ROCKET_HEIGHT, ROCKET_TYPES.PLAYER);
    opponentRocket = new Rocket(canvas.width - 20, ROCKET_CENTER_Y, ROCKET_WIDTH, ROCKET_HEIGHT, ROCKET_TYPES.OPPONENT);

    ball = new Ball(canvas.width / 2 + 10, canvas.height / 2, BALL_SIDE, 'white');

    playerScoreObject = new Score(canvas.width / 4, SCORE_OFFSET_Y, playerScore);
    opponentScoreObject = new Score(canvas.width - canvas.width / 4, SCORE_OFFSET_Y, opponentScore)
};

const update = (secondsPassed) => {
    drawBg();

    playerRocket.draw(secondsPassed, null, rocketVY);
    opponentRocket.draw(secondsPassed, ball.y, rocketVY);
    playerScoreObject.draw(playerScore);
    opponentScoreObject.draw(opponentScore);

    ball.draw({yBox: playerRocket.yBox}, {yBox: opponentRocket.yBox}, ballVX, ballVY)
};

const setPlayerVictory = (type) => {
    if (type === ROCKET_TYPES.OPPONENT) opponentScore++;
    if (type === ROCKET_TYPES.PLAYER) playerScore++;
    restart();
};

function resetOptions() {
    const round = playerScore + opponentScore;
    playerRocket = null;
    opponentRocket = null;
    ball = null;

    rocketVY = ROCKET_DEFAULT_VELOCITY_Y + round * 10;
    ballVX = BALL_DEFAULT_VELOCITY_X + round * 0.1;
    ballVY = BALL_DEFAULT_VELOCITY_Y
}

function restart() {
    resetOptions();
    init()
}

function gameLoop(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;

    update(secondsPassed);
    window.requestAnimationFrame(gameLoop);
}

setInterval(() => {
    rocketVY += 20;

    ballVX += 0.3;
    ballVY += 0.1;
}, 3000);

init();
window.requestAnimationFrame(gameLoop);

