import { state } from "./store.js";

/**
 * @typedef {Object} Increment
 * @prop {"counter-increment"} type
 * @prop {state} state
 */

/**
 * @typedef {Object} Decrement
 * @prop {"counter-decrement"} type
 */

/**
 * @typedef {Object} Reset
 * @prop {"counter-reset"} type
 */

/**
 * @typedef {Increment | Decrement | Reset} Action
 */

/**
 * @returns {Increment}
 */
export const increment = () => {
  state.value += 1;
  return {
    type: "counter-increment",
  };
};

/**
 * @returns {Decrement}
 */
export const decrement = () => {
  state.value -= 1;
  return {
    type: "counter-decrement",
  };
};

/**
 * @returns {Reset}
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
 * @param {object} state
 * @param {Action} action
 * @returns {object}
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "counter-increment":
      state.value + 1;
      break;
    case "counter-decrement":
      state.value - 1;
      break;
    case "counter-reset":
      state.value = 0;
      break;
    default:
      break;
  }
  return state;
};
