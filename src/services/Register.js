import {Api} from ".";

export const Registro = async (values) => {
  const res = await Api.post("https://proyectotfg.herokuapp.com/proyecto/user", {values})
    .then((res) => res.data)
    .catch((err) => err);
  return res;
};
