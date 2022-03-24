import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { readPost } from "../../modules/post";
import PostViewer from "../../componenets/post/PostViewer";
import PostActionButtons from "../../componenets/post/PostActionButtons";
import { setOriginalPost } from "../../modules/write";
import { removePost } from "../../lib/api/write";
const PostViewerContainer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { postId } = params;
  const dispatch = useDispatch();
  const { post, error, user } = useSelector(({ postsReducer, user }) => ({
    post: postsReducer.post,
    error: postsReducer.error,
    user: user.user,
  }));

  useEffect(() => {
    console.log(postId);
    dispatch(readPost(postId));
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    navigate("/write");
  };

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
      actionButtons={
        ownPost && <PostActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default PostViewerContainer;
