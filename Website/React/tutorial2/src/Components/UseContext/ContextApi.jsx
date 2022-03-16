import React, { useState } from "react";
import { data } from "../../Data";

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </div>
  );
};

const SinglePerson = ({ removePerson, id, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => removePerson(id)}>Remove</button>
    </div>
  );
};

const ContextApi = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <div>
      <div>
        <List people={people} removePerson={removePerson} />
      </div>
    </div>
  );
};

export default ContextApi;
