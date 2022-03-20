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
        {/* <li>
          <ActiveLink to="all">All</ActiveLink>
        </li>
        <li>
          <ActiveLink to="business">Business</ActiveLink>
        </li>
        <li>
          <ActiveLink to="entertainment">Entertainment</ActiveLink>
        </li>
        <li>
          <ActiveLink to="health">Health</ActiveLink>
        </li>
        <li>
          <ActiveLink to="science">Science</ActiveLink>
        </li>
        <li>
          <ActiveLink to="sports">Sports</ActiveLink>
        </li>
        <li>
          <ActiveLink to="technology">Technology</ActiveLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Category;
