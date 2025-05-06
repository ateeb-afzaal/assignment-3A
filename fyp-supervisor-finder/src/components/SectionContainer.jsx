import React from "react";

const SectionContainer = ({ title, children }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
    </div>
  );
};

export default SectionContainer;
