import React from "react";
import styled from "styled-components";
import Button from "./../common/Button";

const WriteActionButtonBlock = styled.div`
  padding-bottom: 4rem;
`;

const StyledButton = styled(Button)`
  margin-left: 1rem;
`;

// WriteActionButton
const WriteActionButton = ({ onPublish, onCancel }) => {
  return (
    <WriteActionButtonBlock>
      <StyledButton violet onClick={onPublish}>
        포스트 등록
      </StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonBlock>
  );
};

export default WriteActionButton;
