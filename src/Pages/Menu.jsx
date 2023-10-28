import MenuItem from "../Components/MenuItem";
import useGlobalContext from "../globalContext";

function Menu() {
  const { menuItems } = useGlobalContext();
  return (
    <>
      <div className="container">
        {menuItems.map((item) => {
          return <MenuItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default Menu;
