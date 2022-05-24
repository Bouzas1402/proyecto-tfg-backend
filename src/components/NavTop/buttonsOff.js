import style from "./navTop.module.css";

import {Link} from "react-router-dom";

const React = require("react");

function ButtonsOff() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li className={style.li}>
          <Link className={style.a} to="/login">
            Logearse
          </Link>
        </li>
        <li className={style.li}>
          <Link className={style.a} to="/registro">
            Registrarse
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export {ButtonsOff};
