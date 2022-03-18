import React, { useState, useEffect, useRef } from "react";

const Basic = () => {
  const [text, setText] = useState("");
  const inputRef = useRef("");
  useEffect(()=>{
    inputRef.current.focus()
  },[])
  return (
    <div>
      <h1>{text}</h1>
      <input ref={inputRef} type="text" />
      <button onClick={() => setText(inputRef.current.value)}>Submit</button>
    </div>
  );
};

export default Basic;
