import React, {useState} from "react";
import {Link} from "react-router-dom";

import {useContext} from "react";

import {UsuarioContext} from "../../context/UsuarioContext";

import {guardarAnuncios, deleteAnuncioGuardado, deleteAnuncio} from "../../services/index.js";

import styles from "./anuncio.module.css";

function Anuncio(props) {
  let {usuario} = useContext(UsuarioContext);
  const [guardado] = useState(props.guardado);
  const [anuncio] = useState(props.anuncio);

  const location = window.location.href;

  const guardar = async () => {
    await guardarAnuncios(anuncio._id);
  };
  const borrarFavorito = async () => {
    await deleteAnuncioGuardado(anuncio._id);
  };
  const borrarAnuncio = async () => {
    await deleteAnuncio(anuncio._id);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        {anuncio.direccion.nombreCalle}, portal {anuncio.direccion.portal} - {anuncio.direccion.piso},{" "}
        {anuncio.direccion.ciudad} provincia {anuncio.direccion.provincia}
      </h1>
      <div>
        <img className={styles.img} src={anuncio.fotos ? anuncio.fotos[0].url : ""} alt={anuncio.fotos[0].titulo} />
      </div>
      <div>
        <ul className={styles.ul}>
          <li className={styles.li}>Dormitorios: {anuncio.caracteristicas.dormitorios}</li>
          <li className={styles.li}>Baños: {anuncio.caracteristicas.baños}</li>
          <li className={styles.li}>metros cuadrados: {anuncio.caracteristicas.m2} m2</li>
        </ul>
      </div>
      <div className={styles.product}>
        <Link to={"/tarjetanuncio"} state={anuncio}>
          <h1 className={styles.h1}>{anuncio.titulo}</h1>
        </Link>
        <p className={[styles.desc, styles.p]}>{anuncio.descripcion}</p>
        <h2 className={styles.h2}>{anuncio.precioMes} €/mes </h2>
        {location.includes("/perfil") ? (
          guardado ? (
            <button className={styles.delete} onClick={borrarFavorito}>
              Quitar Favoritos<small className={styles.like}>✘</small>
            </button>
          ) : (
            <button className={styles.delete} onClick={borrarAnuncio}>
              Borrar<small className={styles.like}>♻</small>
            </button>
          )
        ) : usuario ? (
          <button className={styles.add} onClick={guardar}>
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
