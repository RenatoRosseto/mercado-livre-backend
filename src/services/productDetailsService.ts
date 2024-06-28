import axios from "axios";
import { ProductDetails } from "../models/Product";

const BASE_URL = process.env.BASE_URL || "https://api.mercadolibre.com";

export const getProductDetails = async (
  id: string
): Promise<ProductDetails> => {
  const productResponse = await axios.get(`${BASE_URL}/items/${id}`);
  const descriptionResponse = await axios.get(`${BASE_URL}/items/${id}/description`);

  const product = productResponse.data;
  const description = descriptionResponse.data;

  const categoriesResponse = await axios.get(`${BASE_URL}/categories/${product.category_id}`);
  const categories = categoriesResponse.data.path_from_root.map((cat: any) => cat.name);

  const getConditionText = (conditionValue: string) => {
    switch (conditionValue) {
      case "new":
        return "Novo";

      case "used":
        return "Usado";

      case "refurbished":
        return "Recondicionado";

      case "not_working":
        return "Não Funcional";

      default:
        return conditionValue;
    }
  };

  return {
    id: product.id,
    title: product.title,
    price: {
      currency: product.currency_id,
      amount: Math.floor(product.price),
      decimals: Math.round((product.price % 1) * 100),
    },
    picture_url: product.pictures[0].url,
    condition: getConditionText(product.condition),
    free_shipping: product.shipping.free_shipping,
    sold_qty: product.sold_quantity,
    description: description.plain_text,
    categories: categories,
  };
};
