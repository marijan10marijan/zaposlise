import React from "react";
import styles from "./posloprimciMobilnaAplikacija.module.css";
import Image from "next/image";
import Link from "next/link";

const PosloprimciMobilnaAplikacija = () => {
  return (
    <section className={styles.app}>
      <div className={styles.app__wrapper}>
        <div className={styles.app__left}>
          <div className={styles.app__left_top}>
            <h3>Da, dostupni smo i na mobilnoj aplikaciji</h3>
            <p>
              Mjeseci čekanja da se pronađu pravi kandidati je stvar prošlosti.
              Od inicijalnog kontakta do zapošljavanja, s Zaposlise.hr potrebno
              vam je samo nekoliko dana. Kontaktirajte nas danas i pronađite
              kvalitetne ljude za svoje otvoreno radno mjesto u idućih nekoliko
              dana. 
            </p>
          </div>
          <div className={styles.app__left_bottom}>
            <p>Dostupno na:</p>
            <div className={styles.app__left_bottomLinks}>
              <Link href={"/"}>
                <Image
                  className={styles.app__left_bottomLinks_appleImg}
                  src={"/appStore.png"}
                  alt="apple app store trgovina"
                  width={190}
                  height={61}
                />
              </Link>
              <Link href={"/"}>
                <Image
                  className={styles.app__left_bottomLinks_googleImg}
                  src={"/googlePlay.png"}
                  alt="google play trgovina"
                  width={208}
                  height={61}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.app__right}>
          <Image
            src={"/zenaSmjeh.png"}
            alt="zena s osmjehom pokazuje zaposlise mobilnu aplikaciju"
            width={480}
            height={548}
          />
        </div>
      </div>
    </section>
  );
};

export default PosloprimciMobilnaAplikacija;
