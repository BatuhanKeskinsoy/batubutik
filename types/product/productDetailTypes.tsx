export type productDetailTypes = {
  title: string;
  short_content: string;
  slug: string;
  content: string;
  code: string;
  brand: string | null;
  mainCategory: string;
  mainCategory_slug: string;
  category: string;
  category_slug: string;
  subCategory: string;
  subCategory_slug: string;
  images: string[] | null;
  rating: number | null;
  total_comment: number;
  price: number;
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
  status: boolean,
  featured_status: boolean,
  total_sold: number,
  meta_title: string,
  meta_description: string,
  created_at: Date,
  updated_at: Date | null,
};
