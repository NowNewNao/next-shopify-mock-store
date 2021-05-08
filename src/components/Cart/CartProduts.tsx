import { useCart } from "../../hooks/cart/use-cart";
import MuiLink from '@material-ui/core/Link';
import Link from "next/link";
import Image from "next/image";


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
                  <div>{item.title}</div>
                  <Image src={item.variant.image.src} width={90} height={60} alt={item.title}/>
                  <div>${item.variant.price}</div>
                  <div>{item.quantity}</div>
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