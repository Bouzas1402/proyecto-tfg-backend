import React from "react";

import {Link} from "react-router-dom";

import styles from "./banner.module.css";

import logo from "../../assets/img/BouzasAndPisos.png";

function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bg}>
        <Link to="/">
          <img src={logo} alt="logo de Bouzas y Pisos" height="400px"></img>
        </Link>
        <div className={styles.text}>
          <h1>
            <b>Bouzas&Pisos</b>
          </h1>
          <p>Encontramos tu pìso ideal para entrar a vivir</p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export {Banner};
