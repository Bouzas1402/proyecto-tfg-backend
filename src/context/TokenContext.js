import {createContext} from "react";

const TokenContext = createContext({
  token: localStorage.getItem("token"),
});

export {TokenContext};
