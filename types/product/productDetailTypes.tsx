export type productDetailTypes = {
  title: string;
  slug: string;
  code: string;
  mainCategory: string;
  mainCategory_slug: string;
  category: string;
  category_slug: string;
  subCategory: string;
  subCategory_slug: string;
  images: string[] | null;
  rating: number | null;
  total_comment: number;
  amount: number;
  discount: number;
  stock: number;
  tags: string[] | null;
  product_group: {
    group_name: string;
    products: { choise_name: string; code: string }[];
  } | null;
  attributes:
    | {
        required: boolean;
        attr_title: string;
        attr_options: { option_name: string; option_stock: number }[];
      }[]
    | null;
  choise_required: boolean;
};
