import {createContext} from "react";

const UsuarioContext = createContext({
  usuario: JSON.stringify(localStorage.getItem("usuario")),
});

export {UsuarioContext};
