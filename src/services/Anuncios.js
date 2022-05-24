import {Api} from ".";

export const getAnuncios = async () => {
  const res = await Api.get("http://localhost:8000/anuncios");
  return res.data.anuncios;
};

export const guardarAnuncios = async (idAnuncio) => {
  const token = window.localStorage.getItem("token");
  console.log(token);
  try {
    const res = await Api.get(`http://localhost:8000/proyecto/guardarAnuncios/${idAnuncio}`, {
      headers: {token: token},
    });
    return res;
  } catch (e) {}
};
