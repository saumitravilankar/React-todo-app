import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="w-full max-w-4xl max-lg:px-4">{children}</div>
    </div>
  );
};

export default Container;
