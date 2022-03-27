import React, { useState, useEffect } from "react";
import { Button } from "../styles/myStyle";
import { resultcontent } from "../utilities/resultcontents";

const Result = ({ mbti, goToHome }) => {
  const [resultCharacter, setCharacter] = useState(null);

  //마운트 된 이후와 업데이트전에 초기 데이터를 업로드 해놓는 것이다.
  useEffect(() => {
    const { e, s, t, j } = mbti;
    let result = "";
    result += e > 0 ? "E" : "I";
    result += s > 0 ? "S" : "N";
    result += t > 0 ? "T" : "F";
    result += j > 0 ? "J" : "P";

    const finalResult = resultcontent.filter((content) => {
      return content.type === result;
    });
    setCharacter(finalResult[0]);
  }, [mbti]);

  return (
    resultCharacter && (
      <div className="resultContainer">
        <h1>{resultCharacter.description.name}</h1>
        <p className="resultSignature">
          {resultCharacter.description.signature}
        </p>
        <img
          className="resultImg"
          src={resultCharacter.description.img}
          alt=""
        />
        <h2 className="mbtiType">MBTI 유형 | {resultCharacter.type}</h2>
        <h3>{resultCharacter.description.about}</h3>
        <div className="description">{resultCharacter.description.explain}</div>
        <Button onClick={goToHome}>다시 하기</Button>
      </div>
    )
  );
};

export default Result;
