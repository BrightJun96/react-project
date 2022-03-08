import React, { useRef, useEffect } from "react";
import { Button } from "../styles/myStyle";
import { questioncontent } from "../utilities/questioncontents";

const Question = ({ count, selectAnswer }) => {
  const h2Ref = useRef();
  useEffect(() => {
    h2Ref.current.innerHTML = questioncontent[count].question;
  });

  return (
    <div className="questionContainer">
      <h3>{questioncontent[count].number}</h3>
      <h2 ref={h2Ref}></h2>
      <img src={questioncontent[count].img} alt="" />
      <br />
      <Button onClick={() => selectAnswer(1, questioncontent[count].type)}>
        {questioncontent[count].answer1}
      </Button>
      <br />
      <Button onClick={() => selectAnswer(2, questioncontent[count].type)}>
        {questioncontent[count].answer2}
      </Button>
    </div>
  );
};

export default Question;
