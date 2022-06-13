import React, { useState } from "react";

const Ternary = () => {
  const [text, setText] = useState("Hello");
  const [sentence, setSentence] = useState("World");
  const [check, setCheck] = useState(false);
  return (
    <div>
      {/* <div>{check ? text : sentence}</div> */}
    </div>
  );
};

export default Ternary;
