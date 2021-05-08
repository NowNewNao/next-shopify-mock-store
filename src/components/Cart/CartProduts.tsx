import { useCart } from "../../hooks/cart/use-cart";
import MuiLink from '@material-ui/core/Link';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@material-ui/core";


const CartProducts: React.FC = () => {
  const { cart, removeProduct, changeQuantity } = useCart();
  const subtotal = (price: string, quantity: number) => {
    return parseInt(price, 10) * quantity;
  }

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
                  <select
                    defaultValue={item.quantity}
                    onChange={e => {
                      changeQuantity(item.id, e.target.value)
                    }}
                  >
                    {[...Array(10).keys()].map(num => {
                      const value = num +1;
                      return (
                        <option key={value} value={value}>
                          {value}
                        </option>
                      )
                    })}
                  </select>
                  <div>{subtotal(item.variant.price, item.quantity)}</div>
                  <MuiLink
                    component="button"
                    variant="body2"
                    onClick={() => removeProduct(String(item.id))}
                  >
                    DELETE
                  </MuiLink>
                </div>
              ))}
              <div>TOTAL ${cart.subtotalPrice}</div>
              <Button
                variant='contained'
                color="primary"
                onClick={()=> window.open(cart.webUrl)}
              >
                Purchase
              </Button>
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