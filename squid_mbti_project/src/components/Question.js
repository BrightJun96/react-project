import React from "react";
import { Button, Title } from "../styles/myStyle";
import { questioncontent } from "../utilities/questioncontents";
//count가 증가됨에 따라 질문,답변,질문 번호가 달라진다.
const Question = ({ count, nextQuestion }) => {
  return (
    <div>
      <Title>
        <h3>{questioncontent[count].number}</h3>
        <h2>{questioncontent[count].question}</h2>
      </Title>
      <Button onClick={() => nextQuestion(1, questioncontent[count].type)}>
        {questioncontent[count].answer1}
      </Button>
      <br />
      <Button onClick={() => nextQuestion(2, questioncontent[count].type)}>
        {questioncontent[count].answer2}
      </Button>
    </div>
  );
};

export default Question;
