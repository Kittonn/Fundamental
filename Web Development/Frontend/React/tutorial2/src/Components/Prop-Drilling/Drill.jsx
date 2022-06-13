import React, { useState } from "react";
import { data } from "../../Data";

const Drill = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <div>
        {people.map((person) => {
          return (
            <div key={person.id}>
              <h1>{person.name}</h1>
              <button onClick={() => removePerson(person.id)}>Remove</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drill;
