import "./App.css";
import {ListAnuncios, NavTop} from "./components";
function App() {
  return (
    <div className="App">
      <section>
        <NavTop />
        <ListAnuncios />
      </section>
    </div>
  );
}

export default App;
