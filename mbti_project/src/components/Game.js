import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Game = ({ goToHome }) => {
  //답변 끝낸 문항 수
  //답변이 12면 리절트 아니면 퀘스천
  //카운트가 증가하는 기능을 퀘스천에서 해줘야하기 때문에 퀘스천으로 넘김
  const [count, setCount] = useState(0);
  const [e, setE] = useState(0);
  const [s, setS] = useState(0);
  const [t, setT] = useState(0);
  const [j, setJ] = useState(0);

  //count 증가 + 점수합산
  const selectAnswer = (btnNum, type) => {
    if (btnNum === 1) {
      if (type === "e") {
        setE(e + 1);
      }
      if (type === "s") {
        setS(s + 1);
      }
      if (type === "t") {
        setT(t + 1);
      }
      if (type === "j") {
        setJ(j + 1);
      }
    } else {
      if (type === "e") {
        setE(e - 1);
      }
      if (type === "s") {
        setS(s - 1);
      }
      if (type === "t") {
        setT(t - 1);
      }
      if (type === "j") {
        setJ(j - 1);
      }
    }

    setCount(count + 1);
  };

  return (
    <div className="gameContainer">
      {count === 12 ? (
        <Result points={{ e, s, t, j }} goToHome={goToHome} />
      ) : (
        <Question count={count} selectAnswer={selectAnswer} />
      )}
    </div>
  );
};

export default Game;
