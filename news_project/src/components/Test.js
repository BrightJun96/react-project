import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Test = () => {
  console.log("render");

  const location = useLocation();

  console.log(location);
  return (
    <div>
      <h1>Test</h1>
      <h2>params :</h2>
    </div>
  );
};

export default Test;
//constMemoizedTest = React.memo( Test );
