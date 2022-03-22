import React from "react";
import Editor from "../../componenets/write/Editor";
import { useSelector, useDispatch } from "react-redux";
import { changeTitle, changeBody } from "../../modules/write";

const EditorContainer = () => {
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));

  const dispatch = useDispatch();

  const onChangeTitle = (e) => dispatch(changeTitle(e.target.value));
  const onChangeBody = (e) => {
    dispatch(changeBody(e));
  };
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
