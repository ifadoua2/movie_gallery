import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Addlogo from "../../assets/images/Addlogo.png";
import styles from "./Navbar.module.css";
//src\assets\images\logo.png

export const Navbar = () => {
  return (
    <div className={styles.NavbarContainer}>
      <img className={styles.logoWeb} src={logo} alt="logo" />
      <Link to={"/"} className={styles.nameWeb}>
        <h1>Movie Gallery</h1>
      </Link>
      <div>
        <Link to={"/form"}>
          <img className={styles.logoAdd} src={Addlogo} alt="logo add" />
        </Link>
      </div>
    </div>
  );
};
