import React from "react";
import styles from "./poslodavciMain.module.css";
import Image from "next/image";
import Link from "next/link";

const PoslodavciMain = () => {
  return (
    <div className={styles.main}>
      <div className={styles.main__wrapper}>
        {/* MAIN UPPER CONTENT **********************************************************************/}
        <div className={styles.main__upper}>
          <h1 className={styles.main__upper_title}>
            Jamčimo prijave ili je oglašavanje besplatno
          </h1>
          <p className={styles.main__upper_text}>
            Nađite idealnog kandidata u manje od 72h. Zapošljavajte brzo i
            efikasno uz smanjene troškove.
          </p>
          <Link href={"/"} className={styles.main__upper_btn}>
            Kontaktiraj nas
          </Link>
        </div>
        {/* MAIN BOTTOM CONTENT **********************************************************************/}
        <div className={styles.main__bottom}>
          <div>
            <Image
              src={"/icon1.png"}
              alt="ikona uspješne značke"
              width={60}
              height={60}
            />
            <p>46+ prosječno prijava po oglasu</p>
          </div>
          <div>
            <Image src={"/srce.png"} alt="ikona srca" width={60} height={60} />
            <p>700+ zadovoljnih korisnika</p>
          </div>
          <div>
            <Image
              src={"/time.png"}
              alt="ikona vremena"
              width={60}
              height={60}
            />
            <p>{"<"}48h do prvog kandidata</p>
          </div>
        </div>
        {/* MAIN IMAGE **********************************************************************/}
        <div className={styles.main__image_absolute}></div>
      </div>
      <div className={styles.main__image_absoluteTwo}></div>
    </div> 
  );
};

export default PoslodavciMain;
