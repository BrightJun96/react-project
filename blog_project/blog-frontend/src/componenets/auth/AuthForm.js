import React from "react";
import { Link } from "react-router-dom";
import Button from "./../common/Button";
import {
  AuthFormBlock,
  ErrorMessage,
  StyledInput,
  Footer,
} from "./styled/styledAuthForm";

const textMap = { login: "로그인", register: "회원가입" };

const AuthForm = ({ type, form, onChange, onSubmit, error, errorText }) => {
  const text = textMap[type];

  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput
          autoComplete="username"
          name="username" // 각 input을 가져오기위한 name
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={form.password}
          onChange={onChange}
        />
        {type === "register" && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            value={form.passwordConfirm}
            onChange={onChange}
          />
        )}
        {errorText && <ErrorMessage>{errorText}</ErrorMessage>}
        <Button hasTopMargin fullWidth cyan>
          {text}
        </Button>
      </form>
      <Footer>
        {type === "login" ? (
          <Link to="/register">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </Footer>
    </AuthFormBlock>
  );
};

export default AuthForm;
