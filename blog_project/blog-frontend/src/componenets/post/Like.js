import React, { useState } from "react";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postLike } from "../../lib/api/post";
import { postSelector } from "../../modules/post";
import { userSelector } from "../../modules/user";

const LikeContainer = styled.div`
  margin-top: 1rem;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: inherit;
    padding: 10px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-color: blue;

    svg {
      width: 30px;
      height: 30px;
      fill: #7048e8;
    }
  }

  button[disabled] {
    color: #666666;
    border: 2px solid #999999;
    background-color: #cccccc;

    svg {
      fill: gray;
    }
  }

  span {
    margin-top: 0.5rem;
  }
`;

const Like = () => {
  const params = useParams();

  const { user } = useSelector(userSelector);
  const { post } = useSelector(postSelector);
  const { postId } = params;
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(post.like);

  // 각 유저는 좋아요를 하나씩만 증가시킬 수 있다.
  // 유저가 없으면 좋아요 아이콘을 누를 수 없음. => 유저의 존재 여부에 따라 버튼의 disabled를 결정
  const activateLike = () => {
    setLike((prev) => !prev);
    setLikeCount(likeCount + 1);
    postLike({ id: postId, likeCount });
  };

  console.log(post.like);

  return (
    <LikeContainer>
      <button onClick={activateLike} disabled={!Boolean(user)}>
        {like ? <AiFillLike /> : <AiOutlineLike />}
      </button>
      <span>{likeCount}</span>
    </LikeContainer>
  );
};

export default Like;
