"use client";
import React, { useEffect, useState } from "react";
import styles from "./poslodavciPomoc.module.css";
import Link from "next/link";
import Image from "next/image";
import KontaktForm from "../sharedComponents/KontaktForm";
import KontaktJaviteNamSe from "../sharedComponents/KontaktJaviteNamSe";

const PoslodavciPomocVama = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isBorder = isOpen && screenWidth <= 564;
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.pomoc}>
      <div className={styles.pomoc__container}>
        <div className={styles.pomoc__left}>
          {/* CARD ZA ŽIVOTOPIS ***********************************/}
          <div className={styles.pomoc__left_card}>
            <Image
              src={"/success.png"}
              alt="ikona za životopis"
              width={44}
              height={44}
            />
            <div>
              <h6>Ivan Horvat životopis.pdf</h6>
              <p>10.04.2024</p>
            </div>
          </div>
          {/* ZIVOTOPIS **********************************/}
          <div className={styles.pomoc__left_zivotopis}>
            <div className={styles.pomoc__left_zivotopisWrapper}>
              <div className={styles.pomoc__left_zivotopisBox1}>
                <h6>Jeste li vi naš novi dizajner?</h6>
                <p>
                  Odgovori na nekoliko pitanja u manje od 2 minute i saznaj čeka
                  li te bolji posao kod nas!
                </p>
              </div>
              <div className={styles.pomoc__left_zivotopisBox2}>
                <p>Mjesto rada:</p>
                <div>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.20512 9.31534C10.3064 9.23064 11.1306 8.26918 11.0459 7.16787C10.9612 6.06655 9.99973 5.24242 8.89841 5.32711C7.79709 5.41181 6.97296 6.37326 7.05765 7.47458C7.14235 8.5759 8.1038 9.40003 9.20512 9.31534Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0356 6.93725C14.3806 11.424 9.66374 15.2971 9.66374 15.2971C9.66374 15.2971 4.41008 12.1908 4.06503 7.70403C3.96335 6.38185 4.39107 5.07343 5.25409 4.06661C6.11711 3.05979 7.34474 2.43704 8.66692 2.33536C9.9891 2.23368 11.2975 2.66139 12.3043 3.52441C13.3112 4.38744 13.9339 5.61507 14.0356 6.93725V6.93725Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Dubrovnik</p>
                  </div>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.20512 9.31534C10.3064 9.23064 11.1306 8.26918 11.0459 7.16787C10.9612 6.06655 9.99973 5.24242 8.89841 5.32711C7.79709 5.41181 6.97296 6.37326 7.05765 7.47458C7.14235 8.5759 8.1038 9.40003 9.20512 9.31534Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0356 6.93725C14.3806 11.424 9.66374 15.2971 9.66374 15.2971C9.66374 15.2971 4.41008 12.1908 4.06503 7.70403C3.96335 6.38185 4.39107 5.07343 5.25409 4.06661C6.11711 3.05979 7.34474 2.43704 8.66692 2.33536C9.9891 2.23368 11.2975 2.66139 12.3043 3.52441C13.3112 4.38744 13.9339 5.61507 14.0356 6.93725V6.93725Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Zagreb</p>
                  </div>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.20512 9.31534C10.3064 9.23064 11.1306 8.26918 11.0459 7.16787C10.9612 6.06655 9.99973 5.24242 8.89841 5.32711C7.79709 5.41181 6.97296 6.37326 7.05765 7.47458C7.14235 8.5759 8.1038 9.40003 9.20512 9.31534Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0356 6.93725C14.3806 11.424 9.66374 15.2971 9.66374 15.2971C9.66374 15.2971 4.41008 12.1908 4.06503 7.70403C3.96335 6.38185 4.39107 5.07343 5.25409 4.06661C6.11711 3.05979 7.34474 2.43704 8.66692 2.33536C9.9891 2.23368 11.2975 2.66139 12.3043 3.52441C13.3112 4.38744 13.9339 5.61507 14.0356 6.93725V6.93725Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Zagrebačka</p>
                  </div>
                  <div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.20512 9.31534C10.3064 9.23064 11.1306 8.26918 11.0459 7.16787C10.9612 6.06655 9.99973 5.24242 8.89841 5.32711C7.79709 5.41181 6.97296 6.37326 7.05765 7.47458C7.14235 8.5759 8.1038 9.40003 9.20512 9.31534Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.0356 6.93725C14.3806 11.424 9.66374 15.2971 9.66374 15.2971C9.66374 15.2971 4.41008 12.1908 4.06503 7.70403C3.96335 6.38185 4.39107 5.07343 5.25409 4.06661C6.11711 3.05979 7.34474 2.43704 8.66692 2.33536C9.9891 2.23368 11.2975 2.66139 12.3043 3.52441C13.3112 4.38744 13.9339 5.61507 14.0356 6.93725V6.93725Z"
                        stroke="#1565D8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p>Split</p>
                  </div>
                </div>
              </div>
              <div className={styles.pomoc__left_zivotopisBox3}>
                <Link
                  href={"/"}
                  className={styles.pomoc__left_zivotopisBox3_button}
                >
                  Kreni na pitanja
                </Link>
                <p>
                  Prosječno trajanje kviza: <span>do 2 minute</span>
                </p>
              </div>
            </div>
          </div>
          {/* CHART ***************************************/}
          <div className={styles.pomoc__left_chart}>
            <Image
              src={"/zaposliseChart.png"}
              alt=""
              width={280}
              height={227}
            />
          </div>
          {/* DECORATIONS *********************************/}
          <div className={styles.pomoc__left_decorationTop}>
            <svg
              width="106"
              height="33"
              viewBox="0 0 106 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.9247 0L27.774 0.483055L39.9623 7.41484L52.1506 0.483055L53 0L53.8494 0.483055L66.0377 7.41484L78.226 0.483055L79.0753 0L79.9247 0.483055L92.113 7.41484L104.301 0.483055L106 3.56377L92.9623 10.9786L92.113 11.4617L91.2636 10.9786L79.0753 4.04682L66.887 10.9786L66.0377 11.4617L65.1883 10.9786L53 4.04682L40.8117 10.9786L39.9623 11.4617L39.113 10.9786L26.9247 4.04682L14.7364 10.9786L13.887 11.4617L13.0377 10.9786L0 3.56377L1.69873 0.483055L13.887 7.41484L26.0753 0.483055L26.9247 0ZM27.774 22.0214L26.9247 21.5383L26.0753 22.0214L13.887 28.9532L1.69873 22.0214L0 25.1021L13.0377 32.5169L13.887 33L14.7364 32.5169L26.9247 25.5852L39.113 32.5169L39.9623 33L40.8117 32.5169L53 25.5852L65.1883 32.5169L66.0377 33L66.887 32.5169L79.0753 25.5852L91.2636 32.5169L92.113 33L92.9623 32.5169L106 25.1021L104.301 22.0214L92.113 28.9532L79.9247 22.0214L79.0753 21.5383L78.226 22.0214L66.0377 28.9532L53.8494 22.0214L53 21.5383L52.1506 22.0214L39.9623 28.9532L27.774 22.0214Z"
                fill="#212131"
              />
            </svg>
          </div>
          <div className={styles.pomoc__left_decorationBottom}>
            <svg
              width="106"
              height="33"
              viewBox="0 0 106 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.9247 0L27.774 0.483055L39.9623 7.41484L52.1506 0.483055L53 0L53.8494 0.483055L66.0377 7.41484L78.226 0.483055L79.0753 0L79.9247 0.483055L92.113 7.41484L104.301 0.483055L106 3.56377L92.9623 10.9786L92.113 11.4617L91.2636 10.9786L79.0753 4.04682L66.887 10.9786L66.0377 11.4617L65.1883 10.9786L53 4.04682L40.8117 10.9786L39.9623 11.4617L39.113 10.9786L26.9247 4.04682L14.7364 10.9786L13.887 11.4617L13.0377 10.9786L0 3.56377L1.69873 0.483055L13.887 7.41484L26.0753 0.483055L26.9247 0ZM27.774 22.0214L26.9247 21.5383L26.0753 22.0214L13.887 28.9532L1.69873 22.0214L0 25.1021L13.0377 32.5169L13.887 33L14.7364 32.5169L26.9247 25.5852L39.113 32.5169L39.9623 33L40.8117 32.5169L53 25.5852L65.1883 32.5169L66.0377 33L66.887 32.5169L79.0753 25.5852L91.2636 32.5169L92.113 33L92.9623 32.5169L106 25.1021L104.301 22.0214L92.113 28.9532L79.9247 22.0214L79.0753 21.5383L78.226 22.0214L66.0377 28.9532L53.8494 22.0214L53 21.5383L52.1506 22.0214L39.9623 28.9532L27.774 22.0214Z"
                fill="#212131"
              />
            </svg>
          </div>
        </div>
        {/* RIGHT SIDE  ****************************************/}
        <div className={styles.pomoc__right}>
          <div className={styles.pomoc__right_content}>
            <h2>Kako Zaposlise može pomoći Vama ?</h2>
            <p>
              Korištenjem Zaposlise, dobit ćete personaliziranu strategiju za
              privlačenje pasivnih kandidata, vlastitu stranicu karijera te
              smanjene troškova regrutiranja i ubrzanje procesa zapošljavanja.
              Osim toga, kandidati mogu jednostavno pronaći poslovne prilike
              koje odgovaraju njihovim vještinama i interesima. Sa samo nekoliko
              klikova, Zaposlise osigurava da korisnici i tvrtke dobiju upravo
              ono što žele, kada to žele.{" "}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className={styles.pomoc__right_link}
          >
            Kontaktiraj nas
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_10604_182648)">
                <path
                  d="M8.11191 1L12.8499 5.738M12.8499 5.738L8.11191 10.477M12.8499 5.738L1.00391 5.739"
                  stroke="#19BB70"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_10604_182648">
                  <rect width="14" height="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className={styles.modalDivOverlay}>
          <div className={styles.modalDiv}>
            {screenWidth >= 1191 || screenWidth <= 564 ? (
              <div className={styles.modalDiv_Kontakt}>
                <KontaktJaviteNamSe isBorder={isBorder} />
                <div className={styles.modalDiv_KontaktForm}>
                  <h3>Kontaktirajte nas</h3>
                  <KontaktForm />
                </div>
              </div>
            ) : (
              <div className={styles.modalDiv_KontaktForm}>
                <h3>Kontaktirajte nas</h3>
                <KontaktForm />
              </div>
            )}
            <div
              onClick={() => setIsOpen(false)}
              className={styles.modalDiv__closeIcon}
            >
              <Image
                src={"/closeIcon.png"}
                alt="ikona za zatvaranje popup prozora"
                width={50}
                height={50}
              />
            </div>
            <div
              onClick={() => setIsOpen(false)}
              className={styles.modalDiv__closeIconSmall}
            >
              <Image
                src={"/closeIconSmall.png"}
                alt="ikona za zatvaranje popup prozora"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PoslodavciPomocVama;
