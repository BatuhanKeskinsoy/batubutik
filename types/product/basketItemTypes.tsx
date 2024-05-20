export type basketItemTypes = {
  product_code: string;
  quantity: number;
  attributes:
    | {
        attr_title: string;
        attr_option: string;
      }[]
    | null;
};
