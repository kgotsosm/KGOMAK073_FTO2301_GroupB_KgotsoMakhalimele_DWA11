import { state, getState } from './src/state.js';
import { increment, decrement, reset, dispatch } from './src/actions.js';

console.log('Initial state:', getState())

const counter = document.getElementById('value')
counter.value = state.value;

// Handle the decrement click

const decrementHanlder = () => {
    dispatch(decrement());
    counter.value = state.value;
}

const decrementButton = document.getElementById('decrement')
decrementButton.addEventListener('click', decrementHanlder);

// Handle the increment click

const incrementHandler = () => {
    dispatch(increment());
    counter.value = state.value;
}

const incrementButton = document.getElementById('increment')
incrementButton.addEventListener('click', incrementHandler);

// Handle the reset click

document.getElementById('reset').addEventListener('click', function () {
    dispatch(reset());
    counter.value = state.value;
});

const resetHandler = () => {
    dispatch(reset());
    parseInt(counter.value = 0);
    alert('The counter has been reset');
}

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetHandler);

