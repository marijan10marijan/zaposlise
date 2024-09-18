import React from "react";
import SliderItem from "./SliderItem";
import styles from "./posloprimciScroll.module.css";

const PosloprimciScrollMobile = ({ sliderData }) => {
  return (
    <div
      className={`${styles.slider__wrapper} ${styles.slider__wrapper_smallScreens}`}
    >
      {sliderData.map((item) => (
        <React.Fragment key={item.number}>
          <SliderItem item={item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default PosloprimciScrollMobile;
