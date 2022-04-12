import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectData } from "../store/store";
import { INCREATE, DECREATE } from "../store/dataSlice";

const Counter = () => {
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  return (
    <div>
      <div>{data}</div>
      <button onClick={() => dispatch(INCREATE(1))}>+</button>
      <button onClick={() => dispatch(DECREATE(1))}>-</button>
    </div>
  );
};

export default Counter;
