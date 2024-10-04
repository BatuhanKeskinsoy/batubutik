export const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;
export const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

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
