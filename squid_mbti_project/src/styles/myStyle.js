import styled from "styled-components";

export const Title = styled.div`
  min-height: 150px;
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  font-size: 18px;
  color: black;
  margin: 40px;
  border-radius: 20px;
  background-color: turquoise;
  box-shadow: 3px 3px 3px gray;
  &:hover {
    background-color: teal;
  }
  border: none;
  cursor: pointer;
`;
