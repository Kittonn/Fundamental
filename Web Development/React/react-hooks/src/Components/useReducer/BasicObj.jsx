import React, { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_NAME":
      return [
        ...state,
        { id: new Date().valueOf(), name: action.payload, toggle: false },
      ];
    case "DELETE":
      return state.filter((itm) => itm.id !== action.payload.id);
    case "TOGGLE":
      return state.map((itm) => {
        if (itm.id === action.payload.id) {
          return { ...itm, toggle: !itm.toggle };
        }
        return itm;
      });
    default:
      return state;
  }
};

const BasicObj = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_NAME", payload: name });
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      <div>
        {state.map((itm) => {
          return (
            <div key={itm.id}>
              <h1 style={{ color: itm.toggle ? "#AAA" : "#000" }}>
                {itm.name}
              </h1>
              <span
                onClick={() =>
                  dispatch({ type: "DELETE", payload: { id: itm.id } })
                }
              >
                Delete
              </span>
              <span
                onClick={() =>
                  dispatch({ type: "TOGGLE", payload: { id: itm.id } })
                }
              >
                Toggle
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BasicObj;
