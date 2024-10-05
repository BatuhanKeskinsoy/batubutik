export type mainCategoryTypes = {
  name: string;
  slug: string;
  product_count: number;
  categories: categoryTypes[] | null;
};

export type categoryTypes = {
  name: string;
  slug: string;
  product_count: number;
  sub_categories: subCategoryTypes[] | null;
};

export type subCategoryTypes = {
  name: string;
  slug: string;
  product_count: number;
};
