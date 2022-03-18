import React, { useState, useEffect } from "react";

const Basic = () => {
  const [type, setType] = useState("posts");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
    return () => {
      console.log("clean");
    };
  }, [type]);
  return (
    <div>
      <button onClick={() => setType("posts")}>posts</button>
      <button onClick={() => setType("comments")}>comments</button>
      <button onClick={() => setType("users")}>users</button>
      <h1>{type}</h1>
      <div>{data.map((d) => JSON.stringify(d))}</div>
    </div>
  );
};

export default Basic;
