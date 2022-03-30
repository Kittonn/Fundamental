import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "a":
          setOpen(!open);
          break;
      }
    };
    window.addEventListener("keyup", handleKey);
    return () => window.removeEventListener("keyup", handleKey);
  }, [open]);
  return <div>{open && <h1>Hello Jaaaa</h1>}</div>;
};

export default CleanUp;
