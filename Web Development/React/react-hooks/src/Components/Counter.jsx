import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../Store/index";
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter App</h1>
      <p>{counter}</p>
      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
