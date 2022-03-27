import styled from "styled-components";

export const TopButton = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
  font-size: 3.5rem;
  z-index: 101;
  color: #1d4403;

  &:hover {
    transition: all 0.3s ease-out;
    font-size: 4rem;
    color: #41a100;
  }
`;
