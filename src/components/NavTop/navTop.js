import React, {useContext} from "react";
import {NavLink} from "react-router-dom";

import styles from "./navTop.module.css";

import {UsuarioContext} from "../../context/UsuarioContext";

import {PerfilAvatar} from "./PerfilAvatar";
import {ButtonsOff} from "./buttonsOff";

function NavTop() {
  const {usuario} = useContext(UsuarioContext);
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={styles.logo} to="/">
          Bouzas&Pisos
        </NavLink>
        {usuario ? <PerfilAvatar value={usuario} /> : <ButtonsOff />}
      </nav>
    </header>
  );
}
export {NavTop};
