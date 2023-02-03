import React from "react";
import logo from "./logo.png";
import styles from "./Navbar.module.css";
//src\assets\images\logo.png

export const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <img className={styles.logoWeb} src={logo} alt="logo" />
      <h1>Movie Gallery</h1>
    </div>
  );
};
