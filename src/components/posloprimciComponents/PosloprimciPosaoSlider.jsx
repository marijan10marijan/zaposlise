"use client";
import React, { useState, useEffect } from "react";
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
];

const preloadImages = (imageUrls) => {
  const promises = imageUrls.map((url) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = resolve;
      img.onerror = reject;
    });
  });

  return Promise.all(promises);
};

const PosloprimciPosaoSlider = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Extract image URLs from your items list
  const imageUrls = data.map((item) => item.image);

  // Preload images when component mounts
  useEffect(() => {
    preloadImages(imageUrls)
      .then(() => setImagesLoaded(true))
      .catch((error) => console.error("Error loading images:", error));
  }, [imageUrls]);

  return (
    <div
      className={styles.posao__slider}
      style={{
        "--height": "340px",
        "--quanity": data.length,
      }}
    >
      <div className={styles.posao__sliderList} style={{ "--width": "270px" }}>
        {data.map((item, index) => (
          <div
            className={styles.posao__card}
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className={styles.posao__card_name}>{item.name}</p>
            <button className={styles.posao__card_job}>
              {item.jobPosition}
            </button>
          </div>
        ))}
        {/* {data.map((item, index) => (
          <div
            className={styles.posao__card}
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <p className={styles.posao__card_name}>{item.name}</p>
            <button className={styles.posao__card_job}>
              {item.jobPosition}
            </button>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default PosloprimciPosaoSlider;
