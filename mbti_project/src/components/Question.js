import React from "react";
import { Button } from "../styles/myStyle";
import contents from "../utilities/questioncontents";

const Question = ({ count, selectAnswer }) => {
  /*
  ** useRef를 이용하여 style 속성을 변경하는 방법**
  const imgBox = useRef(null);

  console.log(imgBox);

  useEffect(() => {
    imgBox.current.style.backgroundImage = `url(${contents[count].img})`;
  }, [count]);
*/
  return (
    <div className="questionContainer">
      <h3>{contents[count].number}</h3>
      <p className="title">{contents[count].question}</p>
      <div
        className="img-box"
        style={{
          width: "350px",
          height: "300px",
          borderRadius: "10px",
          backgroundImage: `url(${contents[count].img})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
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
