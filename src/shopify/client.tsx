import Client from 'shopify-buy';

export const client = Client.buildClient({
  domain: "mock-ec-store.myshopify.com",
  storefrontAccessToken: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN}`,
});