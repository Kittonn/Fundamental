import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById("root"));
