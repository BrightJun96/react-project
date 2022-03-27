import styled from "styled-components";

export const CardsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: 0 auto;

  @media all and (max-width: 1500px) {
    width: 85%;
  }

  @media all and (max-width: 0500px) {
    width: 100%;
  }
`;

export const CardBox = styled.div`
  cursor: pointer;
  width: 21%;
  height: 400px;
  margin: 2%;
  border-radius: 20px;
  color: #ffffff;
  background-color: #4f971f;
  box-shadow: 3px 3px 8px gray;
  overflow: hidden;
  &:hover {
    transform: translate(0, -10px);
    opacity: 0.6;
  }

  h1 {
    text-align: center;
    font-size: 28px;
  }

  h2 {
    padding: 10;
    text-align: center;
  }

  @media all and (max-width: 1000px) {
    width: 46%;
  }

  @media all and (max-width: 500px) {
    width: 98%;
  }
`;

export const Image = styled.div`
  height: 250px;
  background-image: url(${(props) => props.imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px) {
    background-size: 100% 100%;
  }
`;

export const Temp = styled.div`
  height: 250px;
  background-color: ${(props) => props.color};
  background-repeat: no-repeat;
  background-size: cover;
  @media all and (max-width: 500px) {
    background-size: 100% 100%;
  }
`;
