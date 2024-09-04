import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        {/* FOOTER INFO ***************************************************/}
        <div className={styles.footer__info}>
          {/* FOOTER SOCIAL ***************************************************/}
          <div className={styles.footer__info_social}>
            <Image
              src={"/logo.png"}
              alt="zaposlise logo image"
              width={194}
              height={30}
            />
            <div className={styles.footer__info_socialLinks}>
              <a href=""></a>
            </div>
          </div>
          {/* FOOTER NAVIGACIJA ***************************************************/}
          <div className={styles.footer__nav}></div>
          {/* FOOTER BLOG *********************************************************/}
          <div className={styles.footer__blog}></div>
          {/* FOOTER NEWSLETTER ***************************************************/}
          <div className={styles.footer__newsletter}></div>
        </div>
        {/* COPYRIGHT ***************************************************/}
        <div className={styles.footer__copy}></div>
      </div>
    </footer>
  );
};

export default Footer;
