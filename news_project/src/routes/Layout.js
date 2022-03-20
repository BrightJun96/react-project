import React from "react";
import { Outlet } from "react-router-dom";
import Category from "../components/Category";
const Layout = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>News Project</h1>
      <Category />
      <form>
        <input />
        <button>Search</button>
      </form>
      <Outlet />
    </div>
  );
};

export default Layout;
