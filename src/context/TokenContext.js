import React, {useState, createContext} from "react";

const Context = createContext({});

function TokenContext({children}) {
  const [jwt, setJWT] = useState(localStorage.getItem("token"));
  return <Context.Provider value={{jwt, setJWT}}>{children}</Context.Provider>;
}

export {Context, TokenContext};
