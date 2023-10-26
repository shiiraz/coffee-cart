import { BrowserRouter, Routes, Route } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Menu from "./Pages/Menu";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Menu />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
