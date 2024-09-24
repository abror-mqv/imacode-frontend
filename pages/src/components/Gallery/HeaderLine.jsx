import React from "react";
import styled from "styled-components";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import InstagramIcon from "@mui/icons-material/Instagram";

const StyledHeaderLine = styled.header`
  @media only screen and (max-width: 920px) {
    margin-top: 2vh;
    margin-bottom: 1vh;
    width: 94vw !important;
    font-size: 4vw !important;
    margin-left: 3vw !important;
    max-height: 4vh !important;
    display: flex;
    justify-content: space-between;
    gap: 0 !important;
  }
  max-height: 120px;
  width: max-content;
  height: 5vh !important;
  box-shadow: 3px 3px 5px 4px #000000, -3px -3px 9px 0.5px #ffffff;
  background: rgb(200 200 200 / 36%) !important;
  box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important;
  border-radius: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  margin-left: 8%;
  margin-top: 2%;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4vw;
  line-height: 31px;
  padding: 0 32px 0 32px;
  text-align: start;
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`;

function HeaderLine() {
  return (
    <StyledHeaderLine>
      <Link className="toHome" href="../">
        <p>
          <HomeIcon sx={{ color: "#ffffff" }} />
          На главную
        </p>
      </Link>
      <Link className="toGram" href="https://www.instagram.com/academy_nefely/">
        <p>
          Инстаграм
          <InstagramIcon sx={{ color: "#ffffff" }} />
        </p>
      </Link>
    </StyledHeaderLine>
  );
}

export default HeaderLine;
