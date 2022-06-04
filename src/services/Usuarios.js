import {Api} from ".";
import config from "../config/config";

import {deleteStorage, setStorage, getTokenStorage} from "../helpers/localStorage";

export const login = async (values) => {
  let res = await Api({
    url: `${config.DOMAIN}proyecto/login`,
    method: "POST",
    data: {
      correo: values.correo,
      contraseña: values.contraseña,
    },
  })
    .then((res) => {
      setStorage(res.data.token, res.data.usuario);
      return res.data;
    })
    .catch((err) => err);
  return res;
};

export const registro = async (values) => {
  const res = await Api({
    url: `${config.DOMAIN}proyecto/user`,
    method: "POST",
    data: values,
  })
    .then((res) => res.data)
    .catch((err) => err);
  return res;
};

export const borrar = async () => {
  const token = getTokenStorage();
  const res = Api({
    url: `${config.DOMAIN}proyecto/user`,
    method: "DELETE",
    headers: {token: token},
  })
    .then((res) => {
      deleteStorage();
      return res.data;
    })
    .catch((err) => err);
  return res;
};

export const comprobarToken = async () => {
  const token = getTokenStorage();
  if (!token) return "No hay token";
  const res = await Api({
    url: `${config.DOMAIN}proyecto/comprobarToken`,
    method: "GET",
    headers: {token: token},
  })
    .then((res) => res.data)
    .catch((err) => {
      deleteStorage();
      return err;
    });
  return res;
};
