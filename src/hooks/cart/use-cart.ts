import { useEffect } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Cart as SdkCart, ProductVariant as SdkProductVariant } from "shopify-buy";
import { getCheckoutId, setCheckoutId } from '../../utils/helper';
import { client } from '../../shopify/client';

/*
** JavaScript Buy SDK misses some TypeScript Type defenitions
*/
type SelectedOption = {
  name: string;
  value: string;
};

type Sku = {
  selectedOptions: SelectedOption[];
  image: {
    altText?: string | null;
  };
  product: {
    id: string;
  };
} & SdkProductVariant;

type lineItem = {
  id: string;
  title: string;
  quantity: number;
  variant: Sku;
};

type Cart = {
  lineItems: lineItem[];
  webUrl: string;
} & SdkCart;

type useCartInterface = {
  cart: Cart | null;
  cartItemQuantity: number;
  changeQuantity: (id: string | number, quantity: string) => void;
  addToCart: (id: string | number) => Promise<void>;
  removeProduct: (id: string) => void;
  fetchCart: () => void;
}

const cartState = atom<Cart | null>({
  key: 'cartState',
  default: null,
});

const cartItemQuantityState = selector({
  key: 'cartItemQuantityState',
  get: ({get}) => 
    get(cartState)?.lineItems.reduce((acc, cur) => 
    acc + cur.quantity,
      0
    ) ?? 0,
});

export const useCart = (): useCartInterface => {
  const [cart, setCart] = useRecoilState(cartState);
  const cartItemQuantity = useRecoilValue(cartItemQuantityState);

  // カートの初期化
  const initializeCart = () => {
    useEffect(() => {
      const checkoutId = getCheckoutId();
      if(checkoutId) return;
      client.checkout.create().then(cart => {
        setCart(cart as Cart);
        setCheckoutId(cart.id);
      });
    },[]);
    return;
  };

  initializeCart();

  // 商品数の変更
  const changeQuantity = (id: string | number, quantity: string) => {
    if(!cart) return;
    client.checkout
      .updateLineItems(cart.id, [{id: id, quantity: parseInt(quantity)}])
      .then((cart) => {
        setCart(cart as Cart);
      });
  };

  // 商品を追加
  const addToCart = (id: string | number): Promise<void> => {
    console.log(`id`,id)
    return client.checkout
      .addLineItems(getCheckoutId(), [
        {
          variantId: `${String(id)}`,
          quantity: 1,
        },
      ])
      .then(cart => {setCart(cart as Cart)});
  }

  // 商品を削除
  const removeProduct = (id: string) => {
    if(!cart) return;
    client.checkout.removeLineItems(cart.id, [id]).then(cart => {
      setCart(cart as Cart);
    });
  } 

  // カートを取得
  const fetchCart = () => {
    useEffect(() => {
      const checkoutId = getCheckoutId();
      if(!checkoutId) return;
      client.checkout.fetch(checkoutId).then(cart => setCart(cart as Cart));
    }, []);
  }

  return {
    cart,
    cartItemQuantity,
    changeQuantity,
    addToCart,
    removeProduct,
    fetchCart
  }
};