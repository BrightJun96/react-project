import React, { useState } from "react";
import AskRemoveModal from "./AskRemoveModal";
import {
  ActionButton,
  PostActionButtonBlock,
} from "./styledcomponent/styledPostActionButtons";

const PostActionButtons = ({ onEdit, onRemove }) => {
  const [modal, setModal] = useState(false);

  const onRemoveClick = () => setModal(true);

  const onCancel = () => setModal(false);
  const onConfirm = () => {
    setModal(false);
    onRemove();
  };
  return (
    <PostActionButtonBlock>
      <ActionButton onClick={onEdit}>수정</ActionButton>
      <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
      <AskRemoveModal
        visible={modal}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </PostActionButtonBlock>
  );
};

export default PostActionButtons;
