import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import {
  changePasswordInput,
  changeUserInput,
  changePasswordConfirmInput,
  initInput,
} from "./../module/input";
import { checkUser } from "../module/user";
import { useNavigate } from "react-router";
import { loginUser } from "../module/register";

const LoginForm = () => {
  const dispatch = useDispatch();

  // input state
  const { username, password, passwordConfirm } = useSelector(
    ({ inputReducer }) => ({
      // 해당 state는 reducer의 이름 조회해야한다.
      username: inputReducer.username,
      password: inputReducer.password,
      passwordConfirm: inputReducer.passwordConfirm,
    })
  );

  // register state

  const { auth, authError } = useSelector(({ registerReducer }) => ({
    auth: registerReducer.auth,
    authError: registerReducer.authError,
  }));

  const { user, userError } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
    userError: userReducer.userError,
  }));

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
    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (auth) {
      console.log("로그인 성공!");
      console.log(auth);

      dispatch(checkUser());
    }

    if (authError) {
      console.log("로그인 실패");
      console.log(authError);
    }
  }, [auth, authError, dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // 써줘야할 에러
  // 계정이 없습니다.
  // 비밀번호가 틀립니다.

  return (
    <AuthForm
      username={username}
      password={password}
      passwordConfirm={passwordConfirm}
      usernameChange={usernameChange}
      passwordChange={passwordChange}
      passwordConfirmChange={passwordConfirmChange}
      type="login"
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
