import React from "react";

import style from "./loader.module.css";

export function Loader() {
  return (
    <div className={[style.ldsring, style.div]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
