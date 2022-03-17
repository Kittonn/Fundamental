import React, { useContext, useState } from "react";
import { data } from "../../Data";

const PersonContext = React.createContext();

const List = () => {
  const { people } = useContext(PersonContext);
  return (
    <div>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </div>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
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
    <PersonContext.Provider value={{ removePerson, people }}>
      <List />
    </PersonContext.Provider>
  );
};

export default ContextApi;
