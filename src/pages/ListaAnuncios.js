import React, {useState, useEffect} from "react";

import {getAllPaginated} from "../services";
import {Anuncios, Loader} from "../components";

function ListaAnuncios() {
  const [loading, setLoading] = useState(false);
  const [anuncios, setAnuncios] = useState([]);
  useEffect(() => {
    async function get() {
      let getAnuncios = await getAllPaginated(20, 0);
      console.log(getAnuncios);
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
