import axios from "axios";

const BASE_URL = process.env.BASE_URL || "https://api.mercadolibre.com";

export const getProductDetails = async (id: string) => {
  const productResponse = await axios.get(`${BASE_URL}/items/${id}`);
  const descriptionResponse = await axios.get(`${BASE_URL}/items/${id}/description`);

  const product = productResponse.data;
  const description = descriptionResponse.data;

  const categoriesResponse = await axios.get(`${BASE_URL}/categories/${product.category_id}`);
  const categories = categoriesResponse.data.path_from_root.map((cat: any) => cat.name);

  return {
    categories,
    product: {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: Math.floor(product.price),
        decimals: +(product.price % 1).toFixed(2) * 100
      },
      picture_url: product.pictures[0].url,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_qty: product.sold_quantity,
      description: description.plain_text
    }
  };
};
