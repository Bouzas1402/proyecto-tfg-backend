import React from "react";
import {Formik} from "formik";
import "./register.css";
import {RegistroUsuario} from "../../services";

export function RegisterAnuncio() {
  return (
    <div id="container">
      <h1>Registro:</h1>
      <Formik
        initialValues={{
          titulo: "",
          descripcionm: "",
          SegundoApellido: "",
          correo: "",
          telefono: "",
          contraseña: "",
        }}
        onSubmit={async (values, {setFieldError}) => {
          return RegistroUsuario(values).catch(() => {
            setFieldError("nombre", "El nombre no es valido");
          });
        }}
      >
        {({errors, handleChange, handleSubmit, isSubmitting}) => (
          <form onSubmit={handleSubmit}>
            <field></field>
            <input className="name" name="nombre" placeholder="My nombre" onChange={handleChange}></input>
            <input name="PrimerApellido" onChange={handleChange}></input>
            <input name="SegundoApellido" onChange={handleChange}></input>
            <input name="correo" onChange={handleChange}></input>
            <input name="telefono" onChange={handleChange}></input>
            <input name="contraseña" onChange={handleChange}></input>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              Registro
            </button>
            {console.log(errors)}
            <span> {errors.nombre}</span>
          </form>
        )}
      </Formik>
    </div>
  );
}
