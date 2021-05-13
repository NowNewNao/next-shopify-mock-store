import Link from 'next/link';
import Image from 'next/image';
import { Product } from 'shopify-buy';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="relative bg-white py-4 px-4 rounded-3xl max-w-xs h-104 m-4 shadow-xl hover:opacity-80 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
      <Link href={`/products/${product.id}`}>
        <a>
          <h1 className="text-xl font-semibold mt-2 text-green-500 overflow-x-auto h-8">
            {product.title}
          </h1>
          <div className="mt-2 ">
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
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;
