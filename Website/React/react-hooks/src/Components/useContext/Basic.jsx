import React, { createContext, useState } from "react";
import Basic2 from "./Basic2";
export const Cont = createContext();
const Basic = () => {
  const [text, setText] = useState("Hello");
  return (
    <div>
      <button onClick={() => setText("Heeeefffff")}>Click</button>
      <Cont.Provider value={text}>
        <Basic2 />
      </Cont.Provider>
    </div>
  );
};

export default Basic;
