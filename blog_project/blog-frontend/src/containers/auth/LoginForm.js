import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../componenets/auth/AuthForm";
import { check } from "../../modules/user";
import {
  changeErrorText,
  changeField,
  initializeForm,
  login,
} from "./../../modules/auth";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { form, auth, authError, user, errorText } = useSelector(
    ({ auth, user }) => ({
      form: auth.login,
      auth: auth.auth,
      authError: auth.authError,
      user: user.user,
      errorText: auth.errorText,
    })
  );

  // 인풋 변경 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };

  // 폼 등록 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    if ([username, password].includes("")) {
      dispatch(changeErrorText("빈 칸을 입력해주세요"));
    }
    dispatch(login({ username, password }));
  };

  // 컴포넌트가 처음 렌더링될 때 form과 errortext를 초기화함.
  useEffect(() => {
    dispatch(initializeForm("login"));
    dispatch(changeErrorText(""));
  }, [dispatch]);

  // 로그인 성공 및 실패시 처리
  useEffect(() => {
    if (auth) {
      console.log("로그인 성공!");
      console.log(auth);
      dispatch(check()); // check => server state에 담긴 로그인 정보와 비교
    }

    if (authError?.response.status === 400) {
      console.log(authError);
      dispatch(changeErrorText("존재하지 않는 계정입니다."));
    }

    if (authError?.response.status === 401) {
      console.log(authError);
      dispatch(changeErrorText("비밀번호가 틀립니다."));
    }
  }, [authError, auth, dispatch]);

  // 로그인 성공한뒤 확인된 유저가 있다면 메인페이지로 이동
  useEffect(() => {
    if (user) {
      navigate("/");
      try {
        localStorage.setItem("user", JSON.stringify(user));
      } catch (e) {
        console.log("localStorage is not working");
      }
    }
  }, [user, navigate]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      errorText={errorText}
    />
  );
};

export default LoginForm;
