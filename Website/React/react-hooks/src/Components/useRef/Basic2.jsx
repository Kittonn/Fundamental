import React, { useState, useRef } from "react";

const Basic2 = () => {
  const divRef = useRef("");
  const [value, setValue] = useState("");
  return (
    <div>
      <div ref={divRef}>{value}</div>
      <button
        onClick={() => {
          //   console.log(divRef.current.attributes.data.value);
            divRef.current.innerText = "Hello";
            setValue(divRef.current.innerText);
          
        }}
      >
        Change
      </button>
    </div>
  );
};

export default Basic2;
