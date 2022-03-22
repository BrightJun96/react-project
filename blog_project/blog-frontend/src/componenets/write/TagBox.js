import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
const TagBoxBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-top: 1px solid ${palette.gray[4]};
  padding-bottom: 3rem;
`;

const TagForm = styled.form`
  display: flex;
  border: 1px solid black;
  width: 250px;
  border-radius: 4px;
  overflow: hidden;
  input {
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem;
    flex: 1; // remaining space 차지
    min-width: 0;
  }

  button {
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    background-color: ${palette.gray[7]};
    &:hover {
      background-color: ${palette.gray[6]};
    }
  }
`;

const TagList = styled.div`
  margin-top: 1rem;
`;

const TagItem = styled.span`
  margin-left: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  background-color: ${palette.violet[1]};
  border-radius: 2rem;
  padding: 0.2rem 1rem;
  &:hover {
    opacity: 0.5;
  }
`;

const TagBox = ({ tagText, tags, tagTextChange, onAddTag, onRemoveTag }) => {
  // const [tagText, setTagText] = useState(""); // 추가될 때마다 이 배열에 추가되고 제거될 때는 이 배열에서 제거하면 됨.
  // const [tags, setTags] = useState([]);
  // const tagTextChange = (e) => {
  //   setTagText(e.target.value);
  // };

  // // concat 메서드 사용
  // const onAddTag = (e) => {
  //   e.preventDefault();
  //   // 공백이면 추가안함.
  //   if (tagText === "") return;

  //   // 이미 존재하는 것이면 추가안함.
  //   if (tags.includes(`#${tagText}`)) return;

  //   const newTag = tags.concat(`#${tagText}`);
  //   setTags(newTag); // tagText가 들어간 새로운 배열
  //   setTagText("");
  // };

  // const onRemoveTag = (e) => {
  //   const clickedText = e.target.textContent;
  //   const filteringTag = tags.filter((tag) => tag !== clickedText); // 내가 클릭한 태그를
  //   setTags(filteringTag);
  // };
  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onAddTag}>
        <input
          placeholder="태그를 입력하세요"
          value={tagText}
          onChange={tagTextChange}
        />
        <button>추가</button>
      </TagForm>
      {tags && (
        <TagList>
          {tags.map((tag, index) => (
            <TagItem key={index} onClick={onRemoveTag}>
              {tag}
            </TagItem>
          ))}
        </TagList>
      )}
    </TagBoxBlock>
  );
};

export default TagBox;
