import styled from "styled-components";

export const Menu = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 15vh;
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
  h2 {
    @media (max-width: 350px) {
      font-size: 18px;
    }
  }
  ul {
    font-size: 20px;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    @media (max-width: 350px) {
      font-size: 16px;
    }
  }

  ul li {
    writing-mode: vertical-rl;

    list-style: none;

    padding: 0 3px;
  }
`;

export const Items = styled.div`
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

export const Item = styled.div`
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
