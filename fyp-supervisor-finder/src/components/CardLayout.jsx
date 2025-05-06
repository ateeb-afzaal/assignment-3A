import React from "react";
import ResearchAreaBox from "./ResearchAreaBox";

const CardLayout = ({ supervisor }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold">{supervisor.name}</h2>
      <p className="text-gray-600">{supervisor.department}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {supervisor.areas.map((area, idx) => (
          <ResearchAreaBox key={idx} area={area} />
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
