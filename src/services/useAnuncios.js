import {useEffect, useState} from "react";
import {Api} from ".";

export const useAnuncios = () => {
  const [anuncios, setAnuncios] = useState([]);
  useEffect(() => {
    getAnuncios();
  }, []);

  let options = {
    headers: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MjU2ZGY2MzkwNTViOTM1Y2MxMTZmZmUiLCJyb2xlIjoiQURNSU5fUk9MRSIsImlhdCI6MTY1MDIxNjUyMiwiZXhwIjoxNjUwMjMwOTIyfQ.U9uohQxhcrvj9-_xzKkjvtZh0A7rMqRWc_wcAxgfaaU",
    },
  };

  const getAnuncios = async () => {
    const res = await Api.get("http://localhost:8000/proyecto/anuncios", options);
    console.log(res);
    setAnuncios(res.data.anuncios);
  };
  return anuncios;
};
