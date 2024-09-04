import React from "react";
import styles from "./poslodavciRezultati.module.css";
import Image from "next/image";

const PoslodavciRezultati = () => {
  return (
    <div className={styles.rezultati}>
      <div className={styles.rezultati__wrapper}>
        <h2 className={styles.rezultati__title}>
          Pogledajte rezultate za samo neke od naših oglasa
        </h2>
        <div className={styles.rezultati__buttons}>
          <button
            className={`${styles.rezultati__button} ${styles.rezultati__active_button}`}
          >
            Električari
          </button>
          <button className={styles.rezultati__button}>Viličaristi</button>
          <button className={styles.rezultati__button}>Skladištar</button>
          <button className={styles.rezultati__button}>Vozač</button>
          <button className={styles.rezultati__button}>Građevinari</button>
          <button className={styles.rezultati__button}>Konobari</button>
          <button className={styles.rezultati__button}>Kuhari</button>
        </div>
        <div className={styles.rezultati__charts}>
          <Image
            src={"/chart.png"}
            alt="chart kartica koja pokazuje oglas za posao"
            width={280}
            height={488}
          />
          <Image
            src={"/chart.png"}
            alt="chart kartica koja pokazuje oglas za posao"
            width={280}
            height={488}
          />
          <Image
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
