import useGlobalContext from "../globalContext";
import CartItem from "../Components/CartItem";
import { useGlobalEffects } from "../hooks/useGlobalEffects";
import TotalDisplay from "../Components/TotalDisplay";  

function Cart() {
  const { cart, increase, decrease, sumQuantity, total, sumTotal, deleteItem } =
    useGlobalContext();
  useGlobalEffects(sumTotal, sumQuantity);
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

          <TotalDisplay total={total} />
        </div>
      ) : (
        <h1>Cart empty, please add some coffee :)</h1>
      )}
    </div>
  );
}

export default Cart;
