import React from "react";
import styled from "styled-components";

import Kaza from "./kaza.webp";
import Goal from "./goal.webp";

const StyledFour = styled.article`
  @media only screen and (max-width: 920px) {
    & {
      display: flex;
      justify-content: center !important;
      gap: 6vh;
      padding: 2vh !important;
      align-items: center !important;
      .Flexed {
        img {
          /* height: 18vw !important; */
        }
        display: flex;
        flex-wrap: wrap;
        gap: 3vh !important;
      }
      .Flexedd {
        img {
          /* height: 18vw !important; */
        }
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        gap: 3vh !important;
      }
      font-size: 1.9vh;
      line-height: 2.8vh !important;
      span {
        font-size: 2.2vh !important;
      }
      p {
        text-align: center;
        img{
          margin: 0 auto;
          height: 40%;
          width: 30%;
        }
      }
    }
  }
  width: 100%;
  height: 100%;
  padding: 6.8vh;
  font-style: normal;
  /* font-weight: 400; */
  font-size: 2.6vh;
  line-height: 3.5vh;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 6.5vh;
  img {
    width: 16vh;
  }
  .Flexed {
    display: flex;
    justify-content: center;
    gap: 6vh;
  }
  .Flexedd {
    display: flex;
    justify-content: center;
    gap: 6vh;
  }
  span {
    color: #d3fc00;
    font-size: 3vh;
  }
`;

function Four() {
  return (
    <StyledFour>
      <p className="Flexed">
        <p>
          Мы гордимся тем, что наши курсы лицензированы Министерством образования КР.
        </p>
        <img src="media/certificate.png" alt="Сертификат" />
      </p>
      <p className="Flexedd">
        По окончании обучения каждый студент получает диплом, который подтверждает его квалификацию и открывает новые карьерные возможности.
      </p>
    </StyledFour>
  );
}

export default Four;
