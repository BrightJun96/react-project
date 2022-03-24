import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { read } from "./../../lib/api/write";

const PostingContainer = () => {
  const params = useParams();
  const { username, postId } = params;
  // 해당 유저 포스팅에 대한 정보를 가져와줘야함.
  // state에 담아야함.
  console.log(params);

  useEffect(() => {
    read(postId)
      .then((response) => console.log(response))
      .catch((e) => console.log(e)); //404가 나오는 이유는? 서버에서 status404를 설정해주지 않았는데 404가 나온다라는 것은...
  }, [postId]);

  return <div>Posting</div>;
};

export default PostingContainer;
