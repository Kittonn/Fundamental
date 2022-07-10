import React from "react";
import { useRouter } from "next/router";
const Jumboton = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Jumboton</h1>
      <button className="bg-sky-800"onClick={()=>router.push("/hello")}>Start</button>
    </div>
  );
};

export default Jumboton;
