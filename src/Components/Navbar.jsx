import { NavLink } from "react-router-dom";
import useGlobalContext from "../globalContext";

function Navbar() {
  const { quantity } = useGlobalContext();
  return (
    <nav>
      <NavLink to="/">Menu</NavLink>
      <NavLink to="/cart">Cart({quantity})</NavLink>
    </nav>
  );
}

export default Navbar;
