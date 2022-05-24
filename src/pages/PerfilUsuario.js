import React, {useContext} from "react";

import {Context as UsuarioContext} from "../context/UsuarioContext";

import {TarjetaUsuario, Anuncios} from "../components/index";
const PerfilUsuario = () => {
  const {usuario} = useContext(UsuarioContext);
  console.log(usuario);
  return (
    <div>
      <TarjetaUsuario usuario={usuario} />
    </div>
  );
};

export {PerfilUsuario};