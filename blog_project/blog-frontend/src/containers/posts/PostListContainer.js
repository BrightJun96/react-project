import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";
import PostList from "./../../componenets/posts/PostList";
import { listPost } from "./../../modules/posts";

const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, error, user } = useSelector(({ postsReducer, user }) => ({
    posts: postsReducer.posts,
    error: postsReducer.error,
    user: user.user,
  }));

  const location = useLocation(); //location.search
  const { username } = useParams();

  useEffect(() => {
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    dispatch(listPost({ tag, username, page }));
  }, [dispatch, location.search, username]);
  return <PostList error={error} posts={posts} showWriteButton={user} />;
};

export default PostListContainer;
