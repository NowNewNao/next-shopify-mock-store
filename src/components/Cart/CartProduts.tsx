import { useCart } from "../../hooks/cart/use-cart";
// import Image from 'next/image';
import MuiLink from '@material-ui/core/Link';
import Link from "next/link";

const CartProducts: React.FC = () => {
  const { cart, removeProduct } = useCart();
  console.log(`cart`,{cart});
  return (
    cart && (
      <>
          {cart.lineItems.length === 0 ? (
            <div>Empty Cart</div>
          ) : (
            <>
              {cart.lineItems.map(item => (
                <div key={item.id}>
                  {/* <Image
                  src={item.image.src}
                  alt={item.title ?? ''}
                  width={300}
                  height={300}
                  />  */}
                  <div>{item.title}</div>
                  {/* <div>${parseInt(item.price) * item.quantity}</div> */}
                  <MuiLink
                    component="button"
                    variant="body2"
                    onClick={() => removeProduct(String(item.id))}
                  >
                    DELETE
                  </MuiLink>
                </div>
              ))}
            </>
          )}
          <Link href="/">
            <a>👈 Back to Product List</a>
          </Link>
      </>
    )
  );
}

export default CartProducts;