import Header from "./components/header";
import ListaProduto from "./pages/Produto/ListaProduto";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <ListarTarefa />
      <ListaProduto />
    </div>
  );
}

export default App;
