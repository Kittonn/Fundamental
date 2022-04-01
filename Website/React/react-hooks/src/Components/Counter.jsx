import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DEC" })}>decrement</button>
      <button onClick={() => dispatch({ type: "ADD_10", payload: 10 })}>
        Add 10
      </button>
    </div>
  );
};

export default Counter;
