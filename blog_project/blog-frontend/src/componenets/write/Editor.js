import React from "react";
import "quill/dist/quill.bubble.css";
import {
  EditorBlock,
  QuillWrapper,
  TitleInput,
} from "./styled-component/styledEditor";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const Editor = ({ onChangeTitle, onChangeBody, title, body }) => {
  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <QuillWrapper>
        <ReactQuill
          theme="bubble"
          value={body}
          onChange={onChangeBody}
          placeholder="내용을 입력하세요.."
        />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
