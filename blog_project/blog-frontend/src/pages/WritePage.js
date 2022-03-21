import React from "react";
import Responsive from "../componenets/common/Responsive";
import Editor from "../componenets/write/Editor";
import WriteActionButton from "../componenets/write/WriteActionButton";
import TagBoxContainer from "../containers/write/TagBoxContainer";
import EditorContainer from "./../containers/write/EditorContainer";

const WritePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <WriteActionButton />
    </Responsive>
  );
};

export default WritePage;
