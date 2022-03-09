import React, { useState } from "react";
import { data } from "../../Data";
const Array = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Delete</button>
          </div>
        );
      })}
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Array;
