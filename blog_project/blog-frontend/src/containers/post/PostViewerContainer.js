import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { postSelector, readThunk, unloadPost } from "../../modules/post";
import PostViewer from "../../componenets/post/PostViewer";
import { setOriginalPost } from "../../modules/write";
import * as postAPI from "../../lib/api/post";
import { userSelector } from "../../modules/user";
const PostViewerContainer = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { postId } = params;
  const dispatch = useDispatch();
  const { post, error } = useSelector(postSelector);
  const { user } = useSelector(userSelector);

  useEffect(() => {
    dispatch(readThunk(postId));
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
      await postAPI.removePost(postId);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  console.log(user);
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
