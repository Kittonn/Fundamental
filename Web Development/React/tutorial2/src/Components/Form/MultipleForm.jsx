import React, { useState } from "react";

const MultipleForm = () => {
  const [people, setPeople] = useState({ name: "", lname: "" });
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setPeople((prevData) => {
      return { ...prevData, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (people.name && people.lname) {
      setData((prev) => {
        return [...prev, people];
      });
      setPeople({ name: "", lname: "" });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          value={people.name}
          onChange={handleChange}
        />
        <label htmlFor="">Lastname</label>
        <input
          type="text"
          name="lname"
          value={people.lname}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MultipleForm;
