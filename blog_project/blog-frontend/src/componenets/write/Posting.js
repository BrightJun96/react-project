import React from "react";
import styled from "styled-components";
import palette from "./../../lib/styles/palette";

// 화면 전체 박스
const WriteContainerBox = styled.div`
  width: 60vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

// 제목
const TitleBox = styled.input`
  border: none;
  outline: none;
  width: 90%;
  border-bottom: 1px solid ${palette.gray[4]};
  padding-bottom: 0.5rem;
  margin-top: 3rem;
  font-size: 3rem;
  ::placeholder {
    color: ${palette.gray[4]};
  }
`;

// 내용
const ContentBox = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${palette.gray[4]};
  width: 90%;
  height: 400px;
`;

// 태그 박스(태그 인풋과 추가하면 만들어지는 UI를 담은 박스)
const TagBox = styled.div`
  display: flex;
  flex-direction: column;
`;

// Tag 입력창
const InputTag = styled.div``;

// 추가된 태그

const Tags = styled.div``;

// 태그 조각

const Tag = styled.span``;

// 버튼 박스

const ButtonBox = styled.div``;
const Posting = () => {
  return (
    <WriteContainerBox>
      <form>
        <TitleBox placeholder="제목을 입력하세요" />
        <ContentBox placeholder="내용을 작성하세요." />
        <TagBox>
          <span>태그</span>
          <InputTag>
            <input />
            <button>추가</button>
          </InputTag>
          <Tags>
            <Tag>tag1</Tag>
            <Tag>tag2</Tag>
            <Tag>tag3</Tag>
          </Tags>
        </TagBox>
        <ButtonBox>
          <button>포스트 등록</button>
          <button>취소</button>
        </ButtonBox>
      </form>
    </WriteContainerBox>
  );
};

export default Posting;
