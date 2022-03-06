import React from "react";
import { Route, Routes } from "react-router-dom";
import NewsList from "./components/NewsList";
import Layout from "./routes/Layout";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <div style={{ textAlign: "center", marginTop: "100px" }}>
                <h1>Welcome to Jev News!</h1>
                <h2>Select News! See all the news you want. </h2>
              </div>
            }
          />
          <Route path=":category" element={<NewsList />} />
        </Route>
        <Route path="*" element={<h1>No match!</h1>} />
      </Routes>
    </div>
  );
};

export default App;
