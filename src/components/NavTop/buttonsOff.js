import React from "react";

import {Link} from "react-router-dom";

import styles from "./navTop.module.css";

function ButtonsOff() {
  return (
    <ul className={styles.ulsin}>
      <li className={styles.li}>
        <Link className={styles.a} to="/login">
          Logearse
        </Link>
      </li>
      <li className={styles.li}>
        <Link className={styles.a} to="/registro">
          Registrarse
        </Link>
      </li>
    </ul>
  );
}
export {ButtonsOff};
