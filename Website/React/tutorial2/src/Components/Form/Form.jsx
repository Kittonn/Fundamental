import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, lname };
    if (name && lname) {
      setPeople((prev) => {
        return [...prev, data];
      });
    }
    console.log(people);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">Lastname</label>
        <input
          type="text"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
