import React from "react";
import {
  WriteActionButtonBlock,
  StyledButton,
  ErrorBox,
} from "./styled-component/styledWriteActionButton";

const WriteActionButton = ({ onPublish, onCancel, error, isEdit }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton violet onClick={onPublish}>
        포스트 {isEdit ? "수정" : "등록"}
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
      {error && <ErrorBox>모든 요소를 2글자이상 입력하세요.</ErrorBox>}
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
