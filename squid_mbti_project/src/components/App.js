import React, { useState } from "react";
import Home from "./Home";
import Game from "./Game";
import "../styles/appStyle.css";
const App = () => {
  const [begin, setBegin] = useState(false);

  const goToGame = () => {
    setBegin(true);
  };

  const goToHome = () => {
    setBegin(false);
  };
  return (
    <div className="container">
      {begin ? <Game goToHome={goToHome} /> : <Home goToGame={goToGame} />}
    </div>
  );
};

export default App;
