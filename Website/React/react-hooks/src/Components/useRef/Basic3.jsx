import React, { useRef } from "react";
import Form from "./Form";
const Basic3 = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.select();
  }
  return (
    <div>
      <Form handleClick={handleClick} ref={inputRef} />
    </div>
  );
};

export default Basic3;
