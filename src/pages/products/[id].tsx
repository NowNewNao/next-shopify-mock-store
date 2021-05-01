import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { Product } from "shopify-buy";
import ProductCard from "../../components/Product/ProductCard";
import { client } from "../../shopify/client";

type Props = {
  product: Product;
};

const ProductDetail = ({ product }: Props) => {
  return (
    <>
      <Link href="/">
        <a>👈 Back to Product List</a>
      </Link>
      <ProductCard product={product} />
    </>
  )
}
export default ProductDetail;

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [],
  fallback: true,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = await client.product.fetch(params?.id as string);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}