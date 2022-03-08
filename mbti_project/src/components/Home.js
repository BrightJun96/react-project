import React from "react";
import { Button } from "../styles/myStyle";

const Home = ({ goToGame }) => {
  return (
    <div className="homeContainer">
      <h1 className="title">오징어게임 MBTI</h1>
      <div className="bottom-box">
        <Button onClick={goToGame}>시작하기</Button>
        <p className="writer">Made By Jun</p>
      </div>
    </div>
  );
};

export default Home;
