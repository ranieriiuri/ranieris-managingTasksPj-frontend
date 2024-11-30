import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import PersistentDrawerLeft from "./pages/Extra";


function App() {
  return (
    <div className="App">
      {/*Ainda meio bagunçado e iniciando a implementação do menu, mas está no processo... */}
      <Header />
      <ListarTarefa />
      <PersistentDrawerLeft />
    </div>
  );
}

export default App;