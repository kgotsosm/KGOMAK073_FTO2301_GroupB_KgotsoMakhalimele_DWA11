import { state, getState } from './src/store.js';
import { increment, decrement, reset, dispatch } from './src/actions.js';

console.log('Initial state:', getState());

const counter = document.getElementById('value');

counter.value = state.value;
counter.addEventListener('change', () => {
    state.value = counter.value;
});


// Handle the decrement click
const decrementHandler = () => {
    dispatch(decrement());
    counter.value = state.value;
    document.getElementById('value').innerText = state.value;
    console.log(state);
};

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', decrementHandler);

// Handle the increment click
const incrementHandler = () => {
    dispatch(increment());
    counter.value = state.value;
    document.getElementById('value').innerText = state.value;
    console.log(state);
};

const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', incrementHandler);

// Handle the reset click
const resetHandler = () => {
    dispatch(reset());
    counter.value = state.value;
    document.getElementById('value').innerText = state.value;
    console.log(state);
};

const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetHandler);
resetButton.addEventListener('click', () => alert.show());

const container = document.querySelector('.alert-duration');
const alert = container.querySelector('sl-alert');

// Hide buttons when the reset alert is shown

alert.addEventListener('sl-show', () => {
    decrementButton.style.display = 'none';
    incrementButton.style.display = 'none';
    resetButton.style.display = 'none';
});

// Show buttons when reset alert is gone

alert.addEventListener('sl-hide', () => {
    decrementButton.style.display = 'inline-block';
    incrementButton.style.display = 'inline-block';
    resetButton.style.display = 'inline-block';
});