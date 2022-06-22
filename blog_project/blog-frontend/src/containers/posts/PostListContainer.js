import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import qs from "qs";
import PostList from "./../../componenets/posts/PostList";
import { getListThunk, postsSelector } from "./../../modules/posts";
import { userSelector } from "../../modules/user";
const PostListContainer = () => {
  const dispatch = useDispatch();
  const { posts, error } = useSelector(postsSelector);
  const { user } = useSelector(userSelector);

  const location = useLocation(); //location.search로 query조회
  const { username } = useParams();
  /* qs => query값을 편하게 가져오기 위한 라이브러리 */
  const { tag } = qs.parse(location.search, {
    ignoreQueryPrefix: true, // 앞에 ?를 제외하고 parsing해서 가져옴.
  });

  useEffect(() => {
    dispatch(getListThunk());
  }, [dispatch, location.search, username]);
  return (
    <PostList
      error={error}
      posts={posts}
      user={user}
      tag={tag}
      username={username}
    />
  );
};

export default PostListContainer;
