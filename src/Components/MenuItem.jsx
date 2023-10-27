import { PropTypes } from "prop-types";
import useGlobalContext from "../globalContext";

function MenuItem({ item }) {
  const { handleTotal } = useGlobalContext();

  return (
    <div className="coffee-card">
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      <button
        onClick={() => {
          handleTotal(item.price);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}

MenuItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
