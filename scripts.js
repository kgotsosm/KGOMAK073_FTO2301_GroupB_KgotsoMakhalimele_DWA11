import { state, getState } from "./src/store.js";
import { increment, decrement, reset, dispatch } from "./src/actions.js";

// Log the initial value of the state object to the console
console.log("Initial state:", getState());

// Change the value of the state object

const counter = document.getElementById("value");

// Add an event listener to the counter to update the displayed value
counter.value = state.value;

const updateDisplayedValue = () => {
  const displayedValue = document.getElementById("value");
  displayedValue.innerText = state.value;
};

// Handle the decrement click and update the state value

const decrementHandler = () => {

  dispatch(decrement());
  counter.value = state.value;
  updateDisplayedValue();
  console.log(state);
  
};

const decrementButton = document.getElementById("decrement");
decrementButton.addEventListener("click", decrementHandler);

// Handle the increment click

const incrementHandler = () => {
  dispatch(increment());
  counter.value = state.value;
  updateDisplayedValue();
  console.log(state);
};

const incrementButton = document.getElementById("increment");
incrementButton.addEventListener("click", incrementHandler);

// Handle the reset click 

const resetHandler = () => {
  dispatch(reset());
  counter.value = state.value;
  updateDisplayedValue();
  console.log(state);
};

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", resetHandler);
resetButton.addEventListener("click", () => alert.show());

const container = document.querySelector(".alert-duration");
const alert = container.querySelector("sl-alert");

// Hide buttons when the reset alert is shown

alert.addEventListener("sl-show", () => {
  decrementButton.style.display = "none";
  incrementButton.style.display = "none";
  resetButton.style.display = "none";
});

// Show buttons when reset alert is gone

alert.addEventListener("sl-hide", () => {
  decrementButton.style.display = "inline-block";
  incrementButton.style.display = "inline-block";
  resetButton.style.display = "inline-block";
});
