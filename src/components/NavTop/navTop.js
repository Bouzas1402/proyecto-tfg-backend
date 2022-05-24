import React, {useContext} from "react";
import {Link} from "react-router-dom";

import style from "./navTop.module.css";

import {Context as UsuarioContext} from "../../context/UsuarioContext";

import {PerfilAvatar} from "./PerfilAvatar";
import {ButtonsOff} from "./buttonsOff";

function NavTop() {
  const {usuario} = useContext(UsuarioContext);
  return (
    <header className={style.header}>
      <div className={style.menu}></div>
      <Link to="/">
        <img className={style.img} src="" alt="Logo empresa" loading="lazy" />
      </Link>
      {usuario ? (
        <PerfilAvatar value={usuario} />
      ) : (
        <nav className={style.nav}>
          <ButtonsOff />
        </nav>
      )}
    </header>
  );
}
export {NavTop};
