import React from "react";
import { Outlet } from "react-router-dom";
import ActiveLink from "../components/ActiveLink";
const Layout = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>News Project</h1>
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
          <li>
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
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
