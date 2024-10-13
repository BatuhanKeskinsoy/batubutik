export type basketItemTypes = {
  product_code: string;
  quantity: number;
  attributes:
    | {
        required: boolean;
        attr_title: string;
        attr_option: string;
      }[]
    | null;
};
