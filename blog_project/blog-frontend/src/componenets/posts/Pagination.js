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
  return username ? `/@${username}?${query}` : `/?${query}`;
};

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
