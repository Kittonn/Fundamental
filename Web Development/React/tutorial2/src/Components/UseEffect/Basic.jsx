import React, { useState, useEffect } from "react";

const Basic = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 5) {
      document.title = `new Message(${value})`;
    }
  },[value]);

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => setValue(value + 1)}>Click</button>
    </div>
  );
};

export default Basic;
