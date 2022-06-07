import {Api} from ".";

import config from "../config/config";

import {getTokenStorage} from "../helpers/localStorage";

export const getAnuncios = async () => {
  try {
    const res = await Api({
      url: `${config.DOMAIN}anuncios`,
    });
    return res.data.anuncios;
  } catch (err) {
    console.log(err);
  }
};

export const setAnuncios = async (values) => {
  try {
    const token = getTokenStorage();
    const res = await Api({
      url: `${config.DOMAIN}proyecto/anuncios`,
      method: "POST",
      headers: {token: token},
      data: values,
    })
      .then((res) => res.data)
      .catch((err) => err);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const guardarAnuncios = async (idAnuncio) => {
  const token = getTokenStorage();
  try {
    const res = await Api({
      url: `${config.DOMAIN}proyecto/guardaranuncios/${idAnuncio}`,
      method: "POST",
      headers: {token: token},
    });
    return res;
  } catch (e) {
    return e;
  }
};

export const getAllPaginated = async (tamPage, numPage) => {
  try {
    const res = await Api({
      url: `${config.DOMAIN}proyecto/anunciospaginated`,
      method: "GET",
      params: {
        tamPage,
        numPage,
      },
    });
    return res.data.data;
  } catch (err) {
    return err;
  }
};

export const getAnunciosGuardados = async () => {
  try {
    const token = getTokenStorage();
    const res = await Api({
      url: `${config.DOMAIN}proyecto/anunciosguardados`,
      method: "GET",
      headers: {token: token},
    })
      .then((res) => res.data)
      .catch((err) => err);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getAnunciosSubidos = async () => {
  try {
    const token = getTokenStorage();
    const res = await Api({
      url: `${config.DOMAIN}proyecto/anunciosubidos`,
      method: "GET",
      headers: {token: token},
    })
      .then((res) => res.data)
      .catch((err) => err);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAnuncioGuardado = async (idAnuncio) => {
  try {
    const token = getTokenStorage();
    const res = await Api({
      url: `${config.DOMAIN}proyecto/borraranuncioguardado/${idAnuncio}`,
      method: "DELETE",
      headers: {token: token},
    })
      .then((res) => console.log(res.data))
      .catch((err) => err);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteAnuncio = async (idAnuncio) => {
  try {
    const token = getTokenStorage();
    const res = await Api({
      url: `${config.DOMAIN}proyecto/anuncios/${idAnuncio}`,
      method: "DELETE",
      headers: {token: token},
    })
      .then((res) => res.data)
      .catch((err) => err);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
