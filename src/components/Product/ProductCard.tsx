import Link from "next/link";
import Image from "next/image";
import { Product } from "shopify-buy";

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
  return (
    <>
      <Link href={`/products/${product.id}`}>
        <a>
          <h1>{product.title}</h1>
          <Image
            src={product.images[0].src}
            alt={product.title}
            width={300}
            height={200}
          />
          <p>{product.description}</p>
        </a>
      </Link>
    </>
  );
};

export default ProductCard;