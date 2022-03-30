import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/comments";

const Api = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState({});

  const fetchData = async () => {
    const res = await axios.get(url);
    const resData = await res.data;
    setData(resData);
    setText(resData[Math.floor(Math.random() * resData.length)]);
  };

  const handleRandom = () => {
    const randomText = data[Math.floor(Math.random() * data.length)];
    setText(randomText);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div>{text.body}</div>
      <button onClick={handleRandom}>Random</button>
    </div>
  );
};

export default Api;
