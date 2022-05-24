import {Api} from ".";

export const Login = (values) => {
  const res = Api.post("http://localhost:8000/proyecto/login", {
    correo: values.correo,
    contraseña: values.contraseña,
  });
  return res.then((res) => res.data).catch((err) => err);
};
