"use client";
import React, { useState } from "react";
import styles from "./posloprimciSlider.module.css";
import SliderItem from "./SliderItem";

const sliderData = [
  {
    number: 1,
    title: "Netrebaš životopis",
    text: "Danas, životopis više nije ključan element. Naša platforma je dizajnirana da tvoj profil postane snažan alat, jednostavno pretvarajući osnovne informacije u impresivnu prijavu. Ako već imaš životopis, možeš ga priložiti na svoj profil.",
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

const PosloprimciSlider = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleActiveItem = () => {
    const sliderLength = sliderData.length;
    if (activeItem >= sliderLength - 1) {
      setActiveItem(0);
    } else {
      setActiveItem((prev) => prev + 1);
    }
  };

  return (
    <section className={styles.slider}>
      <div className={styles.slider__wrapper} onClick={handleActiveItem}>
        {sliderData.map((item, index) => (
          <React.Fragment key={item.number}>
            {index === activeItem ? <SliderItem item={item} /> : null}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default PosloprimciSlider;
