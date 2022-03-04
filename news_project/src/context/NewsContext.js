// 상태관리가 복잡해질경우 사용하기

import React, { createContext, useState } from "react";
export const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [value, setValue] = useState(null);
  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    setValue(data.articles);
  }

  return (
    <NewsContext.Provider value={{ value, fetchData }}>
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContextProvider;
