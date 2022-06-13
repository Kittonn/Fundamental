import React, { useState, useEffect } from "react";
import { useFetch } from "./useF";
const url = "https://course-api.com/javascript-store-products";

const UseFetch = () => {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default UseFetch;
