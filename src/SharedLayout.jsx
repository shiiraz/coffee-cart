import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TotalDisplay from "./Components/TotalDisplay";
import useGlobalContext from "./globalContext";
import { useGlobalEffects } from "./hooks/useGlobalEffects";
function SharedLayout() {
  const { total, sumTotal, sumQuantity } = useGlobalContext();
  useGlobalEffects(sumTotal, sumQuantity);
  return (
    <>
      <Navbar />
      <Outlet />
      <TotalDisplay total={total} />
    </>
  );
}

export default SharedLayout;
