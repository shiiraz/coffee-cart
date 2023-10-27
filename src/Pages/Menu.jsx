import MenuItem from "../Components/MenuItem";
import TotalDisplay from "../Components/TotalDisplay";
import useGlobalContext from "../globalContext";
import { useGlobalEffects } from "../hooks/useGlobalEffects";

function Menu() {
  const { menuItems, total, sumTotal, sumQuantity } = useGlobalContext();
  useGlobalEffects(sumTotal, sumQuantity);
  return (
    <>
      <div className="container">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
      <TotalDisplay total={total} />
    </>
  );
}

export default Menu;
