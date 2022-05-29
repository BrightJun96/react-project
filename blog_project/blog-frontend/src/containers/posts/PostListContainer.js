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

  const location = useLocation(); //location.search
  const { username } = useParams();

  // params가 없으면 할당이 안될 것이고

  useEffect(() => {
    //location.search = ?tag=react&page=1&username=jev96
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true, // 앞에 ?를 제외하고 parsing해서 가져옴.
    });

    dispatch(getListThunk({ page, username, tag }));
    console.log("tag :", tag);
    console.log("page :", page);
    console.log("username:", username);
  }, [dispatch, location.search, username]);
  return <PostList error={error} posts={posts} showWriteButton={user} />;
};

export default PostListContainer;
