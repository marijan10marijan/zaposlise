"use client";
import React, { useEffect, useState } from "react";
import styles from "./posloprimciScroll.module.css";
import PosloprimciScrollMobile from "./PosloprimciScrollMobile";
import SliderItem from "./SliderItem";

const sliderData = [
  {
    number: 1,
    title: "Netrebaš životopis",
    text: "Danas, životopis više nije ključan element prijave na posao. Naša platforma je dizajnirana da tvoj profil postane snažan alat, jednostavno pretvarajući osnovne informacije u impresivnu prijavu. Ako već imaš životopis, možeš ga priložiti na svoj profil.",
    backgroundColor: "rgba(21, 101, 216, 1)",
    backgroundWithOpacity: "rgba(21, 101, 216, 0.1)",
    image: "/sliderImage1.png",
  },
  {
    number: 2,
    title: "Reci nam što voliš",
    text: "Bilo da samo razgledavaš oglase ili aktivno razmišljaš o bijegu od trenutnog posla, ti imaš kontrolu nad vidljivošću svog profila. Mi cijenimo tvoju privatnost i nitko neće saznati da koristiš Zaposlise, ako ti to ne želiš.",
    backgroundColor: "rgba(25, 187, 112, 1)",
    backgroundWithOpacity: "rgba(25, 187, 112, 0.1)",
    image: "/sliderImage2.png",
  },
  {
    number: 3,
    title: "Čekaj pozive od poslodavaca ili “svajpaj” sam",
    text: "Samo jedan pokret kažiprsta je dovoljan da poslodavcu pokažeš svoj interes. Ako si tip osobe koja voli dugo razmišljati, jednostavno preskoči oglas.",
    backgroundColor: "rgba(255, 138, 138, 1)",
    backgroundWithOpacity: "rgba(255, 138, 138, 0.1)",
    image: "/sliderImage3.png",
  },
  {
    number: 4,
    title: "Razgovaraj s njima i zaposlise",
    text: "Poslodavac te je odabrao kao idealnog kandidata? Sjajno! Sada možeš aktivirati direktan chat i postavljati dodatna pitanja, bez brige o formalnostima prvog službenog razgovora za posao. Iskoristi priliku za neformalnu i otvorenu komunikaciju.",
    backgroundColor: "rgba(249, 200, 57, 1)",
    backgroundWithOpacity: "rgba(249, 200, 57, 0.1)",
    image: "/sliderImage4.png",
  },
];

const PosloprimciScroll = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= previousSectionHeight &&
      scrollLocked &&
      !isAnimating
    ) {
      setInSliderSection(true);
      e.preventDefault();

      if (e.deltaY > 0 && activeItem < sliderData.length - 1) {
        startAnimation();
      } else if (e.deltaY < 0 && activeItem > 0) {
        setActiveItem((prev) => prev - 1);
      }
    }
  };

  useEffect(() => {
    const updateWidth = () => setScreenWidth(window.innerWidth);
    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [screenWidth, activeItem]);

  return (
    <section className={styles.slider}>
      {screenWidth >= 1040 ? (
        <div className={styles.slider__wrapper}>
          {sliderData.map((item, index) => (
            <div
              key={item.number}
              className={`${styles.slider__item} ${
                index === activeItem ? styles.active : ""
              }`}
            >
              <SliderItem item={item} />
            </div>
          ))}
        </div>
      ) : (
        <PosloprimciScrollMobile sliderData={sliderData} />
      )}
    </section>
  );
};

export default PosloprimciScroll;
