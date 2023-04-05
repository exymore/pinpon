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

// Velocity defaults
const BALL_DEFAULT_VELOCITY_X = -10;
const BALL_DEFAULT_VELOCITY_Y = 1.1;
const ROCKET_DEFAULT_VELOCITY_Y = 750; // px/s

// Velocity multipliers
const BALL_HIT_X_VELOCITY_MULTIPLIER = 2;
const BALL_HIT_Y_VELOCITY_MULTIPLIER = 4;

// Difficulty
const DIFFICULTY_OPTIONS = {
    EASY: 0.3,
    MEDIUM: 0.35,
    HARD: 0.4,
};
