import React from "react";
import { useNavigate } from "react-router-dom";

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>There's no Route!</h1>
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default NoMatch;
