import React, { useState } from "react";

const Basic = () => {
  //   const [count, setCount] = useState(0);

  //   const [open, setOpen] = useState(false);

  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { id: text.length, name: text }]);
  };

  return (
    <div>
      {/* <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increate</button> */}

      {/* <div>{open && "Hello"}</div>
      <button onClick={() => setOpen(!open)}>Open</button> */}

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <div>
        {data.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </div>
  );
};

export default Basic;
