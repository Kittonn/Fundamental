import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const Increase = () => {
    setCounter((prevNum) =>{
      return prevNum +1;
    })
  };

  const reset = () => {
    setCounter((prevNum)=>{
      return 0;
    })
  }
  const Decrease = () => {
    setCounter((prevNum) => {
      return prevNum - 1;
    });
  };
  return (
    <div>
      <h1 className="text-gray-800 font-[Poppins] text-3xl font-bold">
        {counter}
      </h1>
      <button className="bg-sky-500 m-5 p-2 rounded-full" onClick={Decrease}>Decrease</button>
      <button className="bg-sky-500 m-5 p-2 rounded-full" onClick={reset}>Reset</button>
      <button className="bg-sky-500 m-5 p-2 rounded-full" onClick={Increase}>
        Increase
      </button>
    </div>
  );
};

export default Counter;
