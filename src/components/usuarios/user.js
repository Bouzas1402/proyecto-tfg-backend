//import style from "./user.module.css";
import {nanoid} from "nanoid";
const React = require("react");

function Usuario({props}) {
  const {nombre, correo} = props;
  return (
    <li keywords={nanoid()}>
      <h4>{nombre}</h4>
      <small>{correo}</small>
    </li>
  );
}
export {Usuario};
