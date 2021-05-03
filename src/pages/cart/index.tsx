import CartProducts from "../../components/Cart/CartProduts";
import { useCart } from "../../hooks/cart/use-cart";

const CartTopPage: React.FC = () => {
  const { cart, fetchCart } = useCart();
  fetchCart();
  return cart ? <CartProducts /> : <p>loading...</p>;
}

export default CartTopPage;