import React from "react";
import Responsive from "../../common/Responsive";
import { PostHead, PostViewerBlock, SubInfo } from "./styledPostViewer";
import styled from "styled-components";

const SkeltonPostViewer = () => {
  const SkeltonPostViewerBlock = styled(PostViewerBlock)`
    .post-body {
      width: 100%;
      height: 250px;
      background-color: lightgray;
      border-radius: 5px;
    }
  `;

  const SkeltonPostHead = styled(PostHead)`
    .post-title {
      width: 100%;
      background-color: lightgray;
      height: 72px;
      border-radius: 5px;
    }

    .post-tagList {
      display: flex;
      margin-top: 0.5rem;
      .post-tag {
        width: 40px;
        height: 16px;
        margin-right: 0.5rem;
        background-color: lightgray;
        border-radius: 5px;
      }
    }
  `;

  const SkeltonSubInfo = styled(SubInfo)`
    display: flex;
    div {
      background-color: lightgray;
      width: 80px;
      height: 16px;
      border-radius: 5px;
      margin-right: 1rem;
    }
  `;

  return (
    <Responsive>
      <SkeltonPostViewerBlock>
        <SkeltonPostHead>
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
        </SkeltonPostHead>
        <div className="post-body"></div>
      </SkeltonPostViewerBlock>
    </Responsive>
  );
};
export default SkeltonPostViewer;
