import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Pagination } from "swiper";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Card from "./Card";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@mui/material";
import Image from "next/image";

const CoursesStyled = styled.article`
display: flex;
flex-direction: column;
  @media only screen and (max-width: 920px) {
    h3,
    h4 {
      display: none;
    }
    .Main {
      height: 75vh !important;
      width: 90vw !important;
      margin-left: 5vw !important;
      /* background: rgb(200 200 200 / 19%) !important; */
      /* box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important; */
      box-shadow: none !important;
      backdrop-filter: blur(7px);
      background-blend-mode: overlay;
      overflow: visible !important;
    }

    .Buttons {
      display: none !important;
    }
    .grid{
      display: flex !important;
      flex-direction: column;
      /* overflow: ; */
      .Card{
        font-size:  12px !important;
        h2{
          font-size: 5vw !important;
        }
        .description{
          font-size: 3vw !important;
        }
        .Illu{
          /* width: 14vw !important; */
          margin-right: -20px;
        }
      }
    }
  }
  width: 100%;
  height: 100%;
  color: #000000;
  display: block;
  padding-top: 4%;
  .swiper-pagination-vertical {
    background-color: #d3fc00;
  }
  header {
    width: 100%;
    h3 {
      text-align: center;
      /* font-family: "Days One"; */
      font-weight: bold;
      font-size: 3.2vw;
      line-height: 62px;
      text-align: center;
      color: black;
      text-transform: uppercase;
    }
    h4 {
      font-family: "Jura";
      font-style: normal;
      font-weight: 700;
      font-size: 1.2vw;
      line-height: 24px;
      text-align: center;
      color: rgba(255, 255, 255, 0.79);
    }
  }
  .Main {

    height: -webkit-fill-available;
    /* margin-top: 3vh; */
    overflow: hidden;
    color: black;
  width: 100%;
    .grid{
      /* height: 100%;
      width: 100%; */
      display: grid;
      grid-template-columns: 48% 48%;
  /* Будет создано 3 ряда */
  gap: 40px;
  grid-template-rows: 40% 40%;
  height: calc(80vh - 120px);
        .Card{
          /* background-color: #d2fc002b; */
          border-radius: 12px;
          h2{
            text-transform: uppercase;
            font-size: 32px;
            
          }

          border: 0px solid #0000006b;
        /* box-shadow: -2px -2px 0px #FF003C, 2px 2px 0px #00F0FF; */
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .description{
            font-size: 24px;
            /* width: 6%; */
          }
          position: relative;
          .Illu{
            position: absolute;
            top: 12px;
            right: 12px;
            /* width: 130px; */
          }
          box-shadow: 24px 24px 20px -23px rgba(255, 0, 60, 1);
        }

        .Frontend{
          
        }
        .Backend{
          box-shadow: 24px 24px 20px -23px rgba(0, 240, 255, 1);
        }
      

          .ProFrontend{
            
          }
          .UiUx{
            color: black;
            box-shadow: 24px 24px 20px -23px rgba(0, 240, 255, 1);
          }
        }

      .gradient{
        position: absolute;
        top: 50%;
        left: 50%;
        box-shadow: 4px 4px 77px -7px rgba(255, 0, 0, 1);
      }
      
    
  }
`;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);
  return windowSize;
}

function Courses(props) {
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.innerHeight, window.innerWidth);
    });
  }, []);
  const size = useWindowSize();
  const setIM = props.isc;
  console.log("State1: ", props.isstate);




  return (
    <CoursesStyled>
      <header>
        <h3
          onClick={() => {
            setIM(true);
          }}
        >
          <TypeAnimation
            sequence={[
              "Наши курсы: Ваш путь в IT",
              1000,
              "Выберите курс и начните путь в IT",
              1200,
              "Ваш выбор курса — первый шаг в IT",
              1200,
              "Выбери таблетку, Нео!",
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h3>
        <h4>Профессии и курсы, на которые сейчас открыт набор</h4>
      </header>
      <div className="Main">
        <div className="grid">
          <div className="Frontend Card">
            <h2>
              Веб-разработка
            </h2>
            <Image src="/media/ux.png" alt="Frontend Logo" className="Illu" width={130} height={130}/>
            <p className="description">Освойте создание веб-сайтов с нуля! <br />Научитесь работать с HTML, CSS, Figma и JavaScript <br />за 2 месяца и создавайте стильные и функциональные сайты.</p>
          </div>
          <div className="Backend Card">
            <h2>
              Python-разработка
            </h2>
            <Image src="/media/python.png" alt="Python Logo" width={130} height={130} />

            <p className="description">Овладейте Python и Django, <br /> создавайте веб-приложения и Telegram-ботов. <br />Всего за 2 месяца вы освоите востребованные навыки программирования.</p>
          </div>
          <div className="UiUx Card">
            <h2>Веб-дизайн</h2>
            <Image src="/media/web-design.png" alt="Python Logo" width={130} height={130} />

            <p className="description">Станьте экспертом в веб-дизайне.<br /> За 2 месяца вы освоите работу в Figma, <br />научитесь проектировать удобные и современные интерфейсы, <br />и подготовите портфолио для будущей карьеры.</p>
          </div>
          <div className="ProFrontend Card">
            <h2>Продвинутый Frotnend</h2>
            <Image src="/media/chemistry.png" alt="Python Logo" width={130} height={130} />

            <p className="description">Углубите свои знания в веб-разработке.<br /> За 2 месяца вы освоите Node.js и React, <br />что позволит вам создавать сложные и динамичные<br /> веб-приложения на профессиональном уровне.</p>

          </div>

        </div>
      </div>
    </CoursesStyled>
  );
}

export default Courses;

{
  /* <SwiperSlide>
<Card
  top_name="Курс"
  primary_name='"Профессиональный"'
  description="72 часов практики
Выдача сертификатов
после 72 часов
Обучение с 0 до МАСТЕРА
Помогаем открыть свою точку"
  isc={setIM}
/>
</SwiperSlide>
<SwiperSlide>
<Card
  top_name="Курс по ремонту"
  primary_name='"Ноутбуков"'
  description="48 часов практики
Выдача сертификатов
после 48 часов
Обучение с 0 до МАСТЕРА"
  isc={setIM}
/>
</SwiperSlide> */
}
