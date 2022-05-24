import React, {useContext, useState, useEffect} from "react";
import {nanoid} from "nanoid";

import {getAnuncios as anunciosServices} from "../services";
import {Anuncios, Loader} from "../components";

function ListaAnuncios() {
  const [loading, setLoading] = useState(false);
  const [anuncios, setAnuncios] = useState([]);

  useEffect(() => {
    async function get() {
      let getAnuncios = await anunciosServices();
      if (getAnuncios.length > 0) {
        setAnuncios(getAnuncios);
        setLoading(true);
      }
    }
    get();
  }, []);

  return <div>{loading ? <Anuncios anuncios={anuncios} /> : <Loader />}</div>;
}

export {ListaAnuncios};