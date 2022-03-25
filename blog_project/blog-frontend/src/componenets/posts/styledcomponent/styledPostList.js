import styled from "styled-components";
import Responsive from "./../../common/Responsive";
import palette from "./../../../lib/styles/palette";

export const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

export const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
export const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }

    p {
      margin-top: 2rem;
    }
  }
`;

export const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};

  span {
    margin-right: 0.5rem;
  }
`;

export const TagsBlock = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.violet[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      opacity: 0.5;
    }
  }
`;
