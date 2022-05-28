import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";
import PostList from "./../../componenets/posts/PostList";
import { getListThunk, listPost } from "./../../modules/posts";

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
      ignoreQueryPrefix: true, // 앞에 ?를 제외하고 parsing해서 가져옴.
    });

    dispatch(getListThunk({ page, username, tag }));
  }, [dispatch, location.search, username]);
  return <PostList error={error} posts={posts} showWriteButton={user} />;
};

export default PostListContainer;
