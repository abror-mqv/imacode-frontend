import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "next/head";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import { Formik, Field, Form } from "formik";
import Modal from "@mui/material/Modal";
import FieldName from "./Field/FieldName";
import FieldTel from "./Field/FieldTel";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const StyledContact = styled.div`
  @media only screen and (max-width: 920px) {
    .PhoneImg {
      display: none !important;
    }
    .Container {
      flex-wrap: wrap;
    }
    .Main {
      width: 84% !important;
      height: 82% !important;
      margin-top: -14vh;
      padding-bottom: 4vh;
      /* background: rgb(200 200 200 / 36%) !important; */
      box-shadow: -8px -8px 37px -15px #ffffff, 25px 25px 50px -9px #000000 !important;
      box-shadow: none !important;

      .Container {
        padding: 12vw;
        display: flex !important;
        /* justify-content: center !important;
        align-items: center !important; */
        
        .Write {
          display: flex;
          justify-content: center;
          align-items: center;
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }
        }
      }
    }
    button {
      width: 104% !important;
      margin-left: 0 !important;
      justify-content: center !important;
      gap: 8vw !important;
    }
    h5 {
      font-size: 8vw !important;
      margin-left: -8vw;
      text-align: start;
    }

    .Contacts {
      width: 100%;
      .Title {
        font-size: 5vw !important;
        text-align: center !important;
        width: 100%;
      }
    }
    button:hover {
      transform: scale(100%);
      padding-left: 0 !important;
      box-shadow: 6px 6px 12px #000000,
        -3px -3px 20px -3px rgba(255, 255, 255, 0.803);
    }
    .tontax{
      display: flex;
      justify-content: space-between;
      gap: 8vw;
      .SubTitle{
        font-size: 6vw !important;
      }
      .Phone{
        font-size: 3vw !important;
      }
      .Address{
        font-size: 3vw !important;
      }
    }
    .MuiTypography-root{
      font-size: 3vw !important;
    }
    .RadioButtons{
      margin-top: 1.5vh;
    }
  }
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10%;
  .PhoneImg {
    width: 50vh;
  }
  .Main {
    background: rgba(116, 116, 116, 0.0);
    box-shadow: 2px 2px 5px 0px rgba(255, 0, 60, 1);
    border-radius: 19px;
    width: 48%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(7px);
    background-blend-mode: overlay;
    .Container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      gap: 3.5vw;
    }
    .Write {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      h5 {
        font-style: normal;
        font-weight: bold;
        font-size: 2.2vw;
        line-height: 51px;
        /* identical to box height */
        
        text-align: start;

        color: #000000;
      }
      .TextFLD {
        margin-top: 1vw;
      }
      .WithIcon {
        display: flex;
      }
      button {
        width: 120%;
        margin-left: -20%;
        background: linear-gradient(273deg, rgba(255, 0, 60, 1) 27.24%, rgba(255, 0, 60, 1) 103.71%);
        box-shadow: 6px 6px 12px #000000,
          -3px -3px 14px -3px rgba(255, 255, 255, 0.66);
        border-radius: 6px;
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 28px;
        text-align: start;
        display: flex;
        justify-content: start;
        align-items: center;
        color: #ffffff;
        margin-top: 4vh;
        padding: 1vh;
        transition: 0.3s;
        gap: 1.3vh;
        cursor: pointer;
        border: 0;
      }
      button:hover {
        transform: scale(100%);
        padding-left: 30%;
        box-shadow: 6px 6px 12px #000000,
          -3px -3px 20px -3px rgba(255, 255, 255, 0.803);
      }
    }
    .Contacts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .Title {
        font-family: "Days One";
        font-style: normal;
        font-weight: 400;
        font-size: 2.2vw;
        line-height: 51px;
        text-align: center;
        color: #ffffff;
      }
      .SubTitle {

        font-style: normal;
        font-weight: 700;
        font-size: 3.5vh;
        line-height: 30px;
        text-align: center;
        color: #aeaeae;

        margin-top: 1vw;
      }
      .Phone {

        font-style: normal;
        font-weight: 500;
        font-size: 2vh;
        line-height: 24px;
        margin-top: 1vh;

        color: #aeaeae;
      }
      .Address {

        font-style: normal;
        font-weight: 500;
        font-size: 2vh;
        line-height: 20px;
        margin-top: 1vh;

        color: #aeaeae;
      }
      .ContactButtons {
        width: 100%;
        display: flex;
        margin-top: 3.5vh;
        justify-content: space-between;
        .MicroButton {
          width: 5vh;
          height: 5vh;
          background: linear-gradient(
            273.14deg,
            rgba(255, 0, 60, 1) 27.24%,
            rgba(255, 0, 60, 1) 103.71%
          );
          box-shadow: 0px 4px 4px rgb(255, 255, 255), 6px 6px 12px #ffffff,
            inset 0px 0px 13px rgba(255, 255, 255, 0.66);
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .telka{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
function Contact() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);



  const SendLeed = (Lead) => {
    const botToken = '7926951482:AAHGMpLum7cWWh6D8cSPsix5ROWNLqADKvM';
    const chatId = '7471817775';
    const message = `Новая заявка с сайта! \n ${Lead.name} \n ${Lead.email} \n ${Lead.contactPreference}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          console.log('Сообщение отправлено в Telegram');
          setOpen(true)
        } else {
          console.error('Ошибка при отправке:', data);
        }
      })
      .catch(error => console.error('Ошибка:', error));

    // axios
    //   .post("http://176.126.166.222:1337/api/requests/", {
    //     data: {
    //       Name: Lead.name,
    //       Number: Lead.email,
    //     },
    //   })
    //   .then(function (response) {
    //     setOpen(true);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <StyledContact>
      <Head></Head>
      <div className="Main">
        <div className="Container">
          <div className="Write">
            <h5>Бесплатная <br /> консультация</h5>
            <Formik
              initialValues={{ name: "", email: "", contactPreference: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                SendLeed(values);
              }}
            >
              <Form>
                <Field as={FieldName} name="name" type="text" />
                <Field as={FieldTel} name="email" type="tel" />
                <FormControl className="RadioButtons">
                  <Field name="contactPreference">
                    {({ field }) => (
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        {...field} // Связываем RadioGroup напрямую с Formik через Field
                      >
                        <FormControlLabel
                          value="now"
                          control={<Radio />}
                          label="Позвоним Вам СЕЙЧАС"
                        />
                        <FormControlLabel
                          value="later"
                          control={<Radio />}
                          label="Позвоним Вам ПОЗЖЕ"
                        />
                        <FormControlLabel
                          value="wa"
                          control={<Radio />}
                          label="НАПИШЕМ Вам по w/a"
                        />
                      </RadioGroup>
                    )}
                  </Field>
                </FormControl>
                <button type="submit">
                  Отправить <SendIcon />
                </button>

              </Form>
            </Formik>

          </div>
          <div className="Contacts">
            <div className="tontax">
              <div className="telka">
                <p className="SubTitle">Телефон:</p>
                <p className="Phone">
                  +996 (999) 109-190 <br /> +996 (554) 220-812
                </p>
              </div>
              <div className="telka">
                <p className="SubTitle">Адрес:</p>
                <p className="Address">
                  г.Бишкек, <br />
                  ул.Шопокова 89, <br />4 этаж
                </p>
              </div>
            </div>
            <div className="ContactButtons">
              <a
                href="https://wa.me/+996999344955?text=Здравстуйте,%27m%расскажите%20мне%20о%20ваших%20курсах"
                className="MicroButton"
              >
                <WhatsAppIcon
                  sx={{ color: "#ffffff", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
              <a href="tel:+996999344955" className="MicroButton">
                <CallIcon
                  sx={{ color: "#ffffff", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
              <a
                href="https://www.instagram.com/academy_nefely/"
                className="MicroButton"
              >
                <InstagramIcon
                  sx={{ color: "#ffffff", height: "4.2vh", width: "4.2vh" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="StyledBoxModal">
          <p></p>
          <p id="modal-modal-title" variant="h6" component="h2">
            Ваша заявка успешно принята!
                    
          </p>
          <Button
            variant="contained"
            className="BoxModal__button"
            color="success"
            onClick={() => {
              setOpen(false);
              FieldName = null;
              FieldTel = null;
            }}
          >
            ОК
          </Button>
        </Box>
      </Modal>
      <img
        src="/media/hero-image.png"
        className="PhoneImg"
        alt="Наш оператор"
      />
    </StyledContact>
  );
}

export default Contact;
