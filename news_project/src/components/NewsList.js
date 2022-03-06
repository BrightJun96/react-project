import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "./NewsItem";

const NewsList = () => {
  const [value, setValue] = useState(null);

  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setValue(data.articles);
  }

  // params에 따라 그에 맞는 네트워크요청
  const { category } = useParams();
  const result = category === "all" ? "" : `category=${category}&`;

  useEffect(() => {
    console.log("useEffect");
    fetchData(
      `https://newsapi.org/v2/top-headlines?country=kr&${result}apiKey=c1976fb1af424f54b11a305ae52a6b26`
    );
  }, [result]); //result가 바뀔때만 fetchData(setValue가 되니 리렌더링됨.)함수 호출
  //useEffect는 컴포넌트가 렌더링된뒤에 실행된다.
  // setvalue가 되면서 리렌더링된다.
  // params가 바뀐다.
  // params가 바뀌고 나서 이전 value값이 렌더링된 뒤에 useEffect가 실행되고 setValue로 리렌더링된다.
  // params가 바뀌면 컴포넌트가 리렌더링된다.

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
