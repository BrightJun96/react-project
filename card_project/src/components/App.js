import React from "react";
import { Routes, Route } from "react-router-dom";
import { contents } from "../utilities/contents";
import Detail from "./Detail";
import Collection from "./Collection";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Collection />} />
        {contents.map((content, index) => (
          <Route
            path={content.path}
            key={index}
            element={<Detail content={content} />}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
