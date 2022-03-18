import React from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import {
  changePasswordInput,
  changeUserInput,
  changePasswordConfirmInput,
  initInput,
} from "./../module/auth";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { username, password, passwordConfirm } = useSelector(
    ({ inputReducer }) => ({
      // 해당 state는 reducer의 이름 조회해야한다.
      username: inputReducer.username,
      password: inputReducer.password,
      passwordConfirm: inputReducer.passwordConfirm,
    })
  );

  function usernameChange(e) {
    dispatch(changeUserInput(e.target.value));
  }

  function passwordChange(e) {
    dispatch(changePasswordInput(e.target.value));
  }

  function passwordConfirmChange(e) {
    dispatch(changePasswordConfirmInput(e.target.value));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(initInput());
  };

  return (
    <AuthForm
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      usernameChange={usernameChange}
      passwordChange={passwordChange}
      passwordConfirmChange={passwordConfirmChange}
      type="register"
      onSubmit={onSubmit}
    />
  );
};

export default RegisterForm;
