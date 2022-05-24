const {Api} = require("./api");
const {getAnuncios, guardarAnuncios} = require("./Anuncios");
const {Usuarios} = require("./Usuarios");
const {Login} = require("./Login");
const {Registro} = require("./Register");

export {getAnuncios, guardarAnuncios, Login, Registro, Usuarios, Api};
