import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Product } from "shopify-buy";
import ProductCard from "../../components/Product/ProductCard";
import { client } from "../../shopify/client";
import Button from "@material-ui/core/Button";
import { useCart } from "../../hooks/cart/use-cart"

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {

const { addToCart }= useCart();
  const updateCart = async (id: string) => {
    await addToCart(id);
  };
  
  return (
    <>
      <Link href="/">
        <a>👈 Back to Product List</a>
      </Link>
      <ProductCard product={product} />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {updateCart(String(product.variants[0].id))}}
        >
        Add to Cart
      </Button>
    </>
  )
}
export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const product = await client.product.fetch(params?.id as string);
    if(!params) throw new Error('Product Not Found');
    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      }
    }
  } catch (error) {
    return {
      props: {
        errors: error.message
      }
    };
  }
}