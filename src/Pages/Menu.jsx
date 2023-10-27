import MenuItem from "../Components/MenuItem";
import useGlobalContext from "../globalContext";
import { useEffect } from "react";

function Menu() {
  const { menuItems, total, sumTotal, sumQuantity } = useGlobalContext();
  useEffect(() => {
    sumTotal();
    sumQuantity();
  }, [sumTotal, sumQuantity]);
  return (
    <>
      <div className="container">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
      <span>Total: ${total}</span>
    </>
  );
}

export default Menu;
