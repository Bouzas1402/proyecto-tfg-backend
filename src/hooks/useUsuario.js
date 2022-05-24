import {Api} from "../services";

import {useCallback, useContext} from "react";

import {deleteStorage, setStorage} from "../helpers/localStorage";

import {Context as UsuarioContext} from "../context/UsuarioContext";
import {Context as TokenContext} from "../context/TokenContext";
import {Login as LoginServer} from "../services";

export function useUsuario() {
  const {setUsuario} = useContext(UsuarioContext);
  const {jwt, setJWT} = useContext(TokenContext);

  const login = useCallback(
    async (correo, contraseña) => {
      deleteStorage();
      const logg = await LoginServer({correo, contraseña});
      if (logg.token) {
        console.log(logg);
        setStorage(logg.token, logg.usuario);
        setJWT(logg.token);
        setUsuario(logg.usuario);
      }
      return logg;
    },
    [setJWT, setUsuario]
  );

  const logout = useCallback(() => {
    setJWT(null);
    setUsuario(null);
    deleteStorage();
  }, []);

  const comprobarToken = useCallback(() => {
    const token = window.localStorage.getItem("token");
    console.log(token);
    Api.get("https://proyectotfg.herokuapp.com/proyecto/comprobarToken", {headers: {token: token}})
      .then(() => console.log("Token valido"))
      .catch((err) => {
        deleteStorage();
      });
  }, []);

  return {
    isLoggedIn: Boolean(jwt),
    login,
    logout,
    comprobarToken,
  };
}
