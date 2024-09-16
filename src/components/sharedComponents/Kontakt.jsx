import React from "react";
import styles from "./kontakt.module.css";
import KontaktForm from "./KontaktForm";
import KontaktJaviteNamSe from "./KontaktJaviteNamSe";

const Kontakt = () => {
  return (
    <div className={styles.kontakt}>
      <div className={styles.kontakt__wrapper}>
        <KontaktJaviteNamSe />
        {/* KONTAKT FORM *****************************************/}
        <div className={styles.kontakt__wrapper_right}>
          <KontaktForm />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
