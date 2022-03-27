import styled from "styled-components";

export const DetailBox = styled.div`
  height: 100vh;
  width: 50vw;
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h1 {
    color: #173304;
  }

  img {
    width: 50vw;
    height: 50vh;
    border-radius: 30px;
  }

  h2 {
    color: #285709;
  }

  p {
    font-size: 1.3rem;
    line-height: 150%;
    color: #163a00;
    text-align: left;
  }

  .gotohome {
    text-decoration: none;
    font-size: 3rem;
    position: fixed;
    color: #173304;

    left: 10px;
    bottom: 10px;

    &:hover {
      color: #2f7402;
      font-size: 4rem;
      transition: all 0.3s ease-out;
    }

    @media screen and (max-width: 900px) {
      .detail-container {
        width: 70vw;
      }

      .detail-container img {
        width: 100%;
      }
    }

    @media (max-width: 400px) {
      .detail-container {
        width: 65vw;
      }

      .detail-container .location {
        font-size: 1.1rem;
        text-align: left;
      }

      .detail-container .description {
        font-size: 1rem;
      }
    }
  }
`;
