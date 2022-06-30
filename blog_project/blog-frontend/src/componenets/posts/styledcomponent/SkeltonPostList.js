import React from "react";
import styled from "styled-components";
import { PostItemBlock, SubInfo } from "./styledPostList";
import Responsive from "./../../common/Responsive";
const SkeltonPostContainer = styled.div`
  margin-top: 96px;
`;

const SkeltonPostItemBlock = styled(PostItemBlock)`
  .post-title {
    height: 2rem;
    width: 100%;
    background-color: lightgray;
    border-radius: 5px;
  }
  .post-tagList {
    margin-top: 0.5rem;
    display: flex;
    .post-tag {
      width: 40px;
      height: 16px;
      margin-right: 0.5rem;
      background-color: lightgray;
      border-radius: 5px;
    }
  }

  .post-body {
    margin-top: 0.5rem;
    width: 100%;
    height: 40px;
    background-color: lightgray;
    border-radius: 5px;
  }
`;

const SkeltonSubInfo = styled(SubInfo)`
  display: flex;
  .post-subInfo {
    margin-right: 0.5rem;
    background-color: lightgray;
    border-radius: 5px;
    width: 80px;
    height: 16px;
  }
`;

const SkeltonPostItem = () => {
  return (
    <SkeltonPostItemBlock>
      <div className="post-title"></div>
      <SkeltonSubInfo>
        <div className="post-subInfo"></div>
        <div className="post-subInfo"></div>
      </SkeltonSubInfo>
      <div className="post-tagList">
        <div className="post-tag"></div>
        <div className="post-tag"></div>
        <div className="post-tag"></div>
      </div>

      <div className="post-body"></div>
    </SkeltonPostItemBlock>
  );
};

const SkeltonPostList = () => {
  return (
    <Responsive>
      <SkeltonPostContainer>
        <SkeltonPostItem />
        <SkeltonPostItem />
        <SkeltonPostItem />
      </SkeltonPostContainer>
    </Responsive>
  );
};

export default SkeltonPostList;
