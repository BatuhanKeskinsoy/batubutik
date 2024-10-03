export const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;
export const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

export const generals = {
  logo: "/assets/logo/logo.svg",
  site_name: "Batubutik",
  free_shipping: 1000,
  shipping_price: 50,
  socials: [
    { platform: "Facebook", url: "/" },
    { platform: "Twitter", url: "/" },
    { platform: "İnstagram", url: "/" },
    { platform: "Youtube", url: "/" },
  ],
  address: "Meclis Mahallesi Derviş Sk. Fuat Ozal Apt No 38/1 Sancaktepe",
  email: "batubutik@info.com",
  phone: "08505058515",
  whatsapp_number: "05555058515",
  tags: [
    "Dantel İç Giyim",
    "Ekonomik İç Giyim",
    "Fantezi giyim",
    "Kadın iç giyim",
    "Kadın İç Çamaşır",
    "Likra İç Giyim",
    "Lüks İç Giyim",
    "Takım İç Giyim",
  ],
  return_conditions: "İptal ve İade Koşulları Henüz Belirtilmemiş!",
};

export const navLinks = [
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Hakkımızda",
    url: "/hakkimizda",
  },
  {
    title: "İletişim",
    url: "/iletisim",
  },
];

export const categories = [
  {
    name: "Erkek",
    slug: "erkek",
    product_count: 0,
    sub_categories: [
      { name: "Üst Giyim", slug: "ust-giyim", product_count: 0 },
      { name: "Alt Giyim", slug: "alt-giyim", product_count: 0 },
    ],
  },
  {
    name: "Kadın",
    slug: "kadin",
    product_count: 6,
    sub_categories: [
      { name: "Üst Giyim", slug: "ust-giyim", product_count: 0 },
      { name: "Alt Giyim", slug: "alt-giyim", product_count: 0 },
      { name: "İç Giyim", slug: "ic-giyim", product_count: 6 },
    ],
  },
  {
    name: "Çocuk",
    slug: "cocuk",
    product_count: 0,
    sub_categories: [
      { name: "Üst Giyim", slug: "ust-giyim", product_count: 0 },
      { name: "Alt Giyim", slug: "alt-giyim", product_count: 0 },
    ],
  },
  {
    name: "Aksesuar",
    slug: "aksesuar",
    product_count: 0,
  },
];

export const discountCodes = [
  {
    code: "CODE01",
    isPercentage: true,
    discount: 10,
  },
  {
    code: "CODE02",
    isPercentage: false,
    discount: 200,
  },
  {
    code: "CODE03",
    isPercentage: true,
    discount: 20,
  },
];
