import React from "react";
import {
  PostContent,
  PostHead,
  PostViewerBlock,
  SubInfo,
  Tags,
} from "./styledcomponent/styledPostViewer";
import { Link } from "react-router-dom";
const PostViewer = ({ post, error, actionButtons }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않은 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (!post) {
    return null;
  }
  const { title, body, user, publishedDate, tags } = post;
  return (
    <PostViewerBlock>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo>
          <span>
            <b>
              <Link to={`/@${user.username}`}>{user.username}</Link>
            </b>
          </span>
          <span>{new Date(publishedDate).toLocaleDateString()} </span>
        </SubInfo>
        <Tags>
          {tags.map((tag) => (
            <div className="tag">#{tag}</div>
          ))}
        </Tags>
      </PostHead>
      {actionButtons}
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};

export default PostViewer;
