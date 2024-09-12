import React from "react";
import styles from "./kakoRadimo.module.css";
import Link from "next/link";
import KakoRadimoFlex from "./KakoRadimoFlex";

const KakoRadimo = () => {
  return (
    <div className={styles.rad}>
      <div className={styles.rad__wrapper}>
        <div className={styles.rad__header}>
          <h3 className={styles.rad__header_title}>Kako zaposlise radi?</h3>
          <div className={styles.rad__header_contentBox}>
            <p className={styles.rad__header_text}>
              Od potrage za kandidatima do zapošljavanja. Iskoristite naš
              sustav, metodologiju i oglase tipa INVITE AI koji uključuju
              najnovije tehnologije, medije i usluge za stvaranje ugodnog
              iskustva zapošljavanja za stručnjake ljudskih resursa i kandidate.{" "}
            </p>
            <Link href={"/kontakt"} className={styles.rad__header_link}>
              Kontaktirajte nas
            </Link>
          </div>
        </div>
        <KakoRadimoFlex />
      </div>
    </div>
  );
};

export default KakoRadimo;
