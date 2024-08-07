export type basketProductTypes = {
  title: string;
  slug: string;
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
  price: number;
  discount: number;
  stock: number;
  choise_required: boolean;
  quantity: number;
  attributes:
    | {
        attr_title: string;
        attr_option: string;
      }[]
    | null;
};
