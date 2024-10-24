import Cart from "./Cart";
import ItemList from "./itemList";
import Logo from "./Logo";
import "./navbar.css";

const NavBar = () => {
  return (
    <nav className="header">
      <div>
        <Logo />
      </div>

      <ItemList item={"Monitores"} />
      <ItemList item={"Auriculares"} />

      <Cart />
    </nav>
  );
};

export default NavBar;
