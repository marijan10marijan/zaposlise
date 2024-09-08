import React from "react";
import styles from "./posloprimciSlider.module.css";
import Image from "next/image";
 
const SliderItem = ({ item }) => {
  return (
    <div className={styles.slider__box}>
      <div
        className={styles.slider__left}
        style={{ background: item.backgroundWithOpacity }}
      >
        <p
          style={{ color: item.backgroundColor, opacity: 0.15 }}
          className={styles.slider__left_number}
        >
          {item.number}
        </p>
        <p
          className={styles.slider__left_title}
          style={{ color: item.backgroundColor }}
        >
          {item.title}
        </p>
        <p className={styles.slider__left_text}>{item.text}</p>
      </div>
      <div
        className={styles.slider__right}
        style={{ backgroundColor: item.backgroundColor }}
      >
        <Image
          src={item.image}
          alt={`slika koja opisuje naslov: ${item.title}`}
          width={334}
          height={647}
        />
      </div>
    </div>
  );
};

export default SliderItem;
