import Client from 'shopify-buy';

export const client = Client.buildClient({
  apiVersion: "2021-04",
  domain: `${process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN}`,
  storefrontAccessToken: `${process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN}`,
});