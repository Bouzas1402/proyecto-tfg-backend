import React from "react";
import {nanoid} from "nanoid";

import {Anuncio} from "./Anuncio.js";

function Anuncios(anuncios) {
  const getAnuncios = anuncios.anuncios;
  return (
    <div>
      {getAnuncios.map((anuncio) => {
        return <Anuncio anuncio={anuncio} key={nanoid()} />;
      })}
    </div>
  );
}
export {Anuncios};
