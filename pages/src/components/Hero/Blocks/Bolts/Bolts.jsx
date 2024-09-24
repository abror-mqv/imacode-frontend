import React from "react";
import styled from "styled-components";
import Bolt from "./bolt.png";

const StyledBolts = styled.div`

  /* Never code after a bottle of bear */
  @media screen and (max-height: 1995px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(55% + 24px);
    margin-top: -5vw;
  }
  @media screen and (max-height: 1760px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(59% + 24px);
    margin-top: -5vw;
  }
  @media screen and (max-height: 1660px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(59% + 24px);
    margin-top: -4vw;
  }
  @media screen and (max-height: 1460px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(62% + 24px);
    margin-top: -3.5vw;
  }
  
  @media screen and (max-height: 1110px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(67% + 24px);
    margin-top: -4vw;
  }
  @media screen and (max-height: 1110px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(67% + 24px);
    margin-top: -4vw;
  }
  @media screen and (max-height: 1110px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(67% + 24px);
    margin-top: -4vw;
  }
  @media screen and (max-height: 1024px) {
    position: absolute;
    width: calc(16px + 40vw);
    height: calc(74% + 24px);
    margin-top: -5vw;
  }
  @media screen and (max-height: 840px) {
    position: absolute;
    width: calc(-4px + 42vw);
    height: calc(75% + 24px);
    margin-top: -3.2vw;
  }


  position: absolute;
  width: calc(8px + 39vw);
  height: calc(73% + 30px);
  margin-top: -4vw;
  .Bolt1 {
    width: 32px;
    height: 32px;
    position: absolute;
    top: 6%;
    left: 1vw;
    animation-name: spin;
    animation-duration: 8000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(720deg);
    }
    66% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
  .Bolt2 {
    width: 32px;
    position: absolute;
    height: 32px;
    bottom: 6%;
    left: 1vw;
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  .Bolt3 {
    width: 32px;
    position: absolute;
    height: 32px;
    top: 6%;
    right: 1vw;
    animation-name: spin;
    animation-duration: 10000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
  .Bolt4 {
    width: 32px;
    position: absolute;
    height: 32px;
    bottom: 6%;
    right: 1vw;

    animation-name: spin;
    animation-duration: 6000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;

    animation-timing-function: ease-in-out;
    -webkit-animation-timing-function: ease-in-out;
  }
`;

function Bolts() {
  return (
    <StyledBolts>
      <img className="Bolt1" src={Bolt.src} alt="Запчасть от телефона Бишкек" />
      <img className="Bolt2" src={Bolt.src} alt="Запчасть от телефона Бишкек" />
      <img className="Bolt3" src={Bolt.src} alt="Запчасть от телефона Бишкек" />
      <img className="Bolt4" src={Bolt.src} alt="Запчасть от телефона Бишкек" />
    </StyledBolts>
  );
}

export default Bolts;
