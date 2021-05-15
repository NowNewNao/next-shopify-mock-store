import Image from 'next/image';
import { Product } from 'shopify-buy';

type Props = {
  product: Product;
};

const ProductDetailLayout = ({ product }: Props) => {
  return (
    <div className="text-center mt-4 px-2 lg:mt-16">
        <h1 className="text-xl font-semibold mt-2 text-green-500 overflow-x-auto h-8">
          {product.title}
        </h1>
        <div className="mt-2">
          <Image
            src={product.images[0].src}
            alt={product.title}
            width={320}
            height={210}
            className="rounded-2xl"
          />
        </div>
        <p className="overflow-y-auto h-32 text-gray-700 mt-4 px-2">
          {product.description}
        </p>
    </div>
  );
};

export default ProductDetailLayout;
