import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <nav className={styles.nav__wrapper}>
        <h1>Navbar</h1>
        <p>=</p>
      </nav>
    </nav>
  );
};

export default Navbar;
