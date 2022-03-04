import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      style={({ isActive }) =>
        isActive
          ? { color: "red", fontSize: "1.2rem" }
          : { color: "black", fontSize: "1.2rem", textDecoration: "none" }
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
