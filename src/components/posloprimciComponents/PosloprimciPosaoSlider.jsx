import React from "react";
import styles from "./posloprimciPosao.module.css";

const data = [
  {
    image: "/cardBackground1.png",
    name: "Marica Petrović",
    jobPosition: "kuhar",
  },
  {
    image: "/cardBackground2.png",
    name: "Marica Petrović",
    jobPosition: "kuhar",
  },
  {
    image: "/cardBackground3.png",
    name: "Marica Petrović",
    jobPosition: "developer",
  },
  {
    image: "/cardBackground4.png",
    name: "Marica Petrović",
    jobPosition: "vozač",
  },
  {
    image: "/cardBackground5.png",
    name: "Marica Petrović",
    jobPosition: "kuhar",
  },
  {
    image: "/cardBackground6.png",
    name: "Marica Petrović",
    jobPosition: "developer",
  },
  {
    image: "/cardBackground6.png",
    name: "Marica Petrović",
    jobPosition: "developer",
  },
  {
    image: "/cardBackground6.png",
    name: "Marica Petrović",
    jobPosition: "developer",
  },
];

const PosloprimciPosaoSlider = () => {
  return (
    <>
      {data.map((item, index) => (
        <article
          className={styles.posao__card}
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
          }}
        >
          <p className={styles.posao__card_name}>{item.name}</p>
          <button className={styles.posao__card_job}>{item.jobPosition}</button>
        </article>
      ))}
    </>
  );
};

export default PosloprimciPosaoSlider;
