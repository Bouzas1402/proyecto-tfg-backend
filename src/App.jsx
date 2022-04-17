import "./App.css";
import {ListAnuncios, NavTop} from "./components";
function App() {
  return (
    <div className="App">
      <h1>HOÑA</h1>
      <section>
        <NavTop />
        <ListAnuncios />
      </section>
    </div>
  );
}

export default App;
