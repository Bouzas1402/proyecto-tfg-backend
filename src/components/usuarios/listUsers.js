import React from "react";
import {useUsuarios} from "../../services";
import {Usuario} from "../index";

function ListUsers(keywords) {
  const res = useUsuarios();
  return (
    <ul keywords={keywords}>
      {res.map((usuario) => (
        <Usuario props={usuario} />
      ))}
    </ul>
  );
}

export {ListUsers};
