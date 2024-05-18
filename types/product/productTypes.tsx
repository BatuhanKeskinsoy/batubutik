export type productTypes = {
  id: number;
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
  amount: number;
  discount: number;
  stock: number;
  choise_required: boolean;
};
