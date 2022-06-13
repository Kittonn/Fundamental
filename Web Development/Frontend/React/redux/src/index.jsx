import React from "react";
import { createRoot } from "react-dom/client";
import Post from "./Post";
import { Provider } from "react-redux";
import store from "./store/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Post />
  </Provider>
);
