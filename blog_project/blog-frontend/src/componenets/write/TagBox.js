import React from "react";

import {
  TagBoxBlock,
  TagForm,
  TagList,
  TagItem,
} from "./styled-component/styledTagBox";

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
