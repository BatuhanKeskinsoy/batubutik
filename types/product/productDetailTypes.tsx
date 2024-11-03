import { imageTypes } from "../imageTypes";
import { productTypes } from "./productTypes";

export type productGroupProductsTypes = {
  choise_name: string;
  product: {
    code: string;
    title: string;
    slug: string;
    mainCategory_slug: string;
    category_slug: string | null;
    subCategory_slug: string | null;
    images: imageTypes[] | null;
  };
};

export type productDetailTypes = {
  title: string;
  short_text: string;
  slug: string;
  content: string;
  code: string;
  brand: string | null;
  mainCategory: string;
  mainCategory_slug: string;
  category: string | null;
  category_slug: string | null;
  subCategory: string | null;
  subCategory_slug: string | null;
  images: imageTypes[] | null;
  rating: number | null;
  total_comment: number;
  price: number;
  discount: number;
  stock: number;
  tags: string[] | null;
  product_group: {
    group_name: string;
    products: productGroupProductsTypes[];
  } | null;
  attributes:
    | {
        required: boolean;
        attr_title: string;
        attr_options: { option_name: string; option_stock: number }[];
      }[]
    | null;
  choise_required: boolean;
  other_products: productTypes[];
  status: boolean;
  featured_status: boolean;
  total_sold: number;
  meta_title: string;
  meta_description: string;
  created_at: Date;
  updated_at: Date | null;
};
