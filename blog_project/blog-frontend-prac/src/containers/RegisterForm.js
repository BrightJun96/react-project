import React, { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch, useSelector } from "react-redux";
import {
  changePasswordInput,
  changeUserInput,
  changePasswordConfirmInput,
  initInput,
  changeErrorText,
} from "./../module/input";
import { checkUser } from "./../module/user";
import { useNavigate } from "react-router";
import { registerUser } from "./../module/register";

const RegisterForm = () => {
  const dispatch = useDispatch();

  // input state
  const { username, password, passwordConfirm, errorText } = useSelector(
    ({ inputReducer }) => ({
      username: inputReducer.username,
      password: inputReducer.password,
      passwordConfirm: inputReducer.passwordConfirm,
      errorText: inputReducer.errorText,
    })
  );

  // register state

  const { auth, authError } = useSelector(({ registerReducer }) => ({
    auth: registerReducer.auth,
    authError: registerReducer.authError,
  }));

  // user state

  const { user, userError } = useSelector(({ userReducer }) => ({
    user: userReducer.user,
    userError: userReducer.user,
  }));

  // errortext state

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

    const inputEmpty = [username, password, passwordConfirm].includes("");
    if (inputEmpty) {
      dispatch(changeErrorText("모든 정보를 입력해주세요."));
      return;
    }

    if (password !== passwordConfirm) {
      dispatch(changeErrorText("비밀번호가 다릅니다."));
      return; // 뒤에 코드가 진행되지 않도록 끝내줌.
    }

    dispatch(registerUser({ username, password }));
  };

  // 회원가입 성공 및 실패시 메시지
  useEffect(() => {
    if (auth) {
      //auth가 있으면 해당 user를 check해주자

      dispatch(checkUser());

      console.log("회원가입 성공!");
      console.log(auth);
    }
    if (authError) {
      console.log("회원가입 실패ㅠㅠ");
      console.log(authError);
    }

    if (authError && authError.response.status === 409) {
      // 이때는 authError가 없으니깐 안됨.
      dispatch(changeErrorText("이미 있는 계정입니다"));
    }
  }, [auth, authError, dispatch]);

  // user check
  // check됬으면 home으로
  const naviagte = useNavigate();

  useEffect(() => {
    if (user) {
      console.log("Check user!");
      console.log(user);
      localStorage.setItem("username", user.username);

      alert("환영합니다!");
      naviagte("/");
    }
  }, [user, naviagte]);

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
      auth={auth}
      authError={authError}
      errorText={errorText}
    />
  );
};

export default RegisterForm;
