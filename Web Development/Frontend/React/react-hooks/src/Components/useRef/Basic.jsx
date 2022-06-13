import React, { useRef, useEffect } from "react";

const Basic = () => {
  //   const inputRef = useRef(null);
  //   useEffect(() => {
  //     inputRef.current.focus();
  //   }, []);

  const divRef = useRef(null);
  const handleClick = () => {
    divRef.current.innerText = "Hello";
  };
  return (
    <div>
      {/* <input type="text" ref={inputRef} /> */}
      <div ref={divRef}>TExgfdxgfg</div>
      <button onClick={handleClick}>Change</button>
    </div>
  );
};

export default Basic;
