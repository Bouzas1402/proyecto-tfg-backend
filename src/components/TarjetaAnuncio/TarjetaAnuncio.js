import React, {useState} from "react";

import {useLocation} from "react-router-dom";

import {nanoid} from "nanoid";

import {Carousel} from "./Carousel";

import styles from "./tarjetanuncio.module.css";

function TarjetaAnuncio() {
  const location = useLocation();
  const [anuncio] = useState(location.state);
  const [direccion] = useState(location.state.direccion);
  const [caracteristicas] = useState(location.state.caracteristicas);
  const [equipamiento] = useState(location.state.caracteristicas.equipamiento);
  const [zonasComunes] = useState(location.state.caracteristicas.zonasComunes);
  const [otros] = useState(location.state.caracteristicas.otros);

  console.log(anuncio);
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>
        {direccion && direccion.provincia} - {direccion.ciudad}, {direccion.nombreCalle} {direccion.portal}{" "}
        {direccion.piso && direccion.piso}
      </h1>

      <Carousel fotos={anuncio.fotos} />
      <h2 className={styles.h2}> {anuncio.titulo}</h2>
      <p className={styles.p}>{anuncio.descripcion}</p>
      <h2 className={styles.h2}> {anuncio.precioMes} € al mes</h2>
      <div className={styles.lista}>
        <ol>
          <li className={styles.li}>Dormitorios: {caracteristicas.dormitorios}</li>
          <li className={styles.li}>Baños: {caracteristicas.baños}</li>
          <li className={styles.li}>Metros2: {caracteristicas.m2}</li>
          {equipamiento.length > 0 && (
            <li className={styles.li}>
              Equipamiento
              <ol className={styles.ol}>
                {equipamiento.map((e) => (
                  <li className={styles.li} key={nanoid()}>
                    {e}
                  </li>
                ))}
              </ol>
            </li>
          )}
          {zonasComunes.length > 0 && (
            <li className={styles.li}>
              Zonas Comunes:
              <ol className={styles.ol}>
                {zonasComunes.map((z) => (
                  <li className={styles.li} key={nanoid()}>
                    {z}
                  </li>
                ))}
              </ol>
            </li>
          )}
          {otros.length > 0 && (
            <li className={styles.li}>
              Otros:
              <ol className={styles.ol}>
                {otros.map((o) => (
                  <li className={styles.li} key={nanoid()}>
                    {o}
                  </li>
                ))}
              </ol>
            </li>
          )}
        </ol>
      </div>
    </div>
  );
}
export {TarjetaAnuncio};
