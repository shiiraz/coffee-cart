import useGlobalContext from "../globalContext";
import CartItem from "../Components/CartItem";

function Cart() {
  const { cart, increase, decrease, deleteItem } = useGlobalContext();

  if (!cart || cart.length === 0) {
    return <h1>Cart empty, please add some coffee :)</h1>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price x Quantity</th>
            <th></th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              increase={increase}
              decrease={decrease}
              deleteItem={deleteItem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
