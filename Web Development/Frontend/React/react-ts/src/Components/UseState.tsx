import React, { useState } from "react";
import { User } from "../interfaces";



const UseState = () => {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = () => {
    setUser({
      name: "Ton",
      age: 170000000,
      country: "Thailand",
      address: {
        province: "Prachinburi",
      },
      admin: false,
    });
  };
  return (
    <div>
      <button onClick={fetchUser}>Fetch User Click</button>
      <div>{user && <p>{`Welcome ${user.age.toLocaleString()}`}</p>}</div>
    </div>
  );
};

export default UseState;
