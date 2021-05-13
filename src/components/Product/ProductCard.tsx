import Link from "next/link";
import { Product } from "shopify-buy";

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
  return (
    <div className="relative bg-white py-8 px-8 rounded-3xl w-96 h-112 m-4 shadow-xl hover:opacity-80">
      <Link href={`/products/${product.id}`}>
        <a>
          <h1 className="text-xl font-semibold mt-2 text-green-500 overflow-x-auto h-8">{product.title}</h1>
          <div className="mt-2 ">
            <img
              src={product.images[0].src}
              alt={product.title}
              width={320}
              height={210}
              className="rounded-2xl"
            />
          </div>
          <p className="overflow-y-auto h-32 text-gray-700 mt-2 px-2">
            {product.description}
          </p>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;