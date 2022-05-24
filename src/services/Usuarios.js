import {useEffect, useState} from "react";
import {Api} from ".";

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    getUser();
  }, []);

  let options = {
    headers: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjU2ZGY2MzkwNTViOTM1Y2MxMTZmZmUiLCJyb2xlIjoiQURNSU5fUk9MRSIsImlhdCI6MTY1MDIxNjUyMiwiZXhwIjoxNjUwMjMwOTIyfQ.U9uohQxhcrvj9-_xzKkjvtZh0A7rMqRWc_wcAxgfaaU",
    },
  };

  const getUser = async () => {
    const res = await Api.get("https://proyectotfg.herokuapp.com/proyecto/user", options);

    console.log(res);
    setUsuarios(res.data.users);
  };
  return usuarios;
};
