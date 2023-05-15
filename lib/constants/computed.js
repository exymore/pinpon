import {
    BALL_SIDE,
    ROCKET_WIDTH
} from "./constants.js";


// Canvas dimensions
export const UPPER_LIMIT = () => 30;
export const LOWER_LIMIT = (ctx) => ctx?.height - 30;

export const ROCKET_CENTER_Y = (ctx) => ctx?.height / 2 - 60;

export const PLAYER_HIT_THE_ROCKET_POS_X = () => 20 + ROCKET_WIDTH;
export const OPPONENT_HIT_THE_ROCKET_POS_X = (ctx) => ctx?.width - ROCKET_WIDTH - BALL_SIDE;
