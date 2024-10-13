import { productTypes } from "@/types/product/productTypes";

export type orderProductTypes = {
  product: productTypes;
  quantity: number;
  attributes:
    | {
        attr_title: string;
        attr_options: {
          option_name: string;
        };
      }[]
    | null;
};

export type orderTypes = {
  id: number;
  order_no: string;
  products: orderProductTypes[];
  discount: number | null;
  price: number;
  created_at: Date;
};
