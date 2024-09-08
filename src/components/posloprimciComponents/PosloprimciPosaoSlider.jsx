import React from "react";
import styles from "./posloprimciPosao.module.css";

const data = [
  {
    image: "/posaoImage.png",
    name: "Marica Petrović",
    jobPosition: "kuhar",
  },
  {
    image: "/posaoImage.png",
    name: "Marica Petrović",
    jobPosition: "kuhar",
  },
  {
    image: "/posaoImage.png",
    name: "Marica Petrović",
    jobPosition: "developer",
  },
  {
    image: "/posaoImage.png",
    name: "Marica Petrović",
    jobPosition: "vozač",
  },
  {
    image: "/posaoImage.png",
    name: "Marica Petrović",
    jobPosition: "kuhar",
  },
  {
    image: "/posaoImage.png",
    name: "Marica Petrović",
    jobPosition: "developer",
  },
];

const PosloprimciPosaoSlider = () => {
  return (
    <div className={styles.posao__sliderCardBox}>
      {data.map((item, index) => (
        <article
          className={styles.posao__card}
          key={index}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "15px",
            width: "270px",
            height: "340px",
          }}
        >
          {/* <p className={styles.posao__card_name}>{item.name}</p>
          <button className={styles.posao__card_job}>{item.jobPosition}</button> */}
        </article>
      ))}
    </div>
  );
};

export default PosloprimciPosaoSlider;
