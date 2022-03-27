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
      <p className="title" ref={h2Ref}></p>
      <img src={questioncontent[count].img} alt="img" />
      <Button onClick={() => selectAnswer(1, questioncontent[count].type)}>
        {questioncontent[count].answer1}
      </Button>
      <Button onClick={() => selectAnswer(2, questioncontent[count].type)}>
        {questioncontent[count].answer2}
      </Button>
    </div>
  );
};

export default Question;
