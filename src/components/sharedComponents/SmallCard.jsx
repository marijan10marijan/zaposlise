import React from "react";
import styles from "./smallCard.module.css";

const SmallCard = ({ card }) => {
  return (
    <div className={styles.flex__smallcard}>
      <div className={styles.flex__smallcard_icon}>{card.icon}</div>
      <div className={styles.flex__smallcard_content}>
        <h5>{card.title}</h5>
        <p>{card.text}</p>
      </div>
    </div>
  );
};

export default SmallCard;
