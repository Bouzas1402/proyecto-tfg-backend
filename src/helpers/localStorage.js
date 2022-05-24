export function setStorage(token, usuario) {
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("usuario", JSON.stringify(usuario));
}

export function deleteStorage() {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("usuario");
}

export const getTokenStorage = () => {
  return window.localStorage.getItem("token");
};

export const getUsuarioStorage = () => {
  return JSON.stringify(window.localStorage.setItem("usuario"));
};
