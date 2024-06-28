import axios from "axios";

import { Product } from "../models/Product";

const BASE_URL = process.env.BASE_URL || "https://api.mercadolibre.com";

export const searchProducts = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/sites/MLB/search?q=${query}`);
  const products: Product[] = response.data.results.map((product: any) => ({
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: Math.floor(product.price),
      decimals: Math.round((product.price % 1) * 100),
    },
    picture_url: product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
  }));

  const categories =
    response.data.filters
      .find((filter: any) => filter.id === "category")
      ?.values[0]?.path_from_root.map((cat: any) => cat.name) || [];

  return {
    query,
    categories,
    products,
  };
};
