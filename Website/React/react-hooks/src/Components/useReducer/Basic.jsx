import React, { useReducer } from "react";

const initailState = { count: 0, open: false };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREATE":
      return { ...state, count: state.count + action.payload };
    case "TOGGLE":
      return { ...state, open: !state.open };
    default:
      return state;
  }
};

const Basic = () => {
  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <div>
      <div>{state.count}</div>
      <button
        onClick={() => {
          dispatch({ type: "INCREATE", payload: 1 });
          dispatch({ type: "TOGGLE" });
        }}
      >
        Click
      </button>
      <div>{state.open && <h1>Hello Jaaa</h1>}</div>
    </div>
  );
};

export default Basic;
