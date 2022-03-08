import styled from "styled-components";

export const Title = styled.div`
  min-height: 150px;
`;

export const Button = styled.button`
  @font-face {
    font-family: "twaysky";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_tway@1.0/twaysky.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  width: 600px;
  height: 80px;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  padding: 0 20px;
  line-height: 1.5rem;
  color: black;
  box-shadow: 3px 3px 5px grey;
  background-color: #dc9146;
  &:hover {
    background-color: #d2691e;
    transition: all ease 0.3s;
  }
  margin: 20px;
  font-family: "twaysky";
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    height: 120px;
    font-size: 0.9rem;
    width: 85%;
  }
`;
