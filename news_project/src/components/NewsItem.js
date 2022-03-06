import React from "react";

const NewsItem = ({ article }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "700px",
        marginBottom: "1rem",
        height: "300px",
      }}
    >
      <div style={{ width: "250px", height: "200px" }}>
        <img
          src={article.urlToImage}
          alt="img"
          style={{ width: "250px", height: "200px" }}
        />
      </div>
      <div style={{ width: "400px", marginLeft: "1rem" }}>
        <h3 style={{ marginTop: "0" }}>
          <a href={article.url} target="_blank" rel="noreferrer noopener">
            {article.title}
          </a>
        </h3>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
