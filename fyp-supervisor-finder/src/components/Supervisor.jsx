import React from "react";
import CardLayout from "./CardLayout";

const supervisors = [
  {
    name: "Dr. Ayesha Khan",
    department: "Computer Science",
    areas: ["AI", "Data Science"],
  },
  {
    name: "Dr. Bilal Ahmed",
    department: "Software Engineering",
    areas: ["Web Development", "DevOps"],
  },
];

const Supervisor = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {supervisors.map((sup, index) => (
        <CardLayout key={index} supervisor={sup} />
      ))}
    </div>
  );
};

export default Supervisor;
