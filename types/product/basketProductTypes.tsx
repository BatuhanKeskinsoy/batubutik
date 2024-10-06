import { imageTypes } from "../imageTypes";

export type basketProductTypes = {
  title: string;
  short_content: string;
  slug: string;
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
