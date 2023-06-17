import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
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
    return state.counter.value;
};

export default counterSlice.reducer;