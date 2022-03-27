import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Game = ({ goToHome }) => {
  const [count, setCount] = useState(0);

  const [mbti, setMbti] = useState({ e: 0, s: 0, t: 0, j: 0 });
  const { e, s, t, j } = mbti;

  const selectAnswer = (btnNum, type) => {
    if (btnNum === 1) {
      switch (type) {
        case "e":
          setMbti((state) => ({ ...state, e: e + 1 }));
          break;
        case "s":
          setMbti((state) => ({ ...state, s: s + 1 }));
          break;
        case "t":
          setMbti((state) => ({ ...state, t: t + 1 }));
          break;
        case "j":
          setMbti((state) => ({ ...state, j: j + 1 }));
          break;
        default:
          console.log("no match");
      }
    } else {
      switch (type) {
        case "e":
          setMbti((state) => ({ ...state, e: e - 1 }));
          break;
        case "s":
          setMbti((state) => ({ ...state, s: s - 1 }));
          break;
        case "t":
          setMbti((state) => ({ ...state, t: t - 1 }));
          break;
        case "j":
          setMbti((state) => ({ ...state, j: j - 1 }));
          break;
        default:
          console.log("no match");
      }
    }
    setCount(count + 1);
  };

  return (
    <div>
      {count === 12 ? (
        <Result mbti={mbti} goToHome={goToHome} />
      ) : (
        <Question count={count} selectAnswer={selectAnswer} />
      )}
    </div>
  );
};

export default Game;
