import React, { useState } from "react";

const Object = () => {
  const [state, setState] = useState({ count: 0, text: "Hello" });
  const Increase = () => {
    setState((prev) => {
      return { ...prev, count: prev.count + 1 };
    });
  };
  const Decrease = () => {
    setState((prev) => {
      return { ...prev, count: prev.count - 1 };
    });
  };

  return (
    <div>
      <div>{state.text}</div>
      <button onClick={Decrease}>-</button>
      <span>{state.count}</span>
      <button onClick={Increase}>+</button>
    </div>
  );
};

export default Object;
