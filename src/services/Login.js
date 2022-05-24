import {Api} from ".";

export const Login = (values) => {
  const res = Api.post("https://proyectotfg.herokuapp.com/proyecto/login", {
    correo: values.correo,
    contraseña: values.contraseña,
  });
  return res.then((res) => res.data).catch((err) => err);
};
