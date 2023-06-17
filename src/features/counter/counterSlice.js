import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};
// make the state log when getState() is called
const logger = (store) => (next) => (action) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};

export const showState = (store) => (next) => (action) => {
    console.log('state', store.getState());
    return next(action);
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
        state.value = 0;
    },

  }

});

export const { increment, decrement, reset } = counterSlice.actions;

export const currentState = (state) => {
    console.log(state);
    return state.counter.value;
};

export default counterSlice.reducer;