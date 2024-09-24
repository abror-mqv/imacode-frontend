import React, { useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, FreeMode, Scrollbar, Mousewheel } from "swiper";

import One from "./Slides/1One/One";
import Two from "./Slides/2Two/Two";
import Three from "./Slides/3Three/Three";
import Four from "./Slides/4Four/Four";
import Five from "./Slides/5Five/Five";

import Image from "next/image";

const WhyWeStyled = styled.article`
  @media only screen and (max-width: 920px) {
    .Phone {
      display: none;
    }
    .Container {
      display: none !important;
    }
    .MobileContainer {
      display: block !important;
      background: rgb(200 200 200 / 36%) !important;
      box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important;
      box-shadow: none !important;
    }
    h5 {
      align-items: flex-end !important;
      font-size: 12vw !important;
      margin-top: 2vh !important;
      text-shadow: -2px 0px 0px #FF003C, 0px 0px 0px #00F0FF !important;

      span {
        color: black;
      }
    }
  }
  .MobileContainer {
    
    display: none;
    background: rgba(116, 116, 116, 0.1);
    box-shadow: -6px -6px 33px -18px #ffffff, 25px 25px 50px -9px #000000;
    border-radius: 19px;
    margin-left: 4vw;
    width: 92vw;
    margin-top: 1vh;
    height: 70vh;
    overflow: hidden;
    padding: 4vw;
  }
  display: flex;
  justify-content: space-around;
  align-items: center;
  .Phone {
    height: 60vh;
  }
  .Why {
    width: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h5 {
      font-style: normal;
      font-weight: bold;
      font-size: 4.2vw;
      line-height: 62px;
      display: flex;
      align-items: center;
      text-align: center;
      color: #ffffff;
      margin-top: 24px;
      /* background-color: black; */
      padding: 4px;
      color: #000000;
      text-shadow: -6px 0px 0px #FF003C, 0px 0px 0px #00F0FF;

    }
    .Container {
      width: 100%;
      display: flex;
      justify-content: center;
      width: 80vh;
      /* backdrop-filter: blur(7px); */
    background-blend-mode: overlay;
      .mySwiper {
        height: 61vh;
        width: 87%;
        margin-top: 4vh;
      }
      .SliderBlock {
        width: 80vh;
        position: absolute;
        margin-left: 20px;
      }
    }
  }
`;

function WhyWe() {
  return (
    <WhyWeStyled>
      <Image src="/media/whywe.jpg" className="Phone" alt="какие курсы вабрать" width={580} height={580}/>

      <div className="Why">
        <h5>
          Почему &nbsp;<span>мы?</span>
        </h5>
        <div className="Container">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, FreeMode, Scrollbar, Mousewheel]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <Two />
            </SwiperSlide>
            <SwiperSlide>
              <One />
            </SwiperSlide>
            <SwiperSlide>
              <Three />
            </SwiperSlide>
            <SwiperSlide>
              <Four />
            </SwiperSlide>
            <SwiperSlide>
              <Five />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="MobileContainer">
          <Swiper
            slidesPerView={1}
            spaceBetween={"100%"}
            className="mySwiper"
            direction={"vertical"}
            modules={[FreeMode]}
          >
            <SwiperSlide>
              <One />
            </SwiperSlide>
            <SwiperSlide>
              <Two />
            </SwiperSlide>
            <SwiperSlide>
              <Three />
            </SwiperSlide>
            <SwiperSlide>
              <Four />
            </SwiperSlide>
            <SwiperSlide>
              <Five />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </WhyWeStyled>
  );
}

export default WhyWe;
