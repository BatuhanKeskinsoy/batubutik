import { generalsTypes } from "../generalTypes";
import { productTypes } from "../product/productTypes";

export type homeFullViewSliderTypes = {
  text_1: string;
  text_2: string;
  text_3: string;
  button_text: string;
  button_redirect: string;
  image: {
    original: string;
    thumbnail: string;
  };
};

export type homeProductFullTypes = {
  title: string;
  description: string;
  products: productTypes[];
};

export type homeTypes = {
  fullViewSlider: homeFullViewSliderTypes[];
  categories: {
    name: string;
    slug: string;
  }[];
  featuredProducts: homeProductFullTypes;
  newProducts: homeProductFullTypes;
  bestSellingProducts: homeProductFullTypes;
  about: {
    content: string;
    image: string;
  };
  generals: generalsTypes;
};
