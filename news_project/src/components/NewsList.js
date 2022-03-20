import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "./NewsItem";

const NewsList = () => {
  const [value, setValue] = useState(null);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setValue(data.articles);
    } catch (e) {
      console.log(e);
    }
  }

  const { category } = useParams();
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

export default React.memo(NewsList);
