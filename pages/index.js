import Head from "next/head";

import styles from "../styles/Home.module.css";
import Index from "./src/index";
import styled from "styled-components";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ImaCode ::: Курсы программирования</title>
        <meta name="yandex-verification" content="3e6471ecb20fbdd6" />
        <meta
          name="description"
          content="Учебный центр в Бишкеке: курсы программирования, веб-разработки и веб-дизайна за 2 месяца. Получите практические навыки, дипломы государственного образца и начните карьеру в IT."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="imacode academy, курсы, программирования, бишкек, в бишкеке, по программированию, frontend бишкек, смартфонов, ноутбуков, программирования frontend бишкек, обучение программирования, курсы программирования, j, обучение программирования ui ux бишкек, курсы программирования ui ux бишкек kg, по программированию python бишкек, бишкек, курсы бишкек, ремонт курсы, телефон ремонт, курсы, курсы программирования бишкек, ондоо курстары, курсы программирования python бишкек бишкек, нефели, imacode"
        />
        <meta name="author" content="Mamatkulov Abror" />
        <meta
          property="og:title"
          content="imacode Academy - курсы программирования python бишкек"
        />
        <meta property="og:url" content="https://imacode.ru/" />
        <meta
          property="og:image"
          content="http://imacode.ru/public/media/imacode_logo.png"
        />
        <meta
          property="og:description"
          content="Учебный центр в Бишкеке: курсы программирования, веб-разработки и веб-дизайна за 2 месяца. Получите практические навыки, дипломы государственного образца и начните карьеру в IT."
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="Ss3zSZ3n0sIKsAhbmsJmi5UPNDugUlhmsdmsVxS13S4" />
      </Head>
      <Index />
    </div>
  );
}
