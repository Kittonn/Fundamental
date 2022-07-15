import React from "react";
import Head from "next/head";
import Default from "../layout/Default";
const index = () => {
  return (
    <div>
      <Head>
        <title>Test</title>
      </Head>
      <Default>
        <h1 className="bg-red-100">Hloo</h1>
      </Default>
    </div>
  );
};

export default index;
