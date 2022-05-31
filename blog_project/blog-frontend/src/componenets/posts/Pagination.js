import React from "react";
import {
  PageNumber,
  PaginationBlock,
} from "./styledcomponent/styledPagination";
import qs from "qs";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const buildLink = ({ username, tag, page }) => {
  const query = qs.stringify({ tag, page });
  console.log(query);
  // 쿼리만 적절히 입력해주면 서버에서 쿼리대로 페이지 포스팅을 내림차순으로 나열해준다.
  return username ? `/@${username}?${query}` : `/?${query}`;
};

// lastPage 포스팅 나열될때 일정갯수이 넘어가면 바뀌도록 서버 API 설정
const Pagination = ({ page, lastPage, username, tag }) => {
  return (
    <PaginationBlock>
      <Link to={page === 1 ? "" : buildLink({ username, tag, page: page - 1 })}>
        <Button disabled={page === 1}>이전</Button>
      </Link>
      <PageNumber>{page}</PageNumber>
      <Link
        to={
          page === lastPage ? "" : buildLink({ username, tag, page: page + 1 })
        }
      >
        <Button disabled={page === lastPage}>다음</Button>
      </Link>
    </PaginationBlock>
  );
};

export default Pagination;
