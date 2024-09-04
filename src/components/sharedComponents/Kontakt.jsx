import React from "react";
import styles from "./kontakt.module.css";
import Image from "next/image";
import KontaktForm from "./KontaktForm";

const Kontakt = () => {
  return (
    <div className={styles.kontakt}>
      <div className={styles.kontakt__wrapper}>
        <div className={styles.kontakt__wrapper_left}>
          <h3 className={styles.kontakt__wrapper_left_title}>Javite nam se</h3>
          <div className={styles.kontakt__wrapper_left_data}>
            <a href="tel:+1012 3456 789" target="_blank">
              <div>
                <Image
                  src={"/call.jpg"}
                  alt="ikona poziva"
                  width={24}
                  height={24}
                />
              </div>
              <p>+1012 3456 789</p>
            </a>
            <a href="mailto:podrska@zaposlise.hr" target="_blank">
              <div>
                <Image
                  src={"/mail.png"}
                  alt="ikona emaila"
                  width={24}
                  height={24}
                />
              </div>
              <p>podrska@zaposlise.hr</p>
            </a>
            <a
              href="https://www.google.com/maps/place/Gornjostupni%C4%8Dka+27b,+10255,+Gornji+Stupnik/@45.7560894,15.8419352,17z/data=!3m1!4b1!4m6!3m5!1s0x4765d2555b060bb7:0x141228d34189d587!8m2!3d45.7560894!4d15.8445101!16s%2Fg%2F11jz8xhrts?entry=ttu&g_ep=EgoyMDI0MDgyNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              <div>
                <Image
                  src={"/adress.png"}
                  alt="ikona adrese"
                  width={24}
                  height={24}
                />
              </div>
              <p>Gornjostupnička 27 b Gornji Stupnik</p>
            </a>
          </div>
          <Image
            className={styles.kontakt__wrapper_left_img}
            src={"/zaposliseSvg.png"}
            alt="pozadinska slika zaposlise dekoracija"
            width={400}
            height={450}
          />
        </div>
        {/* KONTAKT FORM *****************************************/}
        <div className={styles.kontakt__wrapper_right}>
          <KontaktForm />
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
