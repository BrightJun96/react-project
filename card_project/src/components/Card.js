import React from "react";
import { useNavigate } from "react-router-dom";
import { CardBox } from "../styles/styledCards";
import { Image } from "./../styles/styledCards";
const Card = ({ content }) => {
  const navigate = useNavigate();
  return (
    <CardBox onClick={() => navigate(content.path)}>
      <Image imagePath={content.imagePath} />
      <h1>{content.title}</h1>
      <h2>{content.character}</h2>
    </CardBox>
  );
};

export default Card;
