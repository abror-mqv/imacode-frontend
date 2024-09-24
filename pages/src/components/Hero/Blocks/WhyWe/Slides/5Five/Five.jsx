import React from "react";
import styled from "styled-components";

import Money from "./money.webp";
import Team from "./team.webp";
import Image from "next/image";

const StyledFive = styled.article`
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
      font-size: 2.2vh;
      line-height: 2.8vh !important;
      span {
        font-size: 2.2vh !important;
      }
      p {
        text-align: center;
        img {
          margin: 0 auto;
          height: 50%;
          width: 30%;
        }
      }
    }
  }
  width: 100%;
  height: 100%;
  padding: 6.8vh;
  font-style: normal;
  /* font-weight: bold; */
  font-size: 2.8vh;
  line-height: 3.5vh;
  color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.5vh;
  img {
    width: 17vh;
  }
  .Flexed {
    display: flex;
    justify-content: center;
    gap: 6vh;
    align-items: flex-end;
  }
`;

function Five() {
  return (
    <StyledFive>
      <p className="Flexed">
        Наши курсы находятся в самом центре города, на пересечении улиц Московская/Шопокова.
        <Image src="/media/architecture-and-city.png" alt="Московская/Шопокова" width={160} height={160}/>
      </p>
      <p className="Flexed">
        Вам не придётся тратить много времени на дорогу, что делает обучение еще комфортнее.
      </p>
    </StyledFive>
  );
}

export default Five;
