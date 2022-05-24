import React from "react";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik";

import style from "./register.module.css";

import {Registro} from "../../services";

import {setStorage} from "../../helpers/localStorage";
import {useUsuario} from "../../hooks";

const validateFields = (values) => {
  const errors = {};
  // Validacion del  nombre
  if (values.nombre.length === 0) {
    errors.nombre = "Es obligatorio un nombre";
  }
  // Validacion del primer apellido
  if (values.PrimerApellido.length === 0) {
    errors.PrimerApellido = "Es obligatorio un apellido";
  }
  // Validacion del telefono
  if (values.telefono === "" && values.role === "VENTAS_ROLE") {
    errors.telefono = "El telefono es obligatorio si quiere ser usuario ventas";
  } else if (values.telefono === "") {
    delete values.telefono;
  } else if (/\d{9}/.test(values.telefono)) {
    errors.telefono = "No es un telefono valido";
  }
  // Validacion del correo
  if (values.correo.length === 0) {
    errors.correo = "El correo es obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)) {
    errors.correo = "No es un correo valido";
  }
  // Validacion de la contraseña
  if (values.contraseña.length === 0) {
    errors.contraseña = "La contraseña es obligatoria";
  } else if (values.contraseña.length < 6) {
    errors.contraseña = "La contraseña debe ser de 6 caracteres minimo";
  }
  return errors;
};

const initialValues = {
  nombre: "",
  PrimerApellido: "",
  SegundoApellido: "",
  correo: "",
  telefono: "",
  contraseña: "",
  role: "",
  avatar: "",
};

export function Register() {
  const {login} = useUsuario();
  const navigate = useNavigate();
  return (
    <div id={style.container}>
      <h1 className={style.h1}>Registro:</h1>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={async (values, {setFieldError}) => {
          const createUser = await Registro(values);
          if (!createUser.user) {
            setFieldError("usuarioRepetido", "Correo repetido");
          } else {
            setFieldError("usuarioCreado", "CUENTA CREADA, FELICIDADES");
            setTimeout(async () => {
              const loggind = await login(values.correo, values.contraseña);
              setStorage(loggind.token, loggind.usuario);
              navigate("/");
            }, 3000);
          }
        }}
      >
        {({errors, handleChange, isSubmitting}) => (
          <Form>
            <Field className={style.text} name="nombre" placeholder="My nombre" onChange={handleChange} />
            <ErrorMessage className={style.error} name="nombre" component="div" />
            <Field className={style.text} name="PrimerApellido" placeholder="Primer Apellido" onChange={handleChange} />
            <ErrorMessage className={style.error} name="PrimerApellido" component="div" />
            <Field
              className={style.text}
              name="SegundoApellido"
              placeholder="Segundo apellido"
              onChange={handleChange}
            />
            <ErrorMessage className={style.error} name="SegundoApellido" component="div" />
            <Field className={style.text} name="correo" placeholder="Correo" onChange={handleChange} />
            <ErrorMessage className={style.error} name="correo" component="div" />
            <Field className={style.text} name="telefono" placeholder="Telefono" onChange={handleChange} />
            <ErrorMessage className={style.error} name="telefono" component="div" />
            <Field
              className={style.text}
              type="password"
              name="contraseña"
              placeholder="contraseña"
              onChange={handleChange}
            />
            <ErrorMessage className={style.error} name="contraseña" component="div" />
            <Field as="select" className={style.select} name="role" onChange={handleChange}>
              <option className={style.option} value="USER_ROLE">
                Usuario normal
              </option>
              <option className={style.option} value="VENTAS_ROLE">
                Usuario ventas
              </option>
            </Field>
            <input type="file" className={style.file} name="avatar" onChange={handleChange} />
            <button id={style.form_button} className={style.button} type="submit" disabled={isSubmitting}>
              Registro
            </button>
            <small style={{color: "red"}}>{errors.usuarioRepetido}</small>
            <small style={{color: "green"}}>{errors.usuarioCreado}</small>
          </Form>
        )}
      </Formik>
    </div>
  );
}
