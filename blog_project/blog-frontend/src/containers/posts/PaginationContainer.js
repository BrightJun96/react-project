import React from "react";
import { useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import qs from "qs";
import Pagination from "../../componenets/posts/Pagination";

const PaginationContainer = () => {
  const { lastPage, posts } = useSelector(({ postsReducer }) => ({
    lastPage: postsReducer.lastPage,
    posts: postsReducer.posts,
  }));
  const { username } = useParams();
  const location = useLocation();
  if (!posts) {
    return null;
  }

  const { tag, page = 1 } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return (
    <Pagination
      tag={tag}
      username={username}
      page={parseInt(page, 10)}
      lastPage={lastPage}
    />
  );
};

export default PaginationContainer;
