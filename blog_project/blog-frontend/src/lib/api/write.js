import client from "./client";

// 게시물 등록 로그인 유저 state값도 데이터베이스 같이 보내준다.
// 보냄으로써 이 게시물을 등록한 user가 누군지 알 수 있다.

// 게시물 등록
export const write = ({ title, body, tags }) =>
  client.post("/api/posts", { title, body, tags });

// 전체 게시물 조회

export const list = () => client.get("/api/posts");
