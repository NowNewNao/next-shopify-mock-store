import { Product } from "shopify-buy";
import { client } from "../../shopify/client";

export const useProducts = (): Promise<Product[]> => {
  return client.product.fetchAll();
}