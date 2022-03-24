import React from "react";
import PostViewer from "../componenets/post/PostViewer";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostingContainer from "../containers/post/PostingContainer";
import PostViewerContainer from "../containers/post/PostViewerContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
    </>
  );
};
export default PostPage;
