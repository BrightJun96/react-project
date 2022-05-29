import React from "react";
import {
  PostContent,
  PostHead,
  PostViewerBlock,
  SubInfo,
  Tags,
} from "./styledcomponent/styledPostViewer";
import { Link } from "react-router-dom";
import PostActionButtons from "./PostActionButtons";
const PostViewer = ({ post, error, onEdit, onRemove }) => {
  if (error) {
    if (error.response && error.response.status === 404) {
      return <PostViewerBlock>존재하지 않은 포스트입니다.</PostViewerBlock>;
    }
    return <PostViewerBlock>오류 발생!</PostViewerBlock>;
  }

  if (!post) {
    return null;
  }
  const { title, body, user, date, tags } = post;
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
          <span>{new Date(date).toLocaleDateString()} </span>
        </SubInfo>
        <Tags>
          {tags &&
            tags.map((tag) => (
              <div className="tag" key={tag}>
                {`#${tag}`}
              </div>
            ))}
        </Tags>
      </PostHead>
      <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
    </PostViewerBlock>
  );
};
export default PostViewer;
