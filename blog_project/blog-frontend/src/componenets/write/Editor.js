import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "./../../lib/styles/palette";
import { changeBody } from "../../modules/write";
import { useDispatch } from "react-redux";

const EditorBlock = styled(Responsive)`
  // 너비를 Responsive 에게 상속받는다.
  padding: 5rem 0;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  border: none;
  padding-bottom: 0.5rem;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray[4]};
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-black::before {
    left: 0px;
  }
`;

const Editor = ({ onChangeTitle, onChangeBody, title, body }) => {
  const quillElement = useRef();
  const quillInstanse = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    quillInstanse.current = new Quill(quillElement.current, {
      // instance를 사용하는 이유는? qillInstance에 이벤트핸들러를 등록하기 위해
      theme: "bubble",
      placeholder: "내용을 작성하세요...",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link", "image"],
        ],
      },
    });

    const quill = quillInstanse.current;
    console.log(quill.root.innerHTML);
    quill.on("text-change", (delta, oldDelta, source) => {
      if (source === "user") {
        const onChangeBody = () => dispatch(changeBody(quill.root.innerHTML));

        onChangeBody();
      }
    });
  }, [dispatch]); //useEffect를 써주는 이유는? react Element를 참조하기 위해서 모든 요소가 렌더링 된 이후에 참조해야해서이다.

  //이벤트 핸들러 등록

  return (
    <EditorBlock>
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <QuillWrapper onChange={onChangeBody}>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>
  );
};

export default Editor;
