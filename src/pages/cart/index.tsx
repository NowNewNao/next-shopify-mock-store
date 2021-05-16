import CartProducts from '../../components/Cart/CartProduts';
import Loading from '../../components/Molecules/Loading';
import { useCart } from '../../hooks/cart/use-cart';

const CartTopPage: React.FC = () => {
  const { cart, fetchCart } = useCart();
  fetchCart();
  return cart ? <CartProducts /> : <Loading />;
};

export default CartTopPage;
