import React, { useCallback } from "react";
import TagBox from "./../../componenets/write/TagBox";
import { useSelector, useDispatch } from "react-redux";
import {
  changeTagText,
  changeTags,
  writeSelector,
} from "./../../modules/write";

const TagBoxContainer = () => {
  const { tagText, tags } = useSelector(writeSelector);

  const dispatch = useDispatch();

  // tagTextChange
  const tagTextChange = useCallback(
    (e) => {
      dispatch(changeTagText(e.target.value));
    },
    [dispatch]
  );

  // tag 추가
  // tags,tagText가 바뀌었을 때만 함수 새로 생성
  const onAddTag = useCallback(
    (e) => {
      e.preventDefault();
      // 공백이면 추가안함.
      if (tagText === "") return;

      // 이미 존재하는 것이면 추가안함.
      if (tags.includes(`${tagText}`)) return;
      const newTag = tags.concat(`${tagText}`);
      dispatch(changeTags(newTag));
      dispatch(changeTagText(""));
    },
    [tagText, tags, dispatch]
  );

  const onRemoveTag = useCallback(
    (e) => {
      const clickedText = e.target.textContent;
      const filteringTag = tags.filter((tag) => {
        return `#${tag}` !== clickedText;
      });
      dispatch(changeTags(filteringTag));
    },
    [tags, dispatch]
  );

  return (
    <TagBox
      tagText={tagText}
      tags={tags}
      tagTextChange={tagTextChange}
      onAddTag={onAddTag}
      onRemoveTag={onRemoveTag}
    />
  );
};

export default TagBoxContainer;
