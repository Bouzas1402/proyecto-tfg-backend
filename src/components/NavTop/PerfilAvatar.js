import React, {useContext} from "react";

import {Link} from "react-router-dom";
import styles from "./navTop.module.css";
import {UsuarioContext} from "../../context/UsuarioContext";
import {TokenContext} from "../../context/TokenContext";

import {deleteStorage} from "../../helpers/localStorage";

function PerfilAvatar(props) {
  const {setUser} = useContext(UsuarioContext);
  const {setToken} = useContext(TokenContext);

  const {avatar, role} = props.value;

  const logout = async () => {
    deleteStorage();
    setUser(null);
    setToken(null);
  };
  return (
    <ul className={styles.ulcon}>
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
      {role !== "USER_ROLE" && (
        <li className={styles.li}>
          <Link className={styles.a} to="/registroanuncio">
            Registrar anuncio
          </Link>
        </li>
      )}
      <li className={styles.li}>
        <Link onClick={logout} className={styles.a} to="/">
          Logout
        </Link>
      </li>

      <li className={styles.li}>
        <img
          src={
            avatar
              ? avatar
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlHBLGg_YWqrd6ffgN5Si7ju2qLQ8TbBzGDXX5H-GG6GW5dG7ptOUnkJ5cjUz_HPfsz4&usqp=CAU"
          }
          className={styles.avatar}
          alt="foto"
        />
      </li>
    </ul>
  );
}
export {PerfilAvatar};
