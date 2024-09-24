import React from "react";

import styled from "styled-components";
import Icon from "./icon.webp";
import Image from "next/image";

const OneStyled = styled.article`
  @media only screen and (max-width: 920px) {
    & {
      display: flex;
      justify-content: center;
      gap: 6vh;
      .Flexed {
        img {
          height: 30vw !important;
        }
      }
      font-size: 2.2vh;
      line-height: 2.8vh !important;
      span {
        font-size: 4vh !important;
      }
    }
  }
  width: 100%;
  height: 100%;
  padding: 2.5vh;
  font-style: normal;
  /* font-weight: bold; */
  font-size: 3vh;
  line-height: 4vh;
  color: black;
  display: flex;
  flex-direction: column;
  gap: 5vh;
  .One {
    width: 19vh;
    /* float: left; */
  }
  .Flexed {
    display: flex;
    justify-content: space-between;
    img{
      width: 40%;
    }
    div{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
  .FlexEnd {
    display: flex;
    justify-content: flex-end;
  }
  span {
    color: #000000;
    font-size: 4vh;
    margin: 0 1vh;
  }
`;

function One() {
  return (
    <OneStyled>
      <p className="Flexed">
        <div>
          <p>
            Обучение проходит <br/>6 раз в неделю:
          </p>
          <p>
            3 теоретических занятия и <br/>3 практические консультации.
          </p>
        </div>

        <Image src="/media/six.png" width={250} height={250}/>
      </p>


      <p className="FlexEnd">
        Мы уделяем особое внимание практике, чтобы каждый студент мог сразу применять полученные знания.
      </p>
      <p className="FlexEnd">
      </p>
    </OneStyled>
  );
}

export default One;
