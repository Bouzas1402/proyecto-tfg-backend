import {useContext} from "react";

import {guardarAnuncios} from "../../services/index.js";

import styles from "./anuncio.module.css";

import {Context as TokenContext} from "../../context/TokenContext.js";

const React = require("react");

function Anuncio(anuncio) {
  let {jwt} = useContext(TokenContext);
  const {
    _id,
    titulo,
    descripcion,
    fotos,
    direccion: {nombreCalle, piso, portal, provincia, ciudad},
    caracteristicas: {baños, dormitorios, m2},
    precioMes,
  } = anuncio.anuncio;

  const handleClick = async () => {
    await guardarAnuncios(_id);
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
        {jwt ? (
          <button className={[styles.add, styles.button]} onClick={handleClick}>
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
