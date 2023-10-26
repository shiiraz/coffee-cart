import PropTypes from "prop-types";
import menuItems from "./data";
import { createContext, useState } from "react";
const GlobalContext = createContext();

function AppContext({ children }) {
  const [total, setTotal] = useState(0);

  function handleTotal(price) {
    setTotal(total + price);
  }

  return (
    <GlobalContext.Provider value={{ menuItems, total, setTotal, handleTotal }}>
      {children}
    </GlobalContext.Provider>
  );
}

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, GlobalContext };
