import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthForm from "../../componenets/auth/AuthForm";
import { authAuthSelector, register } from "../../modules/auth/authAuth";
import {
  authRegisterTextSelector,
  changeField,
  initializeForm,
  changeErrorText,
} from "../../modules/auth/authText";
import { check } from "../../modules/user";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(({ user }) => ({
    user: user.user,
  }));

  const { auth, authError } = useSelector(authAuthSelector);

  const { form, errorText } = useSelector(authRegisterTextSelector);

  // 인풋 변경 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(changeField({ form: "register", key: name, value }));
  };

  // 폼 등록 핸들러
  const onSubmit = (e) => {
    e.preventDefault();

    const { username, password, passwordConfirm } = form;
    if ([username, password, passwordConfirm].includes("")) {
      dispatch(changeErrorText("빈 칸을 모두 입력하세요."));

      return;
    }

    if (password !== passwordConfirm) {
      dispatch(changeErrorText("비밀번호가 일치하지 않습니다."));

      dispatch(changeField({ form: "register", key: "password", value: "" }));
      dispatch(
        changeField({ form: "register", key: "passwordConfirm", value: "" })
      );
      return;
    }

    dispatch(register({ username, password }));
  };

  // 컴포넌트가 처음 렌더링될 때 form을 초기화함.
  useEffect(() => {
    dispatch(initializeForm("register"));
  }, [dispatch]);

  // 회원가입 성공/실패
  useEffect(() => {
    if (authError) {
      console.log(authError);

      if (authError.response.status === 409) {
        dispatch(changeErrorText("이미 존재하는 계정입니다."));
        return;
      }
    }
    if (auth) {
      console.log("회원가입 성공");
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  // user값 설정 확인
  useEffect(() => {
    if (user) {
      console.log("check API success");
      console.log(user);
    }
  }, [user]);

  const navigate = useNavigate();

  // 회원가입되면 홈으로 이동
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

  // 처음 페이지 mount됬을 때 errortext init
  useEffect(() => {
    dispatch(changeErrorText(""));
  }, []);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      errorText={errorText}
    />
  );
};

export default RegisterForm;
