import React, { useState } from "react";
import Home from "./Home";
import Game from "./Game";
import "../styles/base.css";
// const container = {
//   height: "100vh",
//   width: "100vw",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   margin: "0px",
//   padding: "0px",
//   background: 'url("./styleImage/squadBackground.png")',
// };

const App = () => {
  const [begin, setBegin] = useState(false);

  const goToGame = () => setBegin(true);
  const goToHome = () => setBegin(false);
  return (
    <div className="container">
      {begin ? <Game goToHome={goToHome} /> : <Home goToGame={goToGame} />}
    </div>
  );
};

export default App;
