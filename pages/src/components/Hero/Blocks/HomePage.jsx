import React from "react";
import styled from "styled-components";
import Bolts from "./Bolts/Bolts";

import SlideNextButton from "./SwipeCoursesButton";

const HomeStyle = styled.article`
  display: flex;
  justify-content: space-between;
  .Plate {
    width: 40vh;
  }
  .YellowPapper {
    display: none;
  }
  .AverageZp {
    display: none;
  }
  @media only screen and (max-width: 920px) {
    
    & {
      width: 100%;
      display: flex;
      justify-content: center;
      div {
        width: 92%;
        height: 79vh;
      }
    }

    h2,
    h5 {
      display: none !important;
      position: absolute;
    }
    .MainDiv {
      width: 90vw !important;
      margin-left: 0 !important;
      margin-top: 2vh !important;
      background: rgb(200 200 200 / 26%) !important;
      /* box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important; */
      box-shadow: none !important;
      height: 75vh !important;
    }
    /* img {
      display: none;
    } */
    h1 {
      font-size: 6.5vw !important;
      line-height: 4vh !important;
      span {
        font-size: 7.8vw;
        /* color: #d3fc00; */
      }
    }
    .YellowPapper {
      display: block;
      color: #000000;
      width: 120vw;
      margin: 2vw;
      padding: 2.2vh 21vw;
      text-align: center;
      font-size: 5vw;
      background: #d3fc00;
      transform: rotate(-5deg);
      height: fit-content;
    }
    h4 {
      width: 90% !important;
    }
    .AverageZp {
      display: block;
      width: 80% !important;
      line-height: 4vh !important;
      span {
        color: #d3fc00;
        font-size: 3vh !important;
      }
    }
    button {
      font-size: 4vw !important;
      letter-spacing: 0.1vw !important;
      padding: 4vw !important;
      margin-top: 10vh !important;
    } 
    .MainHero{
      display: flex;
      flex-direction: column;
      .ImgParent{
        margin-top: 28%;
        text-align: center !important;
        align-items: center !important;
        justify-content: center !important;
        img{
          width: 100% !important;
        }
      }
      h1{
        font-size: 8vw !important;
        line-height: normal !important;
        text-shadow: -1px -1px 0px #FF003C, 1px 1px 0px #00F0FF !important;
        margin-top: 45px !important;
        span{
          font-size: 18vw !important;
        }
        p{
          /* margin-top: 4vh !important; */
          font-size: 8vw !important;
        }
      }
    }
  }
  div {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: start;

    h2 {
      font-family: "Jura";
      font-style: normal;
      font-weight: 700;
      font-size: 3vw;
      line-height: 66px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #d3fc00;
      margin-left: 8%;
      margin-top: 3vh;
    }
    h5 {
      display: flex;
      justify-content: center;
      align-items: baseline;
      justify-items: auto;
      break-inside: avoid;
      width: auto;
      overflow-x: auto;
      line-break: auto;
      margin-left: 8%;
    }
    .MainDiv {
      background: rgba(116, 116, 116, 0.1);

      /* background: linear-gradient(145deg, #cacaca64, #f0f0f074); */
      box-shadow: -6px -6px 33px -18px #ffffff, 25px 25px 50px -9px #000000;

      border-radius: 19px;
      margin-top: 4vh;
      padding: 4vh 0;
      width: 44vw;
      margin-left: 8%;
    
      backdrop-filter: blur(7px);
      background-blend-mode: overlay;
      h1 {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 2.6vw;
        line-height: 3vw;
        text-align: center;
        color: #ffffff;
        text-shadow: 0px 0px 63px #000000;
        width: 80%;
        z-index: 999;
      }
      p {
        font-family: "Jura";
        font-style: normal;
        font-weight: 700;
        font-size: 1.2vw;
        line-height: 28px;
        text-align: center;
        color: rgba(255, 255, 255, 0.76);
        margin-top: 3vh;
        display: flex;
        z-index: 999;
        justify-content: center !important;
      }
      button {
        background: linear-gradient(273.14deg, #d3fc00 27.24%, #fcf200 103.71%);
        box-shadow: 6px 6px 12px #000000,
          -3px -3px 14px -3px rgba(255, 255, 255, 0.66);
        border-radius: 6px;
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 1.8vw;

        letter-spacing: 0.14em;
        color: #010101;
        margin-top: 3vh;
        padding: 10px 25px 10px 25px;
        text-transform: uppercase;
        width: 80%;
        cursor: pointer;
        z-index: 99999;
        transition: 0.2s;

        animation-timing-function: ease-in-out;
        -webkit-animation-timing-function: ease-in-out;
      }
      button:hover {
        box-shadow: 6px 6px 12px #000000, -3px -3px 14px -3px rgb(255, 255, 255);
        /* transform: scale(102%); */
        width: 86%;
      }
      button:active {
        transform: scale(90%);
      }
      h4 {
        font-family: "Jura";
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;

        text-align: center;
        width: 22vw;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 3vh;
        justify-content: center;
        z-index: 999;
        span {
          font-family: "Jura";
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          line-height: 24px;

          color: #dbfa01;
          z-index: 999;
        }
      }
    }
    .Line {
      width: 256px;
      height: 2px;
      background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(211, 252, 0, 0.05) 0%,
        #d3fc00 55.21%,
        rgba(211, 252, 0, 0.05) 100%
      );
    }
    
  }
  .MainHero{
      /* background-color: red; */

      h1{
        margin-top: 165px;
        font-size: 114px;
        color: #000000;
        text-shadow: -2px -2px 0px #FF003C, 2px 2px 0px #00F0FF;
        text-transform: uppercase;
        p{
          font-size: 72px;
          text-transform: none;
        }
      }
      .ImgParent{
      
        display: flex;
        justify-content: flex-end;
align-items: flex-end ;
        .Logo{
        width: 12%;
        /* position: fixed; */
        /* position: absolute; */
        /* left: -80px; */
        /* margin-top: -102px;
      margin-left: -6%;
      margin-bottom: -100px; */
      } 
      }
      
  }
  
  
  
  
`;
function HomePage() {
  return (
    <HomeStyle>
      <div className="MainHero">

        <h1>
          <span>
          Курсы
          </span> 
          <br />
          программирования
          
          <p>
            В Бишкеке
          </p>
        </h1>
        <p className="ImgParent"><img src="/media/imacode_logo.webp" alt="Imacode" className="Logo" /></p>

      </div>

    </HomeStyle>
  );
}

export default HomePage;
