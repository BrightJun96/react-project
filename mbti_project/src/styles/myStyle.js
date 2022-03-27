import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  min-height: 80px;
  font-size: 0.9rem;
  border-radius: 20px;
  border: none;
  outline: none;
  padding: 0 20px;
  line-height: 1.5rem;
  box-shadow: 2px 2px 3px grey;
  background-color: #dc9146;
  &:hover {
    background-color: #d2691e;
    transition: all ease 0.3s;
  }
  cursor: pointer;
`;
