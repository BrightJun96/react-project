import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "../../componenets/auth/AuthForm";
import { check } from "../../modules/user";
import { changeField, initializeForm, login } from "./../../modules/auth";
import { useNavigate } from "react-router-dom";

// check => server state에 담긴 로그인 정보와 비교
const LoginForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  // 인풋 변경 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "login", key: name, value }));
  };

  // 폼 등록 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }));
  };
  // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
  useEffect(() => {
    dispatch(initializeForm("login"));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log("오류발생!");
      console.log(authError);
    }

    if (auth) {
      console.log("로그인 성공!");
      console.log(auth);
      dispatch(check());
    }
  }, [authError, auth, dispatch]);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }

    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (e) {
      console.log("localStorage is not working");
    }
  }, [user, navigate]);
  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default LoginForm;
