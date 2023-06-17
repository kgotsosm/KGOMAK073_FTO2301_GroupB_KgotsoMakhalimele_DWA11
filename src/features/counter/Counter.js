import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
    currentState,
  reset,
} from './counterSlice';
import styles from './Counter.module.css';
import {store} from "../../app/store";
// make the state log when getState() is called


function logger() {
    console.log('State', store.getState());
}

store.subscribe(logger);

export function Counter() {
  const count = useSelector(currentState);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>

        <button
            className={styles.button}
            onClick={() => dispatch(reset())}
        >
            Reset
        </button>

      </div>
    </div>
  );
}
