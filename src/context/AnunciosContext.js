import React, {useState, createContext} from "react";

const Context = createContext({});

function AnunciosContext({children}) {
  const [anuncios, setAnuncios] = useState(null);

  return <Context.Provider value={{anuncios, setAnuncios}}>{children}</Context.Provider>;
}

export {Context, AnunciosContext};
