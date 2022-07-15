import React from "react";

const Default = ({ children }) => {
  return (
    <div>
      <div className="text-red">Header</div>
      {children}
    </div>
  );
};

export default Default;
