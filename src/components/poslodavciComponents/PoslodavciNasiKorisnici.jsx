import React from "react";
import styles from "./poslodavciNasiKorisnici.module.css";
import Image from "next/image";

const PoslodavciNasiKorisnici = () => {
  return (
    <div className={styles.korisnici}>
      <div className={styles.korisnici__wrapper}>
        {/* HEADER **************** **********************/}
        <div className={styles.korisnici__header}>
          <h2>Što kažu naši korisnici</h2>
          <svg
            width="147"
            height="147"
            viewBox="0 0 147 147"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_12180_199378)">
              <path
                opacity="0.2"
                d="M0 62.9999H31.5L10.4998 105H41.9998L62.9999 62.9999V0H0V62.9999Z"
                fill="white"
              />
              <path
                opacity="0.2"
                d="M84 0V62.9999H115.5L94.4998 105H126L147 62.9999V0H84Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_12180_199378">
                <rect width="147" height="147" fill="white" />
              </clipPath>
            </defs>
          </svg> 
        </div>
        {/* MAIN **************** ************************/}
        <div className={styles.korisnici__main}>
          <div className={styles.korisnici__main_left}>
            <div className={styles.korisnici__main_left_top}>
              <h4>Luka Grgurić</h4>
              <p>Direktor, Samoborček</p>
            </div>
            <div className={styles.korisnici__main_left_bottom}>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-0.5"
                  y="0.5"
                  width="41"
                  height="41"
                  rx="20.5"
                  transform="matrix(-1 0 0 1 41 0)"
                  stroke="white"
                />
                <path
                  d="M29.25 21H12.75"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.5 14.25L12.75 21L19.5 27.75"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="41"
                  height="41"
                  rx="20.5"
                  stroke="white"
                />
                <path
                  d="M12.75 21H29.25"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.5 14.25L29.25 21L22.5 27.75"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>1/5</p>
            </div>
          </div>
          <div className={styles.korisnici__main_right}>
            <p>
              Duplico made my job search effortless! <br /> Their platform
              connected me with great opportunities. I highly recommend their
              services to all.
            </p>
          </div>
        </div>
        {/* BOTTOM **************** ************************/}
        <div className={styles.korisnici__bottom}>
          <div className={styles.korisnici__bottom_testimonials}>
            <div>
              <Image
                className={styles.active}
                src={"/samoborcek.png"}
                alt=""
                height={32}
                width={130}
              />
            </div>
            <div>
              <Image src={"/schneider.png"} alt="" height={32} width={113} />
            </div>
            <div>
              <Image src={"/ivicom.png"} alt="" height={32} width={160} />
            </div>
            <div>
              <Image src={"/weishaupt.png"} alt="" height={32} width={153} />
            </div>
          </div>
          <div className={styles.korisnici__bottom_link}>
            <p>Show more</p>
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
                  stroke="#fff"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoslodavciNasiKorisnici;
