import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Image from "next/image";
import Footer from "../Hero/Blocks/Footer/Footer";
import HeaderLine from "./HeaderLine";
import ReactMarkdown from "react-markdown";

const StyledGallery = styled.article`
  * {
    transition: 0.1s;
  }
  @media only screen and (max-width: 920px) {
    .container {
      .post {
        .post__description[open] {
          position: relative !important;
          margin-top: 8px;
        }
      }
    }
  }
  @media only screen and (min-width: 920px) {
    .container {
      .post {
        position: relative;
        width: 420px;
        .post__description[open] {
          position: absolute;
          width: 366px;
          height: 84.4%;
          top: 0;
          background-color: #1c1c1c !important;
          text-align: left;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0px 0px 15px 15px;
          top: 57px !important;
          & > p {
            display: flex;
            justify-content: flex-start;
            padding: 4%;
            flex-direction: column;
            height: 100%;
          }
          .post__summary {
            position: absolute;
            bottom: 3.68%;
            width: 95%;
            background-color: #ffffff5c;
          }
        }
      }
    }
  }

  color: white;
  .container {
    width: 94%;
    margin-left: 3%;
    padding-bottom: 10%;
    padding-top: 6%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 4%;
    .post {
      max-width: 480px;
      margin-bottom: 4%;
      border: 1px solid #ffffff;
      padding: 2%;
      border-radius: 12px;
      display: inline;
      .post__tite {
        margin-bottom: 12px;
      }
      .post__picture {
      }
      .post__description {
        /* background-color: #d2fc001f; */
        border-radius: 15px;
        padding: 10px;
      }
      .post__description[open] {
        background-color: #afafac2f;
        position: absolute;
      }
      .post__summary {
        cursor: pointer;
        padding: 6px;
        border-radius: 8px;
      }
    }
  }
  .footer-box {
    height: 100vh;
    width: 100%;
    padding: 3%;
  }
`;
function GalleryPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async (url) => {
      setLoading(true);
      try {
        const { data, response } = await axios.get(url);
        setData(data.data);
        console.log(data.data);
      } catch (error) {
        console.log("ERROR: ", error.message);
      }
      setLoading(false);
    };
    fetchData("http://176.126.166.222:1337/api/galleries");
  }, []);
  return (
    <StyledGallery>
      <HeaderLine />
      <main className="container">
        {data.map((el) => {
          const src = `http://176.126.166.222:1337${el.attributes.ImageLink}`;
          return (
            <>
              <article className="post">
                <h3 className="post__tite">{el.attributes.Title}</h3>
                <Image
                  className="post__picture"
                  loader={() => src}
                  src={src}
                  alt={el.attributes.Title}
                  width={2000}
                  height={2000}
                />
                <details className="post__description">
                  <summary className="post__summary">Подробнее</summary>
                  <p>
                    <ReactMarkdown>{el.attributes.Description}</ReactMarkdown>
                  </p>
                </details>
              </article>
            </>
          );
        })}
      </main>

      <div className="footer-box">
        <Footer />
      </div>
    </StyledGallery>
  );
}

export default GalleryPage;
