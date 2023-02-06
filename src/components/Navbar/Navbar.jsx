import React from "react";
import logo from "../../assets/images/logo.png";
import styles from "./Navbar.module.css";
//src\assets\images\logo.png

export const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <img className={styles.logoWeb} src={logo} alt="logo" />
      <h1 className={styles.nameWeb}>Movie Gallery</h1>
    </div>
  );
};
