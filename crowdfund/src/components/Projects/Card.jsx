import React from "react";
// Component imports
import CardHeader from "./CardHeader.jsx";
import CardStats from "./CardStats.jsx";

const Card = () => {
  return (
    <div className="project-card">
      <CardHeader />
      <CardStats />
    </div>
  );
};

export default Card;
