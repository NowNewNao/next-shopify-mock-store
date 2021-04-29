import { GetServerSideProps } from 'next';
import { Product } from 'shopify-buy';
import Layout from '../components/Layout';
import { useProducts } from '../hooks/products/use-products';

type Props = {
  products: Product[];
};

const ProductList = ({ products }: Props) => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Product List</h1>
      <ul>
        {products.map(p => 
          <li key={p.id}>
            {p.title}
            <img src={p.images[0].src} height={80}></img>
          </li>  
        )}
      </ul>
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

