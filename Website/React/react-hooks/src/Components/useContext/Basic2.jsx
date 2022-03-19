import React, { useContext } from "react";
import { Cont } from "./Basic";
const Basic2 = () => {
  const text = useContext(Cont);
  return <div>{text}</div>;
};

export default Basic2;
