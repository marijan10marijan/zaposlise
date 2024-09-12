"use client";
import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  const isActive = (href) => href === path;

  return (
    <nav className={styles.nav}>
      <nav className={styles.nav__wrapper}>
        <div className={styles.nav__icon}>
          <Link href={"/"}>
            <Image
              src={"/logo.png"}
              alt="zaposlise logo slika"
              width={194}
              height={30}
            />
          </Link>
        </div>
        <ul className={styles.nav__links}>
          <li>
            <Link
              href={"/"}
              className={isActive("/") ? styles.nav__links_active : ""}
            >
              Naslovna
            </Link>
          </li>
          <li>
            <Link
              href={"/poslodavci"}
              className={
                isActive("/poslodavci") ? styles.nav__links_active : ""
              }
            >
              Poslodavci
            </Link>
          </li>
          <li>
            <Link
              href={"/posloprimci"}
              className={
                isActive("/posloprimci") ? styles.nav__links_active : ""
              }
            >
              Posloprimci
            </Link>
          </li>
          <li>
            <Link
              href={"/kalkulator"}
              className={
                isActive("/kalkulator") ? styles.nav__links_active : ""
              }
            >
              Kalkulator
            </Link>
          </li>
          <li>
            <Link
              href={"/blog"}
              className={isActive("/blog") ? styles.nav__links_active : ""}
            >
              Blog
            </Link>
          </li>
        </ul>
        <div className={styles.nav__buttons}>
          <Link href={"/"} className={styles.nav__buttons_prijava}>
            Prijavi Se
          </Link>
          <Link href={"/"} className={styles.nav__buttons_objava}>
            Objavi Posao
          </Link>
        </div>
        <div className={styles.nav__menu}>
          <Link href={"/"}>Sign in</Link>
          <Image
            src={"/menu.png"} 
            alt="hamburger menu ikona"
            width={15}
            height={15}
          />
        </div>
      </nav>
    </nav>
  );
};

export default Navbar;
