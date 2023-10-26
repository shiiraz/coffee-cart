import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Menu</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </nav>
  );
}

export default Navbar;
