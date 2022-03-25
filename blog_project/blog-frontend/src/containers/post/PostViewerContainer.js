import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../componenets/post/PostViewer";
import PostActionButtons from "../../componenets/post/PostActionButtons";
import { setOriginalPost } from "../../modules/write";
import { removePost } from "../../lib/api/write";
const PostViewerContainer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { postId } = params;
  const dispatch = useDispatch();
  const { post, error, user } = useSelector(({ postReducer, user }) => ({
    post: postReducer.post,
    error: postReducer.error,
    user: user.user,
  }));

  useEffect(() => {
    dispatch(readPost(postId));
    return () => dispatch(unloadPost());
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate("/write");
    console.log("go to write Page");
  };

  // 간단한 비동기 처리는 container내에서 해결해도 됨.
  const onRemove = async () => {
    try {
      await removePost(postId);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  const ownPost = (user && user._id) === (post && post.user_id);

  return (
    <PostViewer
      post={post}
      error={error}
      onRemove={onRemove}
      onEdit={onEdit}
      ownPost={ownPost}
    />
  );
};

export default PostViewerContainer;
