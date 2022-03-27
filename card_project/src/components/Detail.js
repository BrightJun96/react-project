import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneBank } from "react-icons/ai";
import { DetailBox } from "../styles/styledDetail";
const Detail = ({ content }) => {
  const { title, imagePath } = content;
  const { location, description } = content.detail;

  return (
    <DetailBox>
      <h1>{title}</h1>
      <img src={imagePath} alt="사진" />
      <h2>위치 : {location}</h2>
      <p>{description}</p>
      <Link to="/" className="gotohome">
        <AiTwotoneBank />
      </Link>
    </DetailBox>
  );
};

export default Detail;
