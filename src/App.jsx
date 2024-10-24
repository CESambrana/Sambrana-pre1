import NavBar from "./components/NavBar/NavBar";
import Saludo from "./components/saludo/saludo";
import ItemsList from "./components/itemLists/ItemsList";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Saludo mns={"Bienvenido a la tienda de Emma!"} />
      <ItemsList />
    </div>
  );
}

export default App;
