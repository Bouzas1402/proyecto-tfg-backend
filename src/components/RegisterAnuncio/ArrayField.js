import React, {useState} from "react";
import {FieldArray, Field} from "formik";

import styles from "./arrayfield.module.css";

export function ArrayField(props) {
  const [contador, setContador] = useState([""]);
  const campo = props.props;
  return (
    <FieldArray name={campo}>
      {(FieldArrayProps) => {
        const {insert, remove, push} = FieldArrayProps;
        return (
          <div>
            {contador && contador.length > 0 ? (
              contador.map((prop, index) => (
                <div className={styles.inputarray} key={index}>
                  <Field name={`${campo}[${index}]`} />
                  <button
                    type="button"
                    onClick={() => {
                      contador.splice(contador.length - 1);
                      remove(index);
                    }}
                  >
                    -
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      contador.push("");
                      insert(index, "");
                    }}
                  >
                    +
                  </button>
                </div>
              ))
            ) : (
              <button
                className={styles.add}
                type="button"
                onClick={() => {
                  setContador([""]);
                  push("");
                }}
              >
                {/* show this when user has removed all friends from the list */}
                Add {campo}
              </button>
            )}
          </div>
        );
      }}
    </FieldArray>
  );
}
