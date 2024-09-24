import Head from "next/head";

import styles from "../styles/Home.module.css";
import Index from "./src/index";
import styled from "styled-components";
import GalleryPage from "./src/components/Gallery/GalleryPage";

export default function gallery() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nefely Academy - Галерея</title>
        <meta name="yandex-verification" content="3e6471ecb20fbdd6" />
        <meta
          name="description"
          content="КУРСЫ ПО РЕМОНТУ ТЕЛ/ПК БИШКЕК ОТЗЫВЫ, ГАЛЕРЕЯ"
        />
        <meta
          name="keywords"
          content="nefely academy, курсы, ремонта, по ремонту, телефонов, смартфонов, ноутбуков, ремонта телефонов, обучение ремонта, курсы ремонта, j, обучение ремонта телефонов, курсы ремонта телефонов kg, по ремонту телефонов, бишкек, курсы бишкек, ремонт курсы, телефон ремонт, курсы, курсы ремонта бишкек, ондоо курстары, курсы ремонта телефонов бишкек, нефели, nefely"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GalleryPage />
    </div>
  );
}
