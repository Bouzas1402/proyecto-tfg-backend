import React from "react";
import {nanoid} from "nanoid";
import {useAnuncios} from "../../services";
import {Anuncio} from "../index";

function ListAnuncios() {
  const res = useAnuncios();
  return (
    <ul>
      {res.map((anuncio) => (
        <Anuncio key={nanoid()} props={anuncio} />
      ))}
    </ul>
  );
}

export {ListAnuncios};
