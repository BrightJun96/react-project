import styled from "styled-components";

import Responsive from "../../common/Responsive";

import palette from "../../../lib/styles/palette";

export const EditorBlock = styled(Responsive)`
  // 너비를 Responsive 에게 상속받는다.
  padding: 5rem 0;
`;

export const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  border: none;
  padding-bottom: 0.5rem;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${palette.gray[4]};
`;

export const QuillWrapper = styled.div`
  min-height: 320px;
  font-size: 1.5rem;
  line-height: 1.5;
`;
