"use client";

import React, { useState } from "react";
import styles from "./kontaktForm.module.css";

const KontaktForm = () => {
  /* STATES FOR INPUTS  ************************************/
  const [radioInput, setRadioInput] = useState("general");
  const [ime, setIme] = useState("");
  const [tvrtka, setTvrtka] = useState("");
  const [email, setEmail] = useState("");
  const [mobitel, setMobitel] = useState("");
  const [poruka, setPoruka] = useState("");

  /* CHANGE RADIO INPUT FUNCTION  ***************************/
  const handleRadioButton = (e) => {
    setRadioInput(e.target.value);
  };

  /* URL ENDPOINT FOR SUBMITING DATA ***************************/
  const url = "";

  /* SUBMIT DATA FROM FORM FUNCTION *******************************/
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { ime, tvrtka, email, mobitel, radioInput, poruka };

    // const response = await fetch(url, {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    // const json = await response.json();
    // console.log(json);
    console.log(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* FIRST ITEM IN FLEX ******************************** */}
      <div className={styles.form__flexInputs}>
        <div className={styles.form__flexInputs_box}>
          <label htmlFor="ime">Ime i prezime</label>
          <input
            type="text"
            id="ime"
            value={ime}
            onChange={(e) => setIme(e.target.value)}
            placeholder="Unesite vaše ime i prezime"
          />
        </div>
        <div className={styles.form__flexInputs_box}>
          <label htmlFor="tvrtka">Naziv tvrtke</label>
          <input
            type="text"
            id="tvrtka"
            value={tvrtka}
            onChange={(e) => setTvrtka(e.target.value)}
            placeholder="Unesite naziv tvrtke"
          />
        </div>
      </div>
      {/* SECOND ITEM IN FLEX ******************************** */}
      <div className={styles.form__flexInputs}>
        <div className={styles.form__flexInputs_box}>
          <label htmlFor="email">Email adresa</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Unesite kontakt email"
          />
        </div>
        <div className={styles.form__flexInputs_box}>
          <label htmlFor="number">Kontakt broj</label>
          <input
            type="number"
            id="number"
            value={mobitel}
            onChange={(e) => setMobitel(e.target.value)}
            placeholder="Unesite broj mobitela"
          />
        </div>
      </div>
      {/* THIRD ITEM IN FLEX ******************************** */}
      <div className={styles.form__flexRadios}>
        <div className={styles.form__flexRadios_box}>
          <input
            type="radio"
            id="general"
            value={"general"}
            checked={radioInput === "general"}
            onChange={handleRadioButton}
          />
          <label htmlFor="general">General Inquiry</label>
        </div>
        <div className={styles.form__flexRadios_box}>
          <input
            type="radio"
            id="team"
            value={"team"}
            checked={radioInput === "team"}
            onChange={handleRadioButton}
          />
          <label htmlFor="team">Joining Our Team</label>
        </div>
        <div className={styles.form__flexRadios_box}>
          <input
            type="radio"
            id="proposal"
            value={"proposal"}
            checked={radioInput === "proposal"}
            onChange={handleRadioButton}
          />
          <label htmlFor="proposal">Proposal</label>
        </div>
      </div>
      {/* FOURTH ITEM IN FLEX ******************************** */}
      <div className={styles.form__flexInputs_box}>
        <label htmlFor="poruka">Poruka</label>
        <textarea
          name=""
          id="poruka"
          value={poruka}
          onChange={(e) => setPoruka(e.target.value)}
          placeholder="Unesite vašu poruku ovdje"
        ></textarea>
      </div>
      {/* FIFTH ITEM IN FLEX ******************************** */}
      <button className={styles.form__button}>Pošalji poruku</button>
    </form>
  );
};

export default KontaktForm;
