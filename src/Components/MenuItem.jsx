import { PropTypes } from "prop-types";
import useGlobalContext from "../globalContext";

function MenuItem({ item }) {
  const { sumTotal, cart, setCart, sumQuantity } = useGlobalContext();
  function addToCart(cart) {
    if (cart.some((x) => x.title === item.title)) {
      const updatedCart = cart.map((x) =>
        x.id == item.id ? { ...x, quantity: x.quantity + 1 } : x
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }

  return (
    <div className="coffee-card">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <button
        onClick={() => {
          addToCart(cart);
          sumQuantity();
          sumTotal();
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
