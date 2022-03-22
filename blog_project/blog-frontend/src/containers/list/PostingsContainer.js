import React from "react";
import Postings from "./../../componenets/list/Postings";
import * as writeAPI from "./../../lib/api/write";

const PostingsContainer = () => {
  writeAPI
    .list()
    .then((response) => console.log(response))
    .catch((e) => console.log(e));
  return <Postings />;
};

export default PostingsContainer;
