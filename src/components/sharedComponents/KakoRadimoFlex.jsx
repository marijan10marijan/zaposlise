import React from "react";
import styles from "./kakoRadimoFlex.module.css";
import SmallCard from "./SmallCard";
import Image from "next/image";

const smallCards = [
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40.502 13.5H7.50195C6.67353 13.5 6.00195 14.1716 6.00195 15V39C6.00195 39.8284 6.67353 40.5 7.50195 40.5H40.502C41.3304 40.5 42.002 39.8284 42.002 39V15C42.002 14.1716 41.3304 13.5 40.502 13.5Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31.5 40.5V10.5C31.5 9.70435 31.1839 8.94129 30.6213 8.37868C30.0587 7.81607 29.2956 7.5 28.5 7.5H19.5C18.7044 7.5 17.9413 7.81607 17.3787 8.37868C16.8161 8.94129 16.5 9.70435 16.5 10.5V40.5"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Pristup mnoštvu kvalificiranih kandidata",
    text: "Povezujemo vas s najboljim talentima. Prosječan broj prijava po oglasu je preko 35 kandidata",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9688 18.6953H5.96875V9.69531"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35.6672 12.3327C34.1351 10.8006 32.3161 9.58519 30.3142 8.75599C28.3124 7.92679 26.1668 7.5 24 7.5C21.8332 7.5 19.6876 7.92679 17.6857 8.75599C15.6838 9.58519 13.8649 10.8006 12.3327 12.3327L5.96875 18.6967"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.0312 29.3047H42.0312V38.3047"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.332 35.6686C13.8642 37.2008 15.6831 38.4162 17.685 39.2454C19.6869 40.0746 21.8325 40.5014 23.9993 40.5014C26.1661 40.5014 28.3117 40.0746 30.3136 39.2454C32.3154 38.4162 34.1344 37.2008 35.6666 35.6686L42.0305 29.3047"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Optimizirani proces zapošljavanja",
    text: "Pozdravite efikasnost i produktivnost!",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.5 12H4.5C3.67157 12 3 12.6716 3 13.5V34.5C3 35.3284 3.67157 36 4.5 36H43.5C44.3284 36 45 35.3284 45 34.5V13.5C45 12.6716 44.3284 12 43.5 12Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 12L45 22.5"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 36L45 25.5"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12L3 22.5"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 36L3 25.5"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Smanjeni troškovi",
    text: "Inovativan pristup koji Vam smanjenje troškova regrutiranja",
  },
  {
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 13.5V24H34.5"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Brzo do kandidata",
    text: "Ubrzanje procesa zapošljavanja uz uštedu vremena i resursa",
  },
  {
    icon: (
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 42.5C33.9411 42.5 42 34.4411 42 24.5C42 14.5589 33.9411 6.5 24 6.5C14.0589 6.5 6 14.5589 6 24.5C6 34.4411 14.0589 42.5 24 42.5Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M24 30.5C28.1421 30.5 31.5 27.1421 31.5 23C31.5 18.8579 28.1421 15.5 24 15.5C19.8579 15.5 16.5 18.8579 16.5 23C16.5 27.1421 19.8579 30.5 24 30.5Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.9629 37.8826C13.0928 35.6612 14.8154 33.7957 16.9399 32.4927C19.0645 31.1897 21.5082 30.5 24.0005 30.5C26.4929 30.5 28.9366 31.1897 31.0611 32.4926C33.1857 33.7956 34.9083 35.6611 36.0382 37.8826"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Personalizirani ",
    text: "Personalizirani pristup kandidatima",
  },
  {
    icon: (
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.75 38C30.4485 38 37.5 30.9485 37.5 22.25C37.5 13.5515 30.4485 6.5 21.75 6.5C13.0515 6.5 6 13.5515 6 22.25C6 30.9485 13.0515 38 21.75 38Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M32.8867 33.3867L41.9993 42.4993"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Moderan ATS ",
    text: "Jednostavan i organiziran pregled kandidata",
  },
  {
    icon: (
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 42.5H21"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.0576 4.20434C19.4965 7.05698 7.58581 18.456 18.0006 36.4988H30.0006C40.1989 18.4688 28.4624 7.07311 24.9387 4.2104C24.6731 3.99449 24.3415 3.87611 23.9992 3.87501C23.6569 3.8739 23.3246 3.99014 23.0576 4.20434V4.20434Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.8508 21.3789L7.97267 28.4327C7.82584 28.6089 7.72137 28.8164 7.6673 29.0393C7.61322 29.2622 7.61097 29.4945 7.66072 29.7184L9.97877 40.1496C10.034 40.3982 10.1517 40.6287 10.3207 40.8193C10.4897 41.0099 10.7044 41.1543 10.9447 41.239C11.1849 41.3236 11.4428 41.3457 11.6939 41.3031C11.945 41.2605 12.1812 41.1546 12.3801 40.9955L18.0008 36.4989"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.0371 21.2461L40.0282 28.4353C40.175 28.6115 40.2795 28.819 40.3335 29.0419C40.3876 29.2648 40.3899 29.4971 40.3401 29.721L38.0221 40.1522C37.9668 40.4009 37.8491 40.6314 37.6802 40.822C37.5112 41.0125 37.2964 41.157 37.0562 41.2416C36.8159 41.3262 36.5581 41.3483 36.3069 41.3057C36.0558 41.2631 35.8197 41.1572 35.6207 40.9981L30 36.5015"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.9492 20C24.7776 20 25.4492 19.3284 25.4492 18.5C25.4492 17.6716 24.7776 17 23.9492 17C23.1208 17 22.4492 17.6716 22.4492 18.5C22.4492 19.3284 23.1208 20 23.9492 20Z"
          fill="#1A1D1E"
        />
      </svg>
    ),
    title: "Brendirani pristup",
    text: "Brand indentitet uz našu kreativu ",
  },
  {
    icon: (
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.99805 20H14.998V39.5H5.99805C5.60022 39.5 5.21869 39.342 4.93739 39.0607C4.65608 38.7794 4.49805 38.3978 4.49805 38V21.5C4.49805 21.1022 4.65608 20.7206 4.93739 20.4393C5.21869 20.158 5.60022 20 5.99805 20V20Z"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.998 20L22.498 5C23.286 5 24.0662 5.15519 24.7941 5.45672C25.5221 5.75825 26.1835 6.20021 26.7407 6.75736C27.2978 7.31451 27.7398 7.97595 28.0413 8.7039C28.3429 9.43185 28.498 10.2121 28.498 11V15.5H40.0997C40.5251 15.5 40.9456 15.5905 41.3333 15.7654C41.7211 15.9403 42.0672 16.1957 42.3487 16.5146C42.6303 16.8335 42.8407 17.2086 42.9662 17.6151C43.0917 18.0215 43.1293 18.45 43.0765 18.8721L40.8265 36.8721C40.7358 37.5977 40.3833 38.2651 39.8351 38.749C39.2869 39.2329 38.5809 39.5 37.8497 39.5H14.998"
          stroke="#1A1D1E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Kompletna usluga",
    text: "Potpuna usluga spremnu za vas uz podršku 24/7",
  },
];

const KakoRadimoFlex = () => {
  return (
    <div className={styles.flex}>
      {/* FLEX TOP CONTAINER *********************************************/}
      <div className={styles.flex__container}>
        {/* FLEX BIG CARD ONE  *********************************************/}
        <div className={styles.flex__section}>
          <div className={styles.bigCard}>
            <div className={styles.bigCard__image}>
              <Image
                src={"/mobile-app.png.png"}
                width={403}
                height={436}
                alt="pozadinska slika na kartici"
              />
            </div>
            <div className={styles.bigCard__content}>
              <Image
                src={"/srce.png"}
                alt="slika srca zelene boje"
                width={60}
                height={60}
              />
              <div>
                <h5>Garancija prijava kandidata</h5>
                <p>
                  Recite zbogom praznim oglasima za posao! Jamčimo prijave na
                  nova radna mjesta.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* SMALL CARDS GRID  *********************************************/}
        <div className={styles.flex__section}>
          <div className={styles.flex__smallCards}>
            {smallCards.slice(0, 4).map((card) => (
              <SmallCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
      {/* FLEX BOTTOM CONTAINER ******************************************/}
      <div className={styles.flex__container}>
        {/* SMALL CARDS GRID  *********************************************/}
        <div className={styles.flex__section}>
          <div className={styles.flex__smallCards}>
            {smallCards.slice(4).map((card) => (
              <SmallCard key={card.title} card={card} />
            ))}
          </div>
        </div>
        {/* FLEX BIG CARD TWO  *********************************************/}
        <div className={styles.flex__section}>
          <div className={styles.bigCardTwo}>
            <div className={styles.bigCardTwo__image}>
              <Image
                src={"/manager.png"}
                width={380}
                height={588}
                alt="pozadinska slika na kartici"
              />
            </div>
            <div className={styles.bigCardTwo__content}>
              <Image
                src={"/check.png"}
                alt="slika srca zelene boje"
                width={60}
                height={60}
              />
              <div>
                <h5>Poruka zahvale za nekvalificirane kandidate</h5>
                <p>
                  Predefinirana poruka zahvalnica dostupna na klik mišem kao
                  odgovor kandidatima 
                </p>
              </div>
              <div>
                <h5>Automatska predselekcija kandidata</h5>
                <p>
                  Podesite ono što je Vama važno i pustite naš sustav da Vam
                  označi one najbolje kandidate te ih rangira prema znanju i
                  iskustvu 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KakoRadimoFlex;
