import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        {/* FOOTER INFO ***************************************************/}
        <div className={styles.footer__info}>
          {/* FOOTER SOCIAL ***************************************************/}
          <div className={styles.footer__info_social}>
            <Link href={"/"}>
              <Image
                src={"/logo.png"}
                alt="zaposlise logo image"
                width={194}
                height={30}
              />
            </Link>
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
            <p>Navigacija</p>
            <ul className={styles.footer__nav_links}>
              <li>
                <Link href={"/o-nama"}>O nama</Link>
              </li>
              <li>
                <Link href={"/kontakt"}>Kontakt</Link>
              </li>
              <li>
                <Link href={"/kodeks-ponašanja"}>Kodeks ponašanja</Link>
              </li>
            </ul>
          </div>
          {/* FOOTER BLOG *********************************************************/}
          <div className={styles.footer__blog}>
            <p>Blog</p>
            <ul className={styles.footer__blog_links}>
              <li>
                <Link href={"/savjeti"}>Savjeti</Link>
              </li>
              <li>
                <Link href={"/karijera"}>Karijera</Link>
              </li>
              <li>
                <Link href={"/vijesti"}>Vijesti</Link>
              </li>
            </ul>
          </div>
          {/* FOOTER NEWSLETTER ***************************************************/}
          <div className={styles.footer__newsletter}>
            <div className={styles.footer__newsletter_top}>
              <h5>Prijava na newsletter</h5>
              <p>
                Zelimo da prvi saznate sve novosti. Zato sugeriramo da se
                pretplatite na nas newsletter kako vam bas nista ne bi
                promaknulo.
              </p>
            </div>
            <div className={styles.footer__newsletter_bottom}>
              <div className={styles.footer__newsletter_bottomInput}>
                <input type="text" placeholder="Enter your email" />
                <button>Prijavi se</button>
              </div>
              <p>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
        {/* COPYRIGHT ***************************************************/}
        <div className={styles.footer__copy}>
          <p>©{new Date().getFullYear()} zaposlise.hr. All Right Reserved.</p>
          <ul className={styles.footer__copy_links}>
            <li>
              <Link href="/uvijeti-korištenja">Uvjeti korištenja</Link>
            </li>
            <li>
              <Link href="/politika-privatnosti">Politika privatnosti</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
