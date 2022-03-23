import React, { useCallback } from "react";
import Editor from "../../componenets/write/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeBody } from "../../modules/write";

const EditorContainer = () => {
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const dispatch = useDispatch();

  // 처음 한번만 함수 생성
  const onChangeTitle = useCallback(
    (e) => {
      console.log(e.target.value);
      dispatch(changeTitle(e.target.value));
    },
    [dispatch]
  );

  // 처음 한번만 함수 생성
  const onChangeBody = useCallback(
    (e) => {
      console.log(e);
      dispatch(changeBody(e));
    },
    [dispatch]
  );

  return (
    <Editor
      title={title}
      body={body}
      onChangeTitle={onChangeTitle}
      onChangeBody={onChangeBody}
    />
  );
};

export default EditorContainer;
