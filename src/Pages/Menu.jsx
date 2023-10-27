import MenuItem from "../Components/MenuItem";
import useGlobalContext from "../globalContext";

function Menu() {
  const { menuItems, total } = useGlobalContext();
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
