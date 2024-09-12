"use client";

import React, { useState } from "react";
import styles from "./poslodavciRezultati.module.css";
import Image from "next/image";

const PoslodavciRezultati = () => {
  const [activeJobButton, setActiveJobButton] = useState("Električari");

  return (
    <div className={styles.rezultati}>
      <div className={styles.rezultati__wrapper}>
        <h2 className={styles.rezultati__title}>
          Pogledajte rezultate za samo neke od naših oglasa
        </h2>
        <div className={styles.rezultati__buttons}>
          <button
            onClick={() => setActiveJobButton("Električari")}
            className={
              activeJobButton === "Električari"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Električari
          </button>
          <button
            onClick={() => setActiveJobButton("Viličaristi")}
            className={
              activeJobButton === "Viličaristi"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Viličaristi
          </button>
          <button
            onClick={() => setActiveJobButton("Skladištar")}
            className={
              activeJobButton === "Skladištar"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Skladištar
          </button>
          <button
            onClick={() => setActiveJobButton("Vozač")}
            className={
              activeJobButton === "Vozač"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Vozač
          </button>
          <button
            onClick={() => setActiveJobButton("Građevinari")}
            className={
              activeJobButton === "Građevinari"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Građevinari
          </button>
          <button
            onClick={() => setActiveJobButton("Konobari")}
            className={
              activeJobButton === "Konobari"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Konobari
          </button>
          <button
            onClick={() => setActiveJobButton("Kuhari")}
            className={
              activeJobButton === "Kuhari"
                ? ` ${styles.rezultati__button} ${styles.rezultati__active_button}`
                : `${styles.rezultati__button}`
            }
          >
            Kuhari
          </button>
        </div>
        <div className={styles.rezultati__charts}>
          <Image
            className={styles.rezultati__charts_img}
            src={"/chart.png"}
            alt="chart kartica koja pokazuje oglas za posao"
            width={280}
            height={488}
          />
          <Image
            className={styles.rezultati__charts_img}
            src={"/chart.png"}
            alt="chart kartica koja pokazuje oglas za posao"
            width={280}
            height={488}
          />
          <Image
            className={styles.rezultati__charts_img}
            src={"/chart.png"}
            alt="chart kartica koja pokazuje oglas za posao"
            width={280}
            height={488}
          />
        </div>
      </div>
    </div>
  );
};

export default PoslodavciRezultati;
