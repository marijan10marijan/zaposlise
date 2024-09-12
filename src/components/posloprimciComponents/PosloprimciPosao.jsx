import React from "react";
import styles from "./posloprimciPosao.module.css";
import Link from "next/link";
import Image from "next/image";
import PosloprimciPosaoSlider from "./PosloprimciPosaoSlider";

const PosloprimciPosao = () => {
  return (
    <div className={styles.posao}>
      <Image
        className={styles.posaoDecoImg}
        src={"/posloprimciMainDecoration.png"}
        alt="deKoracijska slika"
        width={635}
        height={556}
        priority
      />
      <div className={styles.posao__wrapper}>
        <div className={styles.posao__content}>
          <div className={styles.posao__content_bio}>
            <div className={styles.posao__content_bioTop}>
              <Image
                src={"/people.png"}
                alt="slike ljudi u jednom okviru"
                width={100}
                height={32}
                priority
              />
              <p>Preko 10.000 ljudi već koristi Zaposlise.hr</p>
            </div>
            <h1 className={styles.posao__content_bioTitle}>
              Tražiš posao? Neka posao pronađe tebe.
            </h1>
            <p className={styles.posao__content_bioText}>
              Dosta Vam je dugih prijava na posao i beskonačnih pretraga
              objavljenih poslova u potrazi za onim “pravim“. Registriraj se
              odmah i dopusti da posao pronađe tebe.
            </p>
          </div>

          <Link
            className={styles.posao__content_btn}
            href={"/signin/create/user"}
          >
            Registriraj se
          </Link>
        </div>
        <div className={styles.posao__slider}>
          <PosloprimciPosaoSlider />
        </div>
      </div>
    </div>
  );
};

export default PosloprimciPosao;
