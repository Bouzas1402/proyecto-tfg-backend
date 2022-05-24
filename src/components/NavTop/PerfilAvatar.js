import {useState, useEffect} from "react";
import {Link} from "react-router-dom";

import {UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from "reactstrap";

import {useUsuario} from "../../hooks";

import styles from "./navTop.module.css";

const React = require("react");

function PerfilAvatar(usuario) {
  const {logout} = useUsuario();
  return (
    <nav className={styles.nav}>
      <ul className={[styles.ul]}>
        <li className={styles.li}>
          <Link className={styles.a} to="/perfil">
            Perfil
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.a} to="/">
            Anuncios
          </Link>
        </li>
        <li className={styles.li}>
          <Link onClick={logout} className={styles.a} to="/">
            Logout
          </Link>
        </li>
        <li className={styles.li}>
          <img
            src={
              usuario.value.avatar
                ? usuario.value.avatar
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlHBLGg_YWqrd6ffgN5Si7ju2qLQ8TbBzGDXX5H-GG6GW5dG7ptOUnkJ5cjUz_HPfsz4&usqp=CAU"
            }
            className={styles.img}
            alt="foto"
            loading="lazy"
          />
        </li>
      </ul>
    </nav>
  );
}
export {PerfilAvatar};
