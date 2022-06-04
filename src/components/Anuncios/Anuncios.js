import React from "react";
import {nanoid} from "nanoid";

import {Anuncio} from "./Anuncio.js";

function Anuncios(props) {
  const getAnuncios = props.anuncios;
  return (
    <div>
      {getAnuncios.map((anuncio) => {
        return <Anuncio anuncio={anuncio} key={nanoid()} guardado={props.guardado} />;
      })}
    </div>
  );
}
export {Anuncios};
