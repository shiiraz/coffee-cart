import PropTypes from "prop-types";
import useGlobalContext from "../globalContext";

function MenuItem({ title, price }) {
  const { handleTotal } = useGlobalContext();
  return (
    <div className="coffee-card">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <button onClick={() => handleTotal(price)}>Add to cart</button>
    </div>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MenuItem;
