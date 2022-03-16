import React from "react";
import AuthTemplate from "../componenets/auth/AuthTemplate";
import AuthForm from "../componenets/auth/AuthForm";

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
