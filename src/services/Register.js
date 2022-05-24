import {Api} from ".";

export const Registro = async (values) => {
  const res = await Api.post("http://localhost:8000/proyecto/user", {values});
  return res.then((res) => res.json()).catch((err) => err);
};
