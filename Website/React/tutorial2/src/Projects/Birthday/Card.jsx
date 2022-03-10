import React, { useState } from "react";
import { bdData } from "./bdData";

const Card = () => {
  const [person, setPerson] = useState(bdData);
  const clearAll = () => {
    setPerson((prevData)=>{
        return [];
    });
  };
  return (
    <div className="bg-sky-200 h-screen  flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl w-2/3 p-5">
        <h1 className="text-2xl font-[Poppins] tracking-widest mb-4">
          {person.length} birthdays today
        </h1>
        <div>
          {person.map(({ name, img, age }) => {
            return (
              <div className="flex my-4">
                <img className="w-24 h-24 rounded-full mr-4" src={img} alt="" />
                <div className="flex flex-col justify-center">
                  <h6 className="font-[Poppins] font-bold tracking-widest">
                    {name}
                  </h6>
                  <p className="font-[Poppins] text-sm tracking-wider">
                    {age} years
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={clearAll}
          className="w-full bg-sky-500 text-white rounded-lg p-3 font-bold text-xl"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Card;
