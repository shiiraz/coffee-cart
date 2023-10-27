import PropTypes from "prop-types";

function CartItem({ item, increase, decrease, deleteItem }) {
  return (
    <tr key={item.id} className="t-rows">
      <td>{item.title}</td>
      <td>
        ${item.price} x {item.quantity}
      </td>
      <td>
        <button className="toggle-btn" onClick={() => increase(item.id)}>
          +
        </button>
        <button className="toggle-btn" onClick={() => decrease(item.id)}>
          -
        </button>
      </td>
      <td>${item.price * item.quantity}</td>
      <td>
        <button className="delete-btn" onClick={() => deleteItem(item.id)}>
          x
        </button>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CartItem;
