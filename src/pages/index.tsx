import { GetServerSideProps } from 'next';
import { Product } from 'shopify-buy';
import Layout from '../components/Layout';
import ProductCard from '../components/Product/ProductCard';
import { useProducts } from '../hooks/products/use-products';

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <Layout title="Home">
      <h1>Product List</h1>
      <div className="flex items-center justify-center bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </Layout>
  );
};
export default ProductList;

export const getServerSideProps: GetServerSideProps = async () => {
  const products: Product[] = await useProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
};
