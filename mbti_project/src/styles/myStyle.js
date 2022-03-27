import styled from "styled-components";

export const Title = styled.div`
  min-height: 150px;
`;

export const Button = styled.button`
  width: 300px;
  min-height: 80px;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  line-height: 1.5rem;
  box-shadow: 3px 3px 5px grey;
  background-color: #dc9146;
  &:hover {
    background-color: #d2691e;
    transition: all ease 0.3s;
  }
  margin: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 450px) {
    font-size: 0.9rem;
  }
`;
