import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("Hello");
  const clickHandler = () => {
    if (text === "Hello") {
      setText("World");
    } else {
      setText("Hello");
    }
  };
  return (
    <div>
      <h2>{text}</h2>
      <button type="button" onClick={clickHandler}>
        Change
      </button>
    </div>
  );
};

export default App;
