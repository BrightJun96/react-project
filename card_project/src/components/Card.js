import React from "react";
import { Link } from "react-router-dom";
import { Item, Image } from "./styledComp";
const Card = ({ content }) => {
  return (
    <Item>
      <Link to={content.path}>
        {/*<Image imagePath={content.imagePath}></Image>*/}
        <Image imagePath={content.imagePath} />
      </Link>
      <h1 style={{ textAlign: "center", fontSize: "28px" }}>{content.title}</h1>
      <h2 style={{ padding: 10, textAlign: "center" }}> {content.character}</h2>
    </Item>
  );
};

export default Card;
