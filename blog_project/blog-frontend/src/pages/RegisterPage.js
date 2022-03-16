import React from "react";
import AuthForm from "../componenets/auth/AuthForm";
import AuthTemplate from "../componenets/auth/AuthTemplate";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="register" />
    </AuthTemplate>
  );
};

export default RegisterPage;
