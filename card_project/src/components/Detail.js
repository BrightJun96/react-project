import React from "react";
import { Link } from "react-router-dom";
import { AiTwotoneBank } from "react-icons/ai";
import "../styles/detail.css";
const Detail = ({ content }) => {
  const { title, imagePath } = content;
  const { location, description } = content.detail;

  return (
    <div className="detail-container">
      <h1 className="title">{title}</h1>
      <img src={imagePath} alt="사진" />

      <h2 className="location">위치 : {location}</h2>

      <p className="description">{description}</p>
      <div className="restaurant"></div>
      <Link to="/" className="gotohome">
        <AiTwotoneBank />
      </Link>
    </div>
  );
};

export default Detail;
