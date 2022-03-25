import React, { useEffect } from "react";
import WriteActionButton from "./../../componenets/write/WriteActionButton";
import { useSelector, useDispatch } from "react-redux";
import { onWrite, updatePost, initEntire } from "./../../modules/write";
import { useNavigate } from "react-router-dom";

const WriteActionButtonContainer = () => {
  // 상태값 title,body,tags 가져와야지
  const { title, body, tags, error, response, originalPostId } = useSelector(
    ({ write }) => ({
      title: write.title,
      body: write.body,
      tags: write.tags,
      error: write.error,
      response: write.response,
      originalPostId: write.originalPostId,
    })
  );
  //API 요청

  const dispatch = useDispatch();
  const onPublish = () => {
    //originalPostId가 있으면 update
    if (originalPostId) {
      dispatch(updatePost({ title, body, tags, id: originalPostId }));
      return;
    }
    // 없으면 그냥 새로운 posting 쓰기
    dispatch(onWrite({ title, body, tags }));
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

  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
      error={error}
      originalPostId={originalPostId}
    />
  );
};

export default WriteActionButtonContainer;
