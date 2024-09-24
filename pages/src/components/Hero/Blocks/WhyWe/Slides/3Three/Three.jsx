import React from "react";
import styled from "styled-components";

import Micro from "./path0.webp";

const StyledThree = styled.article`
  @media only screen and (max-width: 920px) {
    & {
      display: flex;
      justify-content: center;
      gap: 3.5vh;
      .Flexed {
        img {
          height: 18vh !important;
        }
      }
      font-size: 2.2vh;
      line-height: 2.6vh !important;
      span {
        font-size: 4vh !important;
      }
    }
  }
  width: 100%;
  height: 100%;
  padding: 2.8vh;
  font-style: normal;
  /* font-weight: bold; */
  font-size: 2.6vh;
  line-height: 3.5vh;

  color: #000000;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 5.5vh;

  .Micro {
    width: 12.5vh;
  }
  .Flexed {
    display: flex;
    gap: 4vh;
    p {
      width: 66%;
      br {
        margin-top: 1vh;
      }
    }
    img{
      width: 30%;
    }
  }
  span {
    color: #d3fc00;
    font-size: 6vh;
    margin: 0 1vh;
  }
  .Sex {
    width: 100%;
    margin: 0 auto;
  }
  .Ended {
    display: flex;
    justify-content: flex-end;
    padding-left: 30%;
    margin-top: -2vh;
  }
  .Centered {
    display: flex;
    /* justify-content: center; */
  }
`;

function Three() {
  return (
    <StyledThree>
      <p className="Flexed">
        <p>
          Веб-разработка, программирование и дизайн — это не просто востребованные профессии, но и возможность получения высоких доходов.

        </p>
        <img src="media/career-choice.png" alt="" />
      </p>
      <p className="Sex">
        Наши курсы помогут вам получить те знания и навыки, которые открывают двери в мир IT, где вас ждут привлекательные зарплаты и перспективы.
      </p>
    </StyledThree>
  );
}

export default Three;
