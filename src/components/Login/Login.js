import React from "react";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";

import style from "./login.module.css";

import {useUsuario} from "../../hooks";

const validateFields = (values) => {
  const errors = {};

  if (values.correo.length === 0) {
    errors.correo = "El correo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = "No es un correo valido";
  }
  if (values.contraseña.length === 0) {
    errors.contraseña = "La contraseña es obligatoria";
  } /* else if (values.contraseña.length < 6) {
    errors.contraseña = "La contraseña debe ser de 6 caracteres minimo";
  } */
  return errors;
};

const initialValues = {correo: "", contraseña: ""};

export function Login() {
  const {login} = useUsuario();
  const navigate = useNavigate();
  return (
    <div id={style.container}>
      <h1 className={style.h1}>Login:</h1>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={async (values, {setFieldError}) => {
          const loggind = await login(values.correo, values.contraseña);
          if (!loggind.token) {
            setFieldError("usuarioValido", "No es un usuario valido");
          } else {
            navigate("/");
          }
        }}
      >
        {({errors, isSubmitting, handleChange}) => (
          <Form>
            <Field className={style.text} placeholder="Intruduce un correo" name="correo" onChange={handleChange} />
            <ErrorMessage className={style.error} name="correo" component="div" />
            <Field
              className={style.text}
              type="password"
              placeholder="Intruduce una contraseña"
              name="contraseña"
              onChange={handleChange}
            />
            <ErrorMessage className={style.error} name="contraseña" component="div" />
            <button className={style.button} type="submit" id={style.form_button} disabled={isSubmitting}>
              Loggin
            </button>
            <div className={[style.error, style.usercheck]}>{errors.usuarioValido}</div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
