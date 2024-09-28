export type productAttributeOptionsTypes = {
  option_name: string;
  option_stock: number;
};

export type productAttributesTypes = {
  attr_title: string;
  attr_options: productAttributeOptionsTypes[];
};

export type productTypes = {
  id: number;
  title: string;
  short_content: string;
  slug: string;
  code: string;
  brand: string | null;
  mainCategory: string;
  mainCategory_slug: string;
  category: string;
  category_slug: string;
  images: string[] | null;
  rating: number | null;
  price: number;
  discount: number;
  stock: number;
  choise_required: boolean;
  attributes: productAttributesTypes[] | null;
  status: boolean;
  featured_status: boolean;
  total_sold: number;
  created_at: Date;
  updated_at: Date | null;
};
