import useGlobalContext from "../globalContext";
import CartItem from "../Components/CartItem";
import { useEffect } from "react";

function Cart() {
  const { cart, increase, decrease, sumQuantity, total, sumTotal } =
    useGlobalContext();
  useEffect(() => {
    sumQuantity();
    sumTotal();
  }, [sumQuantity, sumTotal]);
  return (
    <div>
      {cart && cart.length > 0 ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price x Quantity</th>
                <th></th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  increase={increase}
                  decrease={decrease}
                />
              ))}
            </tbody>
          </table>

          <span>Total: ${total}</span>
        </div>
      ) : (
        <h1>Cart empty, please add some coffee :)</h1>
      )}
    </div>
  );
}

export default Cart;
