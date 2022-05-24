import {Api} from ".";

export const Registro = async (values) => {
  const res = await Api.post("https://proyectotfg.herokuapp.com/proyecto/user", {values});
  return res.then((res) => res.json()).catch((err) => err);
};
