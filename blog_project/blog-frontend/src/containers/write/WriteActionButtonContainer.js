import React, { useEffect, useState } from "react";
import WriteActionButton from "./../../componenets/write/WriteActionButton";
import { useSelector, useDispatch } from "react-redux";
import {
  initEntire,
  writeThunk,
  updateThunk,
  writeSelector,
  setOriginalPost,
} from "./../../modules/write";
import { useNavigate } from "react-router-dom";

const WriteActionButtonContainer = () => {
  const { title, body, tags, error, response, originalPostId } =
    useSelector(writeSelector);

  const dispatch = useDispatch();
  const onPublish = () => {
    //originalPostId가 있으면 update
    console.log(originalPostId);
    if (originalPostId) {
      dispatch(updateThunk({ id: originalPostId, title, body, tags }));
      dispatch(setOriginalPost(response._id));
    }
    // 없으면 그냥 새로운 posting 쓰기
    dispatch(writeThunk({ title, body, tags }));
    dispatch(setOriginalPost(response._id));
  };

  const navigate = useNavigate();

  const onCancel = () => {
    const cancel = window.confirm("정말 취소하시겠습니까?");

    if (cancel) navigate(-1); // 이전 페이지로
  };

  useEffect(() => {
    const { _id, user } = response;
    if (user) {
      console.log("writepage");

      navigate(`/@${user.username}/${_id}`);
      // 여기서 response state를 공백값으로 만들어줘야하나?
      dispatch(initEntire());
    }
  }, [navigate, response, dispatch]);

  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    if (error?.response.status === 400) {
      setErrorText("모든 요소를 2글자이상 입력하세요.");
    }
    if (error?.response.status === 401) {
      setErrorText("로그인을 하셔야합니다.");
    }
    if (error?.response.status === 403) {
      setErrorText("작성한 유저만 포스팅을 수정할 수 있습니다.");
    }
  }, [error]);

  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
      error={error}
      errorText={errorText}
      originalPostId={originalPostId}
    />
  );
};

export default WriteActionButtonContainer;
