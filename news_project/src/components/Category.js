import React from "react";
import ActiveLink from "./ActiveLink";

const Category = () => {
  const categories = [
    "all",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <nav style={{}}>
      <ul
        style={{
          display: "flex",
          width: "700px",
          justifyContent: "space-between",
          listStyle: "none",
          margin: "1rem auto",
        }}
      >
        {categories.map((category) => (
          <li key={category}>
            <ActiveLink to={category}>{category}</ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Category;
