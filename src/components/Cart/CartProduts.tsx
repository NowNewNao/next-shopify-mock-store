import { useCart } from '../../hooks/cart/use-cart';
import MuiLink from '@material-ui/core/Link';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../components/Molecules/Button';

const CartProducts: React.FC = () => {
  const { cart, removeProduct, changeQuantity } = useCart();
  const subtotal = (price: string, quantity: number) => {
    return parseInt(price, 10) * quantity;
  };

  return (
    cart && (
      <div>
        <div className="mt-2 md:mt-4 ml-2 md:ml-4">
          <Link href="/">
            <a className="text-gray-400 sm:text-xs md:text-xs lg:text-base">👈  Back to Product List</a>
          </Link>
        </div> 
        {cart.lineItems.length === 0 ? (
          <div className="h-screen relative">
            <p className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-gray-500">
              Your cart is empty. Enjoy Shoping! 
            </p>
          </div> 
        ) : (
          <div className="container mx-auto mt-10 p-4 md:w-8/12">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-xl md:text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-xl md:text-2xl">TOTAL ${cart.subtotalPrice}</h2>
              <Button
                text="PURCHASE"
                onClick={() => window.open(cart.webUrl)}
              / >
            </div>
            <div className="md:px-8">
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs sm:text-s uppercase w-2/5 sm:w-2/6 sm:text-left">Product</h3>
                <h3 className="font-semibold  text-gray-600 text-xs sm:text-s uppercase w-1/5 sm:w-1/6 sm:text-left">Price</h3>
                <h3 className="font-semibold text-gray-600 text-xs sm:text-s uppercase hidden sm:block sm:w-1/6 sm:text-left">Quantity</h3>
                <h3 className="font-semibold  text-gray-600 text-xs sm:text-s uppercase w-2/5 sm:w-1/6 text-center sm:text-left">Total</h3>
                <div className="hidden sm:w-1/6 "></div>
              </div>
              {cart.lineItems.map((item) => (
                <div key={item.id} className="flex mt-8">
                  <div className="flex flex-col justify-center w-3/6 sm:w-2/6">
                    <div className="text-xs sm:text-lg">{item.title}</div>
                    <div className="hidden sm:block">
                      <Image
                        src={item.variant.image.src}
                        width={90}
                        height={60}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <div className="w-1/6 text-xs sm:text-lg">${item.variant.price}</div>
                  <div className="w-1/6 text-xs sm:text-lg">
                    <select
                      defaultValue={item.quantity}
                      onChange={(e) => {
                        changeQuantity(item.id, e.target.value);
                      }}
                      
                    >
                      {[...Array(10).keys()].map((num) => {
                        const value = num + 1;
                        return (
                          <option key={value} value={value}>
                            {value}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-1/6 text-xs sm:text-lg">
                    $ {subtotal(item.variant.price, item.quantity)}</div>
                  <div className="w-1/6 text-xs sm:text-lg">
                    <MuiLink
                      component="button"
                      variant="body2"
                      onClick={() => removeProduct(String(item.id))}
                      className="w-1/6 text-xs sm:text-lg"
                    >
                      DELETE
                    </MuiLink>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
        )}
      </div>
    )
  );
};

export default CartProducts;
