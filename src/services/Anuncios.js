import {Api} from ".";

export const getAnuncios = async () => {
  const res = await Api.get("https://proyectotfg.herokuapp.com/anuncios");
  return res.data.anuncios;
};

export const guardarAnuncios = async (idAnuncio) => {
  const token = window.localStorage.getItem("token");
  console.log(token);
  try {
    const res = await Api.get(`https://proyectotfg.herokuapp.com/proyecto/guardarAnuncios/${idAnuncio}`, {
      headers: {token: token},
    });
    return res;
  } catch (e) {}
};
