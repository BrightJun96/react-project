import styled from "styled-components";

export const Navbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  cursor: pointer;

  box-sizing: border-box;
  padding: 0 2rem;
  font-size: 18px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #50c700;
  z-index: 100;
  font-weight: bold;
`;

export const Logo = styled.h2`
  &:hover {
    cursor: pointer;
    transition: all 0.2s ease-out;
    color: #1c3f05;
  }
  @media (max-width: 350px) {
    font-size: 18px;
  }
`;

export const Category = styled.ul`
  font-size: 20px;
  width: 30%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 350px) {
    font-size: 16px;
  }

  li {
    writing-mode: vertical-rl;
    font-size: 1.5rem;
    color: white;
    list-style: none;

    padding: 0 3px;

    &:hover {
      cursor: pointer;
      transition: all 0.2s ease-out;
      color: #1c3f05;
    }
  }
`;
