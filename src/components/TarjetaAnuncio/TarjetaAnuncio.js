import {useContext} from "react";

import {TokenContext} from "../../context/UsuarioContext";

import {guardarAnuncios, deleteAnuncioGuardado, deleteAnuncio} from "../../services/index.js";

import styles from "./tarjetanuncio.module.css";

const React = require("react");

function TarjetaAnuncio(props) {
  console.log(props);
  return (
    <div className={styles.container}>
      <h1>AAAAAAAAA</h1>
    </div>
  );
}
export {TarjetaAnuncio};
