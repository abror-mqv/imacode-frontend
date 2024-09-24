import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Join from "./add-friend.png";
import Price from "./Price.svg";

const StyledCard = styled.div`
  * {
    transition: 0.2s;
  }
  @media only screen and (max-width: 920px) {
    & {
      height: 70vh;
      width: 100%;
      .header {
        * {
          display: block;
        }
      }
      .Card {
        width: 90% !important;
        height: 60vh !important;
        box-shadow: none !important;
      }
    }
  }
  text-align: center;
  height: 56vh;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 3%;
  .WhiteH {
    font-family: "Days One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #ffffff;
  }
  .YellowH {
    font-family: "Days One";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    text-align: center;
    color: #d6fb01;
    margin-top: -1%;
  }

  .Card {
    .Image {
      width: 100%;      
    }
    transition: 0.2s;
    background: linear-gradient(
      273.14deg,
      rgba(211, 252, 0, 0.05) 27.24%,
      rgba(252, 242, 0, 0.05) 103.71%
    );
    box-shadow: 6px 6px 12px #000000,
      -3px -3px 14px -3px rgba(255, 255, 255, 0.66);
    max-height: 100% !important;
    width: 60%;
    border-radius: 6px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .CardParag {
      font-family: "Jura";
      font-style: normal;
      font-weight: 700;
      font-size: 90%;
      line-height: 17px;
      text-align: center;
      height: 26% !important;
      /* margin-top: -10%; */
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgba(255, 255, 255, 0.79);
      padding: 6%;
      span {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 19px;
        text-align: center;

        color: #e1f801;
      }
    }
    .Price {
      background: linear-gradient(145deg, #d3fc00, #fcf200);
      box-shadow: 6px 6px 12px #000000, -3px -3px 14px rgba(255, 255, 255, 0.66);
      border-radius: 6px;
      width: 100%;
      height: 17%;

      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 140%;
        transition: 0.2s;
        gap: 5%;
        img {
          width: 12%;
          transform: 0.2s;
        }
        transition: 0.2s;
      }
      div:hover {
        img {
          transition: 0.2s;
          /* transform: scale(120%); */
        }
      }
    }
    .Price:hover {
      height: 24% !important;
    }
  }

  .Card:hover {
    box-shadow: 6px 6px 12px #000000, -3px -3px 14px -3px rgb(255, 255, 255);
    cursor: pointer;
    transform: scale(102%);
  }
`;
function Card(props) {
  const GoSlide = props.isc;
  const src = `http://localhost:3000/${props.picture}`;
  return (
    <StyledCard>
      <div className="header">
        <h3 className="WhiteH">{props.top_name}</h3>
        <h3 className="YellowH">{props.primary_name}</h3>
      </div>
      <div className="Card">
        <Image
          className="Image"
          loader={() => src}
          src={src}
          alt={`${props.primary_name} ${props.top_name}`}
          width={200}
          height={150}
        />
        <p className="CardParag">{props.description}</p>
        <div className="Price">
          {/* <SlideButton/> */}
          <div
            onClick={() => {
              GoSlide(true);
            }}
          >
            Записаться{" "}
            <img
              src={Join.src}
              alt="Записаться на курсы по ремонту телеофнов"
            />
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
