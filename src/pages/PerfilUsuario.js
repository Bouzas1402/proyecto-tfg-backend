import React, {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {UsuarioContext} from "../context/UsuarioContext";

import {TarjetaUsuario, Anuncios, Loader} from "../components/index";

import {getAnunciosGuardados, getAnunciosSubidos} from "../services";

import styles from "../components/Anuncios/anuncio.module.css";

const PerfilUsuario = () => {
  const navigate = useNavigate();
  const {usuario} = useContext(UsuarioContext);
  const [loading, setLoading] = useState(false);
  const [anuncios, setAnuncios] = useState([]);
  const [anuncioSubidos, setAnuncioSubidos] = useState(false);

  if (!usuario) navigate("/");

  useEffect(() => {
    async function get() {
      let anunciosGuardados = await getAnunciosGuardados();
      if (anunciosGuardados.length > 0) {
        setAnuncios(anunciosGuardados);
        setLoading(true);
      }

      if (usuario.role === "VENTAS_ROLE" || usuario.role === "ADMIN_ROLE") {
        let anuncioSubidos = await getAnunciosSubidos();
        if (anuncioSubidos.length > 0) {
          setAnuncioSubidos(anuncioSubidos);
        }
      }
    }
    get();
  }, [usuario.role]);
  return (
    <div>
      <TarjetaUsuario usuario={usuario} />

      {loading ? (
        <>
          <h1 className={styles.h1}>Anuncios guardados:</h1>
          <Anuncios anuncios={anuncios} guardado={true} />
        </>
      ) : (
        <Loader />
      )}

      {anuncioSubidos ? (
        <>
          <h1 className={styles.h1}>Anuncios Subidos:</h1>
          <Anuncios anuncios={anuncioSubidos} guardado={false} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export {PerfilUsuario};
