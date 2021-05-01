import Link from "next/link";
import Image from "next/image";
import { Product } from "shopify-buy";

type Props = {
  product: Product;
};

const ProductCard = ({product}: Props) => {
  return (
    <>
      <Link href={`product/${product.id}`}>
        <a>
          <Image
            src={product.images[0].src}
            alt={product.title}
            width={300}
            height={200}
          />
          <p>{product.title}</p>
          <p>{product.description}</p>
        </a>
      </Link>
    </>
  );
};

export default ProductCard;