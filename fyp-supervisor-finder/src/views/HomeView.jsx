import React from "react";
import SectionContainer from "../components/SectionContainer";
import Supervisor from "../components/Supervisor";

const HomeView = () => {
  return (
    <SectionContainer title="Find Your FYP Supervisor">
      <p className="mb-4 text-gray-700">
        Explore available faculty members, their departments, and research areas.
      </p>
      <Supervisor />
    </SectionContainer>
  );
};

export default HomeView;
