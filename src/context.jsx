import PropTypes from "prop-types";
import menuItems from "./data";
import { createContext, useState } from "react";
const GlobalContext = createContext();

function AppContext({ children }) {
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);

  function increase(id) {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  }
  function decrease(id) {
    let updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    updatedCart = updatedCart.filter((item) => item.quantity !== 0);
    setCart(updatedCart);
  }

  function sumTotal() {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
  }

  function sumQuantity() {
    const quantity = cart.reduce((acc, item) => {
      acc += item.quantity;
      return acc;
    }, 0);
    setQuantity(quantity);
  }

  return (
    <GlobalContext.Provider
      value={{
        menuItems,
        total,
        setTotal,
        cart,
        setCart,
        increase,
        decrease,
        sumTotal,
        quantity,
        sumQuantity,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, GlobalContext };
