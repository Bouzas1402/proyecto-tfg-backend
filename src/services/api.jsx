import axios from "axios";

export const Api = axios.create({
  baseUrl: "https://proyectotfg.herokuapp.com/",
  timeout: 1000,
  headers: {"X-Custom-Header": "foobar"},
});
