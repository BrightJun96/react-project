import client from "./client";
import qs from "qs";

// GET 전체게시물 조회 및 query parameters를 이용한 특정 게시물 조회
export const listQueryPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({ page, username, tag });
  return client.get(`/api/posts?${queryString}`);
};

// GET ID를 이용한 특정 게시물 조회
export const readPost = (id) => client.get(`/api/posts/${id}`);

// POST 게시물 등록
export const writePost = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

// PATCH 게시물 수정
export const updatePost = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, { title, body, tags });

// DELETE게시물 삭제
export const removePost = (id) => client.delete(`/api/posts/${id}`);
