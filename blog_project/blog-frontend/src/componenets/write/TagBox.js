import React from "react";

import {
  TagBoxBlock,
  TagForm,
  TagList,
  TagItem,
} from "./styled-component/styledTagBox";
// TagList memo
const Tag = React.memo(({ tag, onRemoveTag }) => {
  console.log("Tag Render");
  return <TagItem onClick={onRemoveTag}>{tag}</TagItem>;
});

// React.memo를 해줌으로써 input이 바뀌어도 Tags 컴포넌트는 리렌더링되지않는다.
const Tags = React.memo(({ tags, onRemoveTag }) => {
  console.log("Tags Render");
  return (
    <TagList>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} onRemoveTag={onRemoveTag} />
      ))}
    </TagList>
  );
});

// TagItem memo
const TagBox = ({ tagText, tags, tagTextChange, onAddTag, onRemoveTag }) => {
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
      <Tags tags={tags} onRemoveTag={onRemoveTag} />
    </TagBoxBlock>
  );
};

export default TagBox;
