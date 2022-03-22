import React from "react";
import styled from "styled-components";
import Button from "./../common/Button";

const WriteActionButtonBlock = styled.div`
  padding-bottom: 4rem;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

const ErrorBox = styled.h4`
  color: red;
  text-align: center;
`;
// WriteActionButton
const WriteActionButton = ({ onPublish, onCancel, error }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton violet onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
      {error && <ErrorBox>모든 요소를 2글자이상 입력하세요.</ErrorBox>}
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
