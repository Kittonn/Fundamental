import React, { useRef } from "react";

const UseRef = () => {
  const refFrom = useRef(null);
  const divRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refFrom.current.value);
    console.log(divRef.current);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Name : </label>
        <input type="text" ref={refFrom} />
        <button type="submit">Submit</button>
      </form>
      <div ref={divRef}>Hello</div>
    </div>
  );
};

export default UseRef;
