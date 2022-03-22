import React, { useEffect } from "react";
import WriteActionButton from "./../../componenets/write/WriteActionButton";
import { useSelector, useDispatch } from "react-redux";
import { onWrite } from "./../../modules/write";
import { useNavigate } from "react-router-dom";

const WriteActionButtonContainer = () => {
  // 상태값 title,body,tags 가져와야지
  const { title, body, tags, error, response } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    error: write.error,
    response: write.response,
  }));
  //API 요청

  const dispatch = useDispatch();

  const onPublish = () => dispatch(onWrite({ title, body, tags }));

  // const onPublish = () =>
  //   writeAPI
  //     .write({ title, body, tags })
  //     .then((e) => console.log(e))
  //     .catch((e) => console.log(e)); // 이 에러 값을 어떻게 처리할 것인가? 에러 값만 처리해주자.
  // 에러 값 하나만 처리하면 되서 Container에서 처리해도 되지만 해당 에러값은 다른 컴포넌트에서 사용할 것이기 때문에
  // redux로 관리해줘야한다.
  // 에러 텍스트도 state로 관리해줄필요없다. 이유는 에러가 날 상황은 입력값을 입력하지 않았을 때 하나이므로
  // 해당 상황일 때 UI만 보여주면 된다.( status 500일 경우 제외 )
  // 굳이 redux로 관리해줄 필요는 없지만 연습삼아 해보자.
  // write action과 write fiilure action을 만들고
  // write failure action이면 e 값을 dispatch 해준다.
  const navigate = useNavigate();
  const onCancel = () => {
    const cancel = window.confirm("정말 취소하시겠습니까?");

    if (cancel) navigate(-1); // 이전 페이지로
  };

  useEffect(() => {
    const { _id, user } = response;
    if (user) {
      navigate(`/@${user.username}/${_id}`);
    }
  }, [navigate, response]);

  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
      error={error}
    />
  );
};

export default WriteActionButtonContainer;
