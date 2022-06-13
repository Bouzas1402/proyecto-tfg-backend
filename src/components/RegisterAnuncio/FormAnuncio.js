import React from "react";

import {Formik, Form, Field, ErrorMessage, FieldArray} from "formik";
import {useNavigate} from "react-router-dom";

import {ArrayField} from "./ArrayField";
import {setAnuncios} from "../../services";

import {provincias} from "../../utils/provincias";

import styles from "./formanuncio.module.css";
import style from "./arrayfield.module.css";

const validateFields = (values) => {
  const errors = {};
  if (values.length) return errors;
  return errors;
};

function validateEmpty(value) {
  let error;
  if (!value) error = "No puede estar vacio";
  return error;
}
function validateNumber(value) {
  let error;
  if (value <= 0) error = "Alguno tendra no?";
  return error;
}
function validateAlquiler(value) {
  let error;
  if (value < 150) error = "Alquiler minimo 150";
  return error;
}

const initialValues = {
  titulo: "",
  direccion: {
    provincia: "",
    ciudad: "",
    nombreCalle: "",
    portal: "",
    piso: "",
  },
  fotos: [
    {
      titulo: "",
      url: "",
    },
  ],
  descripcion: "",
  caracteristicas: {
    dormitorios: 0,
    baños: 0,
    m2: 0,
    equipamiento: [""],
    zonasComunes: [""],
    otros: [""],
  },
  precioMes: 0,
};

