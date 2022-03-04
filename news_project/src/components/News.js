import React from "react";

const News = ({ article }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "700px",
        height: "300px",
        marginBottom: "1rem",
      }}
    >
      <img src={article.urlToImage} alt="img" style={{ width: "250px" }} />
      <div style={{ width: "400px", marginLeft: "1rem" }}>
        <h3>
          <a href={article.url} target="_blank" rel="noreferrer noopener">
            {article.title}
          </a>
        </h3>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default News;
