import React from "react";

import styled from "styled-components";

const TextStyle = styled.h2`
  @media only screen and (max-width: 920px) {
    & {
      display: none;
      position: absolute;
    }
  }

  a {
    font-style: normal;
    font-weight: 700;
    font-size: 3vh;
    line-height: 30px;
    color: #ffffff;
    text-shadow: 0px 0px 32px #d3fc00;
    writing-mode: vertical-rl;
    height: -webkit-fill-available;
    text-orientation: upright;
    margin: 40px 0 0 40px;
    position: absolute;
    transition: 0.3s !important;
    top: 0;
    min-width: 2vw;
    /* letter-spacing: -2px; */
  }
  a:hover {
    text-shadow: 0px 0px 24px #d3fc00;
    transform: scale(100%);
    line-height: 10px;
  }
`;
function SideLineText() {
  return (
    <TextStyle>
      <a href="#home">Курсы программирования</a>
    </TextStyle>
  );
}

export default SideLineText;
