export type socialTypes = { platform: string; url: string };

export type generalsTypes = {
  logo: string;
  site_name: string;
  free_shipping: number;
  shipping_price: number;
  socials: socialTypes[] | null;
  address: string;
  email: string;
  phone: string;
  whatsapp_number: string;
  tags: string[];
  return_conditions: string;
};
