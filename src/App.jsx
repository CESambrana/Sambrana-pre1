import NavBar from "./components/NavBar/NavBar";
import Saludo from "./components/saludo/saludo";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Saludo mns={"Bienvenido a la tienda de Emma!"} />
      <Saludo mns={"Espero que me compres mucho ;)"} />
    </div>
  );
}

export default App;
