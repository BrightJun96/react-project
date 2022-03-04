import React, { useEffect, useState } from "react";
import { Button, Title } from "../styles/myStyle";
import { resultcontent } from "../utilities/resultcontents";

const Result = ({ goToHome, points }) => {
  const [character, setCharacter] = useState(null);
  // 처음렌더링 해줄때만 해당 기능을 쓰겠다. 하지만 주목할 점은 처음 렌더링할 때는 character의 값은 없다!
  // effect에서 즉, 처음 마운트된 이후에 character를 설정해줄 것이기 때문에
  // 처음 마운트됐을 때는 null인 charcter값을 읽어올 수 없다.
  // 하지만 밑에 코드와 같이 &&연산자를 이용해 true면 해당 내용을 렌더링해주는 장치를 설정한다.
  // (false값은 렌더링하지않음.)
  // 처음은 false여서 렌더링하지않지만 mount이후 effect를 설정해주기 때문에 해당 내용이 제대로 렌더링 된다.
  // 그렇기 때문에 character의 초깃값을 null로 해준다면 처음 렌더링될때 null.type에 접근하는 것이기 때문에 에러가 뜬다.

  useEffect(() => {
    //useEffect를 써주는 이유:
    //state가 업데이트되면 컴포넌트는 리렌더링된다.
    //리렌더링이 되면 Effect는 다시 실행되고 이러한 루프가 반복되어 무한루프가 되는 에러가 발생한다.
    //따라서 mount 됐을 때만 effect를 실행하고 해당 값을 사용하기 위해 dependency에 빈 배열을 넣어준다.
    const { e, s, t, j } = points;

    let mbti = "";
    mbti = mbti + (e > 0 ? "E" : "I");
    mbti = mbti + (s > 0 ? "S" : "N");
    mbti = mbti + (t > 0 ? "T" : "F");
    mbti = mbti + (j > 0 ? "J" : "P");

    const result = resultcontent.filter((each) => {
      return each.type === mbti;
    });
    console.log(result); //한개의 index가 들어가있는 배열
    setCharacter(result[0]);
  }, [setCharacter]);
  return (
    character !== null && (
      <div>
        <Title>
          <h1>나의 MBTI유형은 :{character.type}</h1>
          <p>{character.description}</p>
        </Title>
        <Button onClick={goToHome}>다시하기</Button>
      </div>
    )
  );
};

export default Result;
