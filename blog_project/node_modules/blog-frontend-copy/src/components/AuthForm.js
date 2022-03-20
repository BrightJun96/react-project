import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { Link } from "react-router-dom";

// 전체 화면
const AuthContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${oc.gray[4]};

  display: flex;
  align-items: center;
  justify-content: center;

  .link-auth {
    color: ${oc.gray[6]};

    &:hover {
      color: ${oc.gray[5]};
    }
  }
`;

// 가운데 박스
const WhiteBox = styled.div`
  width: 500px;
  height: 450px;
  background-color: ${oc.gray[1]};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
`;

// 제출 폼
const FormBlock = styled.form`
  margin-bottom: 2rem;
`;

// Authentication Logo
const Logo = styled.h2`
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;

// Input
const InputBlock = styled.input`
  border: none;
  border-bottom: 1px solid ${oc.gray[5]};
  padding-bottom: 0.4rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  outline: none;
  width: 400px;
  background-color: inherit;
  &:focus {
    border-bottom: 1px solid ${oc.gray[8]};
  }
`;

// Button
const Button = styled.button`
  text-align: center;
  width: 400px;
  height: 50px;
  font-size: 1rem;
  font-weight: 800;
  background-color: ${oc.gray[7]};
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.5rem;
  &:hover {
    background-color: ${oc.gray[6]};
  }
`;

const AuthForm = ({
  type,
  username,
  password,
  passwordConfirm,
  usernameChange,
  passwordChange,
  passwordConfirmChange,
  onSubmit,
}) => {
  return (
    <AuthContainer>
      <WhiteBox>
        <Logo>Authentication</Logo>
        <FormBlock onSubmit={onSubmit}>
          <h2>{type === "register" ? "회원가입" : "로그인"}</h2>
          <div>
            <InputBlock
              placeholder="아이디"
              name="username"
              value={username}
              onChange={usernameChange}
              autoComplete="username"
            />
          </div>
          <div>
            <InputBlock
              placeholder="비밀번호"
              type="password"
              name="password"
              value={password}
              onChange={passwordChange}
              autoComplete="new-password" // 비밀번호 자동완성 기능 방지
            />
          </div>
          {type === "register" ? (
            <div>
              <InputBlock
                placeholder="비밀번호 확인"
                type="password"
                value={passwordConfirm}
                onChange={passwordConfirmChange}
                autoComplete="new-password"
              />
            </div>
          ) : null}
          <Button>{type === "register" ? "회원가입" : "로그인"}</Button>
        </FormBlock>
        {type === "register" ? (
          <Link to="/login" className="link-auth">
            로그인
          </Link>
        ) : (
          <Link to="/register" className="link-auth">
            회원가입
          </Link>
        )}
      </WhiteBox>
    </AuthContainer>
  );
};

export default AuthForm;
