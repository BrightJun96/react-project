import React from "react";
import { useParams } from "react-router-dom";
import { contents } from "../utilities/contents";

const HotPlace = () => {
  const { hotplace } = useParams();
  console.log(hotplace);

  return <div></div>;
};

export default HotPlace;
