import React, { useState, useEffect } from "react";

const Basic = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => console.log("Effect"), [open]);
  return (
    <div>
      <div>{open && "Text"}</div>
      <button onClick={() => setOpen(!open)}>Open</button>
    </div>
  );
};

export default Basic;
