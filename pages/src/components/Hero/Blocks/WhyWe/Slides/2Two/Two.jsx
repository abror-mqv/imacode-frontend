import React from "react";
import styled from "styled-components";

import Lang from "./languages.webp";
import Time from "./timetable.webp";

import Image from "next/image";

const TwoStyled = styled.article`
  @media only screen and (max-width: 920px) {
    & {
      display: flex;
      justify-content: center;
      gap: 4vh;
      .Flexed {
        img {
          height: 30vw !important;
        }
      }
      font-size: 2.2vh;
      line-height: 2.6vh !important;
      span {
        font-size: 4vh !important;
      }
      .Last {
        img {
          display: none;
        }
      }
    }
  }
  width: 100%;
  height: 100%;
  padding: 2.8vh;
  font-style: normal;
  /* font-weight: bold; */
  font-size: 2.6vh;
  line-height: 4vh;

  color: black;
  display: flex;
  flex-direction: column;
  gap: 4vh;

  .Flexed {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 3vh;
    img{
      width: 40%;
    }
    gap: 2vh;
  }
  .FlexEnd {
    display: flex;
    justify-content: flex-end;
  }
  .Centered {
    text-align: center;
  }
  span {
    color: #d3fc00;
    font-size: 6vh;
    margin: 0 1vh;
  }
  .Lang {
    width: 15vh;
  }
  .Time {
    width: 16vh;
  }
  .Last {
    display: flex;
    justify-content: center;
    gap: 5vh;
    font-size: 2.4vh;
  }
`;
function Two() {
  return (
    <TwoStyled>
      <p className="Flexed">
      Мы разработали уникальную методику, которая позволяет нашим студентам освоить необходимые навыки всего за 2 месяца.
      <Image src="/media/speed.png" alt="ImaCode is fast" width={250} height={250} />
      </p>
      <p className="Wide">
      Это такой же объём знаний, который другие курсы предоставляют за бОльшее время, но вы экономите время и деньги.
      </p>
    </TwoStyled>
  );
}

export default Two;
