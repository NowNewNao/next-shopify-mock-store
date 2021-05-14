import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Product } from 'shopify-buy';
import { client } from '../../shopify/client';
import { useCart } from '../../hooks/cart/use-cart';
import React, { useState } from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ProductDetailLayout from '../../components/Product/ProductDetailLayout';
import Button from '../../components/Molecules/Button';

type Props = {
  product: Product;
  errors?: any;
};

type ToastState = {
  open: boolean;
} & SnackbarOrigin;

const ProductDetail = ({ product, errors }: Props) => {
  const [toastState, setToastState] = useState<ToastState>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = toastState;
  const close = () => {
    setToastState({ ...toastState, open: false });
  };

  const { addToCart } = useCart();
  const updateCart = async (id: string) => {
    await addToCart(id);
    setToastState({ ...toastState, open: true });
  };

  if (!product) return <div>loading...</div>;
  if (errors) return <div>error</div>;

  return (
    <>
      <Link href="/">
        <a>👈 Back to Product List</a>
      </Link>
      <ProductDetailLayout product={product} />
      <Button
        text="Add to Cart"
        onClick={() => {
          updateCart(String(product.variants[0].id));
        }}
      />
      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={close}
        key={vertical + horizontal}
      >
        <MuiAlert elevation={6} variant="filled" severity="success">
          Successfully Added to Your Cart!
        </MuiAlert>
      </Snackbar>
    </>
  );
};
export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const product = await client.product.fetch(params?.id as string);
    if (!params) throw new Error('Product Not Found');
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      },
    };
  } catch (error) {
    return {
      props: {
        errors: error.message,
      },
    };
  }
};
