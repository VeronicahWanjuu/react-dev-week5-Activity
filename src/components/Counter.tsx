import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { increment, decrement, reset } from "../store/actions/counterActions";
import styles from "./Counter.module.css";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className={styles.box}>
      <h2>Counter</h2>
      <p className={styles.num}>{count}</p>
      <div>
        <button className={styles.btn} onClick={() => dispatch(increment())}>+</button>
        <button className={styles.btn} onClick={() => dispatch(decrement())}>-</button>
        <button className={`${styles.btn} ${styles.resetBtn}`} onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
