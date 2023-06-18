import { state } from "./store.js";

// increment action function to increment the state value
export const increment = () => {
  state.value += 1;

  return {
    type: "counter-increment",
  };
};

// decrement action function to decrement the state value
export const decrement = () => {

  state.value -= 1;

  return {
    type: "counter-decrement",
  };

};

// reset action function to reset the state value to zero
export const reset = () => {

  state.value = 0;

  return {
    type: "counter-reset",
  };

};

//dispatch function to dispatch the action to the reducer
export const dispatch = (action) => {

  return reducer(state, action);

};

// reducer function to update the state value based on the action
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
