import React from "react";
import {
  PostItemBlock,
  PostListBlock,
  SubInfo,
  TagsBlock,
  WritePostButtonWrapper,
} from "./styledcomponent/styledPostList";
import Button from "./../common/Button";
import { Link } from "react-router-dom";

const Tags = ({ tags }) => {
  return (
    <TagsBlock>
      {tags.map((tag) => (
        <Link className="tag" to={`/?tag=${tag}`} key={tag}>
          {`#${tag}`}
        </Link>
      ))}
    </TagsBlock>
  );
};

const PostItem = ({ post }) => {
  const { date, user, tags, title, body, _id } = post;
  return (
    <PostItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo>
        <span>
          <b>
            <Link to={`/@${user.username}`}>{user.username}</Link>
          </b>
        </span>
        <span>{new Date(date).toLocaleDateString()}</span>
      </SubInfo>
      <Tags tags={tags} />
      <p>{body}</p>
    </PostItemBlock>
  );
};

const PostList = ({ posts, error, showWriteButton }) => {
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }

  return (
    <PostListBlock>
      <div>
        {/* 포스팅 필터링 인풋 기능 구현 예정 */}
        <input type="text" placeholder="원하시는 포스팅을 입력하세요." />
        {showWriteButton && (
          <WritePostButtonWrapper>
            <Link to="write">
              <Button violet>새 글 작성하기</Button>
            </Link>
          </WritePostButtonWrapper>
        )}
      </div>
      {posts && (
        <div>
          {posts.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
    </PostListBlock>
  );
};

export default PostList;
