import {useContext} from "react";

import {guardarAnuncios, deleteAnuncioGuardado, deleteAnuncio} from "../../services/index.js";

import styles from "./anuncio.module.css";

import {UsuarioContext} from "../../context/UsuarioContext";

const React = require("react");

function Anuncio(props) {
  let {usuario} = useContext(UsuarioContext);
  const location = window.location.href;
  const {
    guardado,
    anuncio: {
      _id,
      titulo,
      descripcion,
      fotos,
      direccion: {nombreCalle, piso, portal, provincia, ciudad},
      caracteristicas: {baños, dormitorios, m2},
      precioMes,
    },
  } = props;
  const guardar = async () => {
    await guardarAnuncios(_id);
  };
  const borrarFavorito = async () => {
    await deleteAnuncioGuardado(_id);
  };
  const borrarAnuncio = async () => {
    await deleteAnuncio(_id);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        {nombreCalle}, portal {portal} - {piso}, {ciudad} provincia {provincia}
      </h1>
      <div>
        <img className={styles.img} src={fotos[0].url} alt={fotos[0].titulo} />
      </div>
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}>Dormitorios: {dormitorios}</li>
          <li className={styles.li}>Baños: {baños}</li>
          <li className={styles.li}>metros cuadrados: {m2} m2</li>
        </ul>
      </div>
      <div className={styles.product}>
        <h1 className={styles.h1}>{titulo}</h1>
        <p className={[styles.desc, styles.p]}>{descripcion}</p>
        <h2 className={styles.h2}>{precioMes} €/mes </h2>
        {location.includes("/perfil") ? (
          guardado ? (
            <button className={[styles.delete, styles.button]} onClick={borrarFavorito}>
              Quitar Favoritos<small className={styles.like}>✘</small>
            </button>
          ) : (
            <button className={[styles.delete, styles.button]} onClick={borrarAnuncio}>
              Borrar<small className={styles.like}>♻</small>
            </button>
          )
        ) : usuario ? (
          <button className={[styles.add, styles.button]} onClick={guardar}>
            Favoritos<small className={styles.like}>♥</small>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
export {Anuncio};
