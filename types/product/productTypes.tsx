export type productTypes = {
  id: number;
  title: string;
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
  status: boolean;
  featured_status: boolean;
  total_sold: number;
  created_at: Date;
  updated_at: Date | null;
};
