import {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {ListaAnuncios, Login, Register, PerfilUsuario} from "./pages/index";
import {NavTop} from "./components";
import {useUsuario} from "./hooks";

import {UsuarioContext, TokenContext, AnunciosContext} from "./context";

import style from "./App.module.css";

function App() {
  // const [loading, setLoading] = useState(false);
  const {comprobarToken} = useUsuario();
  useEffect(() => {
    comprobarToken();
  }, []);

  return (
    <TokenContext>
      <UsuarioContext>
        <AnunciosContext>
          <div className={style.App}>
            <BrowserRouter>
              <NavTop />
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Register />} />
                <Route path="/perfil" element={<PerfilUsuario />} />
                <Route path="/" element={<ListaAnuncios />} />
              </Routes>
            </BrowserRouter>
          </div>
        </AnunciosContext>
      </UsuarioContext>
    </TokenContext>
  );
}

export default App;
