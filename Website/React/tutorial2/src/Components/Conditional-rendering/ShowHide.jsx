import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(true);
  const [text, settext] = useState("Kittipod");
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show / Hide</button>
      <div>{show ? text : <div></div>}</div>
    </div>
  );
};

export default ShowHide;
