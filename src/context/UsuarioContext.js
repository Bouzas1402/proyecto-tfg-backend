import React, {useState, createContext} from "react";

const Context = createContext({});

function UsuarioContext({children}) {
  const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem("usuario")));

  return <Context.Provider value={{usuario, setUsuario}}>{children}</Context.Provider>;
}

export {Context, UsuarioContext};