export function RegisterAnuncio() {
  const navigate = useNavigate();
  return (
    <div id={styles.container}>
      <h1 className={styles.h1}>Login:</h1>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={async (values, {setFieldError}) => {
          const nuevoAnuncio = JSON.parse(JSON.stringify(values));
          const zonasComunes = nuevoAnuncio.caracteristicas.zonasComunes.flatMap((value) =>
            value === "" ? [] : value
          );
          const equipamiento = nuevoAnuncio.caracteristicas.equipamiento.flatMap((value) =>
            value === "" ? [] : value
          );
          const otros = nuevoAnuncio.caracteristicas.otros.flatMap((value) => (value === "" ? [] : value));
          if (zonasComunes.length === 0) {
            delete nuevoAnuncio.caracteristicas.zonasComunes;
          } else {
            nuevoAnuncio.caracteristicas.zonasComunes = zonasComunes;
          }
          if (equipamiento.length === 0) {
            delete nuevoAnuncio.caracteristicas.equipamiento;
          } else {
            nuevoAnuncio.caracteristicas.equipamiento = equipamiento;
          }
          if (otros.length === 0) {
            delete nuevoAnuncio.caracteristicas.otros;
          } else {
            nuevoAnuncio.caracteristicas.otros = otros;
          }

          await setAnuncios(nuevoAnuncio);

          setTimeout(async () => {
            setFieldError("anuncioCreado", "ANUNCIO CREADA, FELICIDADES");
            navigate("/");
          }, 3000);
        }}
      >
        {({errors, isSubmitting, handleChange}) => (
          <Form>
            <Field
              className={styles.text}
              placeholder="Intruduce un titulo"
              name="titulo"
              onChange={handleChange}
              validate={validateEmpty}
            />
            <ErrorMessage className={styles.error} name="titulo" component="div" />

            <Field
              className={styles.textarea}
              placeholder="Intruduce una descripcion"
              name="descripcion"
              as="textarea"
              onChange={handleChange}
              validate={validateEmpty}
            />
            <ErrorMessage className={styles.error} name="descripcion" component="div" />

            <div className={styles.divdireccion}>
              <Field className={styles.select} as="select" name="direccion.provincia" onChange={handleChange}>
                <option className={styles.option} value="">
                  Provincia
                </option>
                {provincias.map((provincia, index) => {
                  return (
                    <option className={styles.option} value={provincia} key={`${provincia}index`}>
                      {provincia.toUpperCase()}
                    </option>
                  );
                })}
              </Field>
              <div className={styles.divdireccioncasilla}>
                <Field
                  className={styles.number}
                  placeholder="Ciudad"
                  name="direccion.ciudad"
                  type="text"
                  onChange={handleChange}
                  validate={validateEmpty}
                />
                <ErrorMessage className={styles.errorpequeño} name="direccion.ciudad" component="div" />
              </div>
            </div>
            <div className={styles.divdireccion}>
              <div className={styles.divdireccioncasilla}>
                <Field
                  className={styles.number}
                  placeholder="Calle"
                  name="direccion.nombreCalle"
                  type="text"
                  onChange={handleChange}
                  validate={validateEmpty}
                />
                <ErrorMessage className={styles.errorpequeño} name="direccion.nombreCalle" component="div" />
              </div>

              <div className={styles.divdireccioncasilla}>
                <Field
                  className={styles.number}
                  placeholder="portal"
                  name="direccion.portal"
                  type="text"
                  onChange={handleChange}
                  validate={validateEmpty}
                />
                <ErrorMessage className={styles.errorpequeño} name="direccion.portal" component="div" />
              </div>
              <div className={styles.divdireccioncasilla}>
                <Field
                  className={styles.number}
                  placeholder="Piso"
                  name="direccion.piso"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <label forhtml="caracteristicas.zonasComunes">Zonas Comunes:</label>
            <ArrayField name="caracteristicas.zonasComunes" props={"caracteristicas.zonasComunes"}></ArrayField>
            <ErrorMessage className={styles.error} name="caracteristicas.zonasComunes" component="div" />

            <label forhtml="caracteristicas.equipamiento">Equipamiento:</label>
            <ArrayField name="caracteristicas.equipamiento" props={"caracteristicas.equipamiento"}></ArrayField>
            <ErrorMessage className={styles.error} name="caracteristicas.equipamiento" component="div" />

            <label forhtml="caracteristicas.otros">Otros:</label>
            <ArrayField name="caracteristicas.otros" props={"caracteristicas.otros"}></ArrayField>
            <ErrorMessage className={styles.error} name="caracteristicas.otros" component="div" />

            <div className={styles.divnumber}>
              <label className={styles.labelnumber} forhtml="caracteristicas.dormitorios">
                Dormitorios:
                <Field
                  type="number"
                  className={styles.number}
                  name="caracteristicas.dormitorios"
                  onChange={handleChange}
                  validate={validateNumber}
                />
                <ErrorMessage className={styles.error} name="caracteristicas.dormitorios" component="div" />
              </label>
              <label className={styles.labelnumber} forhtml="caracteristicas.baños">
                Baños:
                <Field
                  type="number"
                  className={styles.number}
                  name="caracteristicas.baños"
                  onChange={handleChange}
                  validate={validateNumber}
                />
                <ErrorMessage className={styles.error} name="caracteristicas.baños" component="div" />
              </label>
              <label className={styles.labelnumber} forhtml="caracteristicas.m2">
                Metros2:
                <Field
                  type="number"
                  className={styles.number}
                  placeholder="m2"
                  name="caracteristicas.m2"
                  onChange={handleChange}
                  validate={validateNumber}
                />
                <ErrorMessage className={styles.error} name="caracteristicas.m2" component="div" />
              </label>
            </div>

            <div className={[styles.error, styles.usercheck]}>{errors.anuncioValido}</div>
            <label forhtml="fotos">Fotos:</label>

            <FieldArray name="fotos">
              {(FieldArrayProps) => {
                const {
                  insert,
                  remove,
                  push,
                  form: {
                    values: {fotos},
                  },
                } = FieldArrayProps;
                return (
                  <div>
                    {fotos && fotos.length > 0 ? (
                      fotos.map((prop, index) => (
                        <div className={style.inputarray} key={index}>
                          <Field
                            key={`${index}titulo`}
                            //className={styles.textfoto}
                            validate={validateEmpty}
                            placeholder="Titulo"
                            name={`fotos[${index}].titulo`}
                          />
                          <ErrorMessage className={styles.error} name={`fotos[${index}].titulo`} component="div" />
                          <Field
                            key={`${index}url`}
                            validate={validateEmpty}
                            placeholder="Url"
                            name={`fotos[${index}].url`}
                          />
                          <ErrorMessage className={styles.error} name={`fotos[${index}].url`} component="div" />
                          <button
                            type="button"
                            onClick={() => {
                              remove(index);
                            }}
                          >
                            -
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              insert(index, {titulo: "", url: ""});
                            }}
                          >
                            +
                          </button>
                        </div>
                      ))
                    ) : (
                      <button
                        className={style.add}
                        type="button"
                        onClick={() => {
                          push({titulo: "", url: ""});
                        }}
                      >
                        Add Fotos
                      </button>
                    )}
                  </div>
                );
              }}
            </FieldArray>

            <label className={styles.labelprecio} forhtml="precioMes">
              Alquiler:
              <Field
                type="number"
                placeholder="alquiler al mes"
                name="precioMes"
                onChange={handleChange}
                validate={validateAlquiler}
              />
              <ErrorMessage className={styles.error} name="precioMes" component="div" />
            </label>
            <button className={styles.button} type="submit" id={styles.form_button} disabled={isSubmitting}>
              Registrar Anuncio
            </button>
            <small style={{color: "green"}}>{errors.anuncioCreado && ""}</small>
          </Form>
        )}
      </Formik>
    </div>
  );
}
