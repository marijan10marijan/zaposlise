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
              <a
                href="https://www.facebook.com/zaposlisehrvatska/"
                target="_blank"
              >
                <Image
                  src={"/metaIkona.png"}
                  alt="meta ikona link koji vodi do facebook zaposlise profila"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://www.instagram.com/zaposlise.hr/" target="_blank">
                <Image
                  src={"/instagramIkona.png"}
                  alt="instagram ikona link koja vodi do instagram zaposlise profila"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://hr.linkedin.com/company/zaposlise"
                target="_blank"
              >
                <Image
                  src={"/linkedInIkona.png"}
                  alt="linkedIn ikona link koji vodi do linkedIn zaposlise profila"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://www.youtube.com/@zaposlisehr." target="_blank">
                <Image
                  src={"/youtubeIkona.png"}
                  alt="youtube ikona link koji vodi do youtube zaposlise profila"
                  width={32}
                  height={32}
                />
              </a>
              <a href="https://www.tiktok.com/@zaposlise.hr" target="_blank">
                <Image
                  src={"/tiktokIkona.png"}
                  alt="tiktok ikona link koji vodi do tiktok zaposlise profila"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
          {/* FOOTER NAVIGACIJA ***************************************************/}
          <div className={styles.footer__nav}>
            
          </div>
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
