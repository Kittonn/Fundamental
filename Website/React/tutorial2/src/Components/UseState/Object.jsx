import React, { useState } from "react";

const Object = () => {
  const [people, setPeople] = useState({
    name: "Kittipod",
    age: 17,
    message: "random message",
  });

  const changeMessage = () => {
    setPeople({ ...people, message: "hello world" });
  };

  return (
    <div>
      <h1>{people.name}</h1>
      <h1>{people.age}</h1>
      <h1>{people.message}</h1>
      <button onClick={changeMessage}>Change message</button>
    </div>
  );
};

export default Object;
