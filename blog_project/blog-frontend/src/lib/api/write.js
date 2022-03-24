import client from "./client";
import qs from "qs";
// 게시물 등록 로그인 유저 state값도 데이터베이스 같이 보내준다.
// 보냄으로써 이 게시물을 등록한 user가 누군지 알 수 있다.

// 게시물 등록
export const write = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

// 전체 게시물 조회

export const list = () => client.get("/api/posts");

export const read = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updatePosts = ({ id, title, body, tag }) =>
  client.patch(`/api/posts/${id}`, { title, body, tag });

export const removePost = (id) => client.delete(`/api/posts/${id}`);
