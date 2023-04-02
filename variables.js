// Keyboard keys
const UP = ['ArrowUp', 'KeyW'];
const DOWN = ['ArrowDown', 'KeyS'];

// Canvas dimensions
const UPPER_LIMIT = 30;
const LOWER_LIMIT = canvas.height - 30;

// Rocket properties
const ROCKET_TYPES = {
    PLAYER: 'player',
    OPPONENT: 'opponent'
};
const ROCKET_WIDTH = 20;
const ROCKET_HEIGHT = 120;
const SCORE_OFFSET_Y = 120;
const BALL_SIDE = 40;
const ROCKET_DEFAULT_VELOCITY_Y = 360; // px/s

// Game objects
let playerRocket;
let opponentRocket;
let ball;
let playerScoreObject;
let opponentScoreObject;
let playerScore = 0;
let opponentScore = 0;

// Time variables
let secondsPassed = 0;
let oldTimeStamp = 0;

// Ball properties
const BALL_DEFAULT_VELOCITY_X = 10;
const BALL_DEFAULT_VELOCITY_Y = 1.2;

// Velocity variables
let rocketVY = ROCKET_DEFAULT_VELOCITY_Y;
let ballVX = BALL_DEFAULT_VELOCITY_X;
let ballVY = BALL_DEFAULT_VELOCITY_Y;
