import React from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const naviagte = useNavigate();
  return (
    <>
      <LoginForm />
      <button onClick={() => naviagte("/signup")}>Sign-up</button>
    </>
  );
};

export default Login;
