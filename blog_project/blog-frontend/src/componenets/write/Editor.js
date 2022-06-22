import React from "react";
import {
  EditorBlock,
  QuillWrapper,
  TitleInput,
} from "./styled-component/styledEditor";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Responsive from "../common/Responsive";

const Editor = ({ onChangeTitle, onChangeBody, title, body }) => {
  return (
    <Responsive>
      <EditorBlock>
        <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          onChange={onChangeTitle}
        />
        <QuillWrapper>
          <ReactQuill
            theme="snow"
            placeholder="내용을 입력하세요.."
            onChange={onChangeBody}
            value={body}
          />
        </QuillWrapper>
      </EditorBlock>
    </Responsive>
  );
};

export default Editor;
