import React from "react";
import TagBox from "./../../componenets/write/TagBox";
import { useSelector, useDispatch } from "react-redux";
import { changeTagText, changeTags, initText } from "./../../modules/write";

const TagBoxContainer = () => {
  const { tagText, tags } = useSelector(({ write }) => ({
    tagText: write.tagText,
    tags: write.tags,
  }));

  const dispatch = useDispatch();

  const tagTextChange = (e) => {
    dispatch(changeTagText(e.target.value));
  };

  const onAddTag = (e) => {
    e.preventDefault();
    // 공백이면 추가안함.
    if (tagText === "") return;

    // 이미 존재하는 것이면 추가안함.
    if (tags.includes(`#${tagText}`)) return;
    const newTag = tags.concat(`#${tagText}`);
    dispatch(changeTags(newTag));
    dispatch(initText());
  };

  const onRemoveTag = (e) => {
    const clickedText = e.target.textContent;
    const filteringTag = tags.filter((tag) => tag !== clickedText); // 내가 클릭한 태그를
    dispatch(changeTags(filteringTag));
  };

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
