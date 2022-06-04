import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {ListaAnuncios, Login, Register, PerfilUsuario, RegistroAnuncio} from "./pages/index";
import {NavTop} from "./components";
import {comprobarToken} from "./services";

import {getTokenStorage, getUsuarioStorage} from "./helpers/localStorage";

import {AnunciosContext, UsuarioContext, TokenContext} from "./context";

import style from "./App.module.css";

function App() {
  const [token, setToken] = useState(getTokenStorage);
  const [user, setUser] = useState(getUsuarioStorage);

  useEffect(() => {
    async function getPermisos() {
      let permisos = await comprobarToken();
      if (!permisos) {
        setUser(null);
        setToken(null);
      } else {
        setUser(getUsuarioStorage);
        setToken(getTokenStorage);
      }
    }
    getPermisos();
  }, []);
  return (
    <TokenContext.Provider value={{token: token, setToken}}>
      <UsuarioContext.Provider value={{usuario: user, setUser}}>
        <AnunciosContext>
          <div className={style.App}>
            <BrowserRouter>
              <NavTop />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil" element={<PerfilUsuario />} />
                <Route path="/registroanuncio" element={<RegistroAnuncio />} />
                <Route path="/" element={<ListaAnuncios />} />
              </Routes>
            </BrowserRouter>
          </div>
        </AnunciosContext>
      </UsuarioContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
