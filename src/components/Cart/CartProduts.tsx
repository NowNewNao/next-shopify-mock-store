import { useCart } from "../../hooks/cart/use-cart";
import Image from 'next/image';
import MuiLink from '@material-ui/core/Link';

const CartProducts: React.FC = () => {
  const { cart, removeProduct } = useCart();
  return (
    cart && (
      <>
          {cart.lineItems.length === 0 ? (
            <div>Empty Cart</div>
          ) : (
            <>
              {cart.lineItems.map(product => (
                <>
                  <Image
                  src={product.image.src}
                  alt={product.title ?? ''}
                  width={300}
                  height={300}
                  /> 
                  <div>{product.title}</div>
                  <div>${parseInt(product.price) * product.quantity}</div>
                  <MuiLink
                    component="button"
                    variant="body2"
                    onClick={() => removeProduct(String(product.id))}
                  >
                    DELETE
                  </MuiLink>
                </>
              ))}
            </>
          )}
      </>
    )
  );
}

export default CartProducts;