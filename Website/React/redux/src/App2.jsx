import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "./store/todoSlice";
const App2 = () => {
  const [text, setText] = useState("");
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(todoActions.add(text));
          setText("");
        }}
      >
        Submit
      </button>
      <div>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              {item.text}
              <button onClick={() => dispatch(todoActions.delete(item.id))}>
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App2;
