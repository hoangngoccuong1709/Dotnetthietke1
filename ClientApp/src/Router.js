import Cart from "./pages/cart/Cart";
import Home from "./pages/home/Home";
const Navigator = {
  Home: { path: "/", exact: true, title: "Home", component: Home },
  Cart: { path: "/giohang", exact: true, title: "Cart", component: Cart },
};
export default Navigator;
