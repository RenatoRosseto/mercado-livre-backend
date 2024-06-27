export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface Product {
  id: string;
  title: string;
  price: Price;
  picture_url: string;
  condition: string;
  free_shipping: boolean;
  categories: string[];
}

export interface ProductDetails extends Product {
  sold_qty: number;
  description: string;
}
