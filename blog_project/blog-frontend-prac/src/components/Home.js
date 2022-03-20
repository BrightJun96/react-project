import React from "react";
import styled from "styled-components";
import oc from "open-color";
import { Button } from "./AuthForm";
import { Link } from "react-router-dom";
import { logout } from "../lib/authAPI";

// 202203221 errorUI generating & put login state on localStorage & implement logout

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  background-color: ${oc.gray[2]};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 4rem;
`;

const LogoBox = styled.h1`
  font-weight: 600;
`;

const AuthBox = styled.div`
  display: flex;
  align-items: center;
`;

const HomeButton = styled(Button)`
  width: 100px;
  height: 50px;
  margin-left: 2rem;
`;

// logout이 되기전에 로그인 페이지로 간다.
// user state가 남아있기 때문에 다시 로그인 페이지로 간다.
// 하지만 로그인 페이지로 갈 때에는 user state는 초기화가 되기 때문에 userError가 발생한다.

const Home = ({ username, logoutUser }) => {
  console.log(username);
  return (
    <HeaderContainer>
      <Header>
        <LogoBox>Jevelop</LogoBox>

        <AuthBox>
          {username && <h2 className="username">{username}</h2>}
          {username === undefined ? (
            <Link to="/login">
              <HomeButton>로그인</HomeButton>
            </Link>
          ) : (
            <Link to="/login">
              <HomeButton onClick={logoutUser}>로그아웃</HomeButton>
            </Link>
          )}
        </AuthBox>
      </Header>
    </HeaderContainer>
  );
};

export default Home;
