import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "./News";

const NewsList = () => {
  const [value, setValue] = useState(null);
  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setValue(data.articles);
  }

  const params = useParams();
  const { category } = params;

  const result = category === "all" ? "" : `category=${category}&`;

  useEffect(() => {
    fetchData(
      `https://newsapi.org/v2/top-headlines?country=kr&${result}apiKey=c1976fb1af424f54b11a305ae52a6b26`
    );
  }, [result]);

  console.log(value);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {value &&
        value.map((article) => {
          return <News key={article.url} article={article} />;
        })}
    </div>
  );
};

export default NewsList;
