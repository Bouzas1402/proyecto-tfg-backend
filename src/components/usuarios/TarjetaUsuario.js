import {useContext} from "react";
import {useNavigate} from "react-router-dom";

import {borrar} from "../../services";

import styles from "./tarjetausuario.module.css";

import {UsuarioContext} from "../../context/UsuarioContext";
import {TokenContext} from "../../context/TokenContext";
const React = require("react");

function TarjetaUsuario(usuario) {
  const navigate = useNavigate();
  const {setUser} = useContext(UsuarioContext);
  const {setToken} = useContext(TokenContext);

  const borrarCuenta = async () => {
    const borrarUser = await borrar();
    if (borrarUser.msg) {
      setToken(null);
      setUser(null);
      navigate("/");
    }
  };
  const {nombre, PrimerApellido, SegundoApellido, correo, creacionCuenta} = usuario.usuario;
  const creacion = new Date(creacionCuenta);
  const avatar = !usuario.usuario.avatar
    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlHBLGg_YWqrd6ffgN5Si7ju2qLQ8TbBzGDXX5H-GG6GW5dG7ptOUnkJ5cjUz_HPfsz4&usqp=CAU"
    : usuario.usuario.avatar;
  const telefono = usuario.usuario.telefono ? usuario.usuario.telefono : "No phone";
  return (
    <div className={styles.container}>
      <div className={styles.cellphonecontainer}>
        <div className={styles.movie}>
          <div className={styles.movieimg} style={{backgroundImage: `url(${avatar})`}}></div>
          <div className={styles.textmoviecont}>
            <div className={styles.mrgrid}>
              <div className={styles.col1}>
                <h1 className={styles.h1}>{correo}</h1>
                <ul className={styles.moviegen}>
                  <li>{nombre}</li>
                  <li>{PrimerApellido}</li>
                  <li>{SegundoApellido}</li>
                </ul>
              </div>
            </div>
            <div className={[styles.mrgrid, styles.ummaryrow]}>
              <div className={styles.col2}>
                <h5 className={styles.h5}>{telefono}</h5>
              </div>
            </div>
            <div className={styles.mrgrid}>
              <div className={styles.col1}>
                <p className={styles.moviedescription}>
                  Creacion de la cuenta: {creacion.getDay()}/{creacion.getMonth()}/{creacion.getFullYear()}
                </p>
              </div>
            </div>

            <button className={styles.buttonConfirmarBorrar} onClick={borrarCuenta}>
              Borrar cuenta<small className={styles.like}> X</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export {TarjetaUsuario};
