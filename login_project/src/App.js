import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import NoMatch from "./routes/NoMatch";
import Protected from "./routes/Protected";
import Signup from "./routes/Signup";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/protected" element={<Protected />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
