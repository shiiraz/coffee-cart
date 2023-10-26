import MenuItem from "../Components/MenuItem";
import useGlobalContext from "../globalContext";

function Menu() {
  const { menuItems, total } = useGlobalContext();
  return (
    <>
      <div className="container">
        {menuItems.map((item) => {
          const { id, title, price } = item;
          return <MenuItem key={id} title={title} price={price} />;
        })}
      </div>
      <span>Total: ${total}</span>
    </>
  );
}

export default Menu;
