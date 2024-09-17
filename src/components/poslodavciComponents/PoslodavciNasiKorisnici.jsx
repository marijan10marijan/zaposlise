"use client";
import React, { useState } from "react";
import styles from "./poslodavciNasiKorisnici.module.css";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    id: 1,
    name: "Luka Grgurić",
    company: "Direktor, Samoborček",
    description:
      "Duplico made my job search effortless! Their platform connected me with great opportunities. I highly recommend their services to all.",
    logo: "/samoborcek.png",
  },
  {
    id: 2,
    name: "John Doe",
    company: "Team Lead, Schneider Electric",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora nulla natus adipisci quasi, atque minima odio facilis maxime laudantium repellendus dicta maiores",
    logo: "/schneider.png",
  },
  {
    id: 3,
    name: "Mislav Janjic",
    company: "Engineer, Ivicom Consulting",
    description:
      "Lorem atque minima odio facilis maxime laudantium repellendus dicta maiores, ipsam nihil rem ex quas, distinctio nesciunt quisquam.",
    logo: "/ivicom.png",
  },
  {
    id: 4,
    name: "Anne Lustig",
    company: "Direktor, Weishaupt",
    description:
      "Lorem ipsum dolor sit, adipisicing elit. Tempora nulla natus adipisci quasi, atque minima odio facilis maxime laudantium repellendus dicta.",
    logo: "/weishaupt.png",
  },
];

const PoslodavciNasiKorisnici = () => {
  const [currentClient, setCurrentClient] = useState(0);

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
              <h4>{clients[currentClient].name}</h4>
              <p>{clients[currentClient].company}</p>
            </div>
            <div className={styles.korisnici__main_left_bottom}>
              <div>
                <button
                  className={styles.korisnici__main_left_bottomButton}
                  onClick={() =>
                    setCurrentClient(
                      (prev) => (prev - 1 + clients.length) % clients.length
                    )
                  }
                >
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
                </button>
                <button
                  className={styles.korisnici__main_left_bottomButton}
                  onClick={() =>
                    setCurrentClient((prev) => (prev + 1) % clients.length)
                  }
                >
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
                </button>
              </div>

              <p>
                {currentClient + 1} /{clients.length}
              </p>
            </div>
          </div>
          <div className={styles.korisnici__main_right}>
            <p>{clients[currentClient].description}</p>
          </div>
        </div>
        {/* BOTTOM **************** ************************/}
        <div className={styles.korisnici__bottom}>
          <div className={styles.korisnici__bottom_testimonials}>
            {clients.map((client, index) => (
              <div key={client.id} onClick={() => setCurrentClient(index)}>
                <Image
                  className={index === currentClient ? styles.active : ""}
                  src={client.logo}
                  alt={client.company}
                  height={32}
                  width={130}
                />
              </div>
            ))}
          </div>
          <Link href={"/"} className={styles.korisnici__bottom_link}>
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
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoslodavciNasiKorisnici;
