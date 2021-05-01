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
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Product List</h1>
        {products.map(p => 
          <ProductCard key={p.id} product={p}/>
        )}
    </Layout>
  )
};
export default ProductList;

export const getServerSideProps: GetServerSideProps = async () => {
  const products: Product[] = await useProducts();
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    }
  }
}

