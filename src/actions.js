import { state } from "./state.js";
/**
 * @typedef {Object} Increment
 * @prop {"counter-increment"} type
 * @prop {state}
 */

/**
 * @typedef {Object} Decrement
 * @prop {"counter-decrement"} type
 * @prop {state}
 */

/**
 * @typedef {Object} Reset
 * @prop {"counter-reset"} type
 * @prop {state}
 */

/**
 * @typedef {Increment | Decrement | Reset} Action
 */

/**
 * @param {object} state
 * @param {counter} state.value
 * @returns {Increment}
 */

export const increment = () => {
    state.value += 1;
    return {
        type: "counter-increment",
    };
};

/**
 * @param {object} state
 * @param {number} state.value
 * @returns {Decrement}
 */

export const decrement = () => {
    state.value -= 1;
    return {
        type: "counter-decrement",
    };
};

/**
 * @param {object} state
 * @param {number} state.value
 * @returns {Decrement}
 */
export const reset = () => {
    state.value = 0;
    return {
        type: "counter-reset",
    };
};

/**
 * @param {Action} action
 */
export const dispatch = (action) => {
    return reducer(state, action);
};

/**
 * @param {state} state
 * @param {Action} action
 * @return {state}
 */

const reducer = (state, action) => {
    switch (action.type) {
        case "counter-increment": {
            state.value;
        }
        case "counter-decrement": {
            state.value;
        }
        case "counter-reset": {
            state.value;
        }
        default:
            return state;
    }
};