import React from "react";
import { Button, Title } from "../styles/myStyle";
import "../styles/homeStyle.css";

const Home = ({ goToGame }) => {
  return (
    <div className="homeContainer">
      <Title>MBTI TEST ProtoType</Title>
      <Button onClick={goToGame}>시작하기</Button>
      <p>Made By Jun</p>
    </div>
  );
};

export default Home;
