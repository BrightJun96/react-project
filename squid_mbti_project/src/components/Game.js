import React, { useState } from "react";
//여기서 관리되어야할 useState는 무엇일까? 두 개의 질문 중 하나를 누르면 바뀌는?
// useState : 질문에 대하여 몇개까지 대답했나에 대한 상태관리
// 만약 질문이 총 12개라면 12개전까지는 game컴포넌트를 계속해서 보여주고 12개가 끝난다면 result컴포넌트를 보여준다.
// 그래서 답변끝낸 문항수 => useState  count
// count는 질문 배열에 대한 인덱스 번호를 들어갈 것이다.
import "../styles/gameStyle.css";
import Question from "./Question";
import Result from "./Result";
const Game = ({ goToHome }) => {
  const [count, setCount] = useState(0);

  const [e, setE] = useState(0);
  const [s, setS] = useState(0);
  const [t, setT] = useState(0);
  const [j, setJ] = useState(0);

  //매개변수를 이용해 로직을 만들어줬다.
  const nextQuestion = (btnNum, type) => {
    if (btnNum === 1) {
      if (type == "e") {
        setE(e + 1);
      }
      if (type == "s") {
        setS(s + 1);
      }
      if (type == "t") {
        setT(t + 1);
      }
      if (type == "j") {
        setJ(j + 1);
      }
    } else {
      if (type == "e") {
        setE(e - 1);
      }
      if (type == "s") {
        setS(s - 1);
      }
      if (type == "t") {
        setT(t - 1);
      }
      if (type == "j") {
        setJ(j - 1);
      }
    }

    setCount(count + 1);
  };
  return (
    <div className="gameContainer">
      {count === 12 ? (
        <Result goToHome={goToHome} points={{ e, s, t, j }} />
      ) : (
        <Question count={count} nextQuestion={nextQuestion} />
      )}
    </div>
  );
};

export default Game;
