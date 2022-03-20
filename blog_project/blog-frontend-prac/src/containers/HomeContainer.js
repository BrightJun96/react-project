import React from "react";
import Home from "../components/Home";
import { logout } from "../lib/authAPI";
import { initUser } from "../module/user";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
// test
const HomeContainer = () => {
  const username = useSelector(({ userReducer }) => userReducer.user.username);

  const dispatch = useDispatch();
  const logoutUser = () => {
    // user , auth state 초기화
    dispatch(initUser());
    logout();
    localStorage.removeItem("username");
  };

  return <Home username={username} logoutUser={logoutUser} />;
};

export default HomeContainer;
