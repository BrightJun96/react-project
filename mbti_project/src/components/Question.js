import React from "react";
import { Button } from "../styles/myStyle";
import contents from "../utilities/questioncontents";

const Question = ({ count, selectAnswer }) => {
  return (
    <div className="questionContainer">
      <h3>{contents[count].number}</h3>
      <p className="title">{contents[count].question}</p>
      <img src={contents[count].img} alt="img" />
      <Button onClick={() => selectAnswer(1, contents[count].type)}>
        {contents[count].answer1}
      </Button>
      <Button onClick={() => selectAnswer(2, contents[count].type)}>
        {contents[count].answer2}
      </Button>
    </div>
  );
};

export default Question;
