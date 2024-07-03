export const generals = {
  site_name: "Batubutik",
  free_shipping: 1000,
  socials: [
    { platform: "Facebook", url: "/" },
    { platform: "Twitter", url: "/" },
    { platform: "İnstagram", url: "/" },
    { platform: "Youtube", url: "/" },
  ],
  address: "Meclis Mahallesi Derviş Sk. Fuat Ozal Apt No 38/1 Sancaktepe",
  email: "batubutik@info.com",
  phone: "08505058515",
};

export const navLinks = [
  {
    title: "Anasayfa",
    url: "/",
  },
  {
    title: "Mağaza",
    url: "/magaza",
  },
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

export const instantProducts = [
  {
    id: 1,
    title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
    slug: "amor-bralet-jartiyer-ic-camasir-takimi",
    code: "ABJ-100",
    brand: "Gammi",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    images: [
      "/assets/products/product5.webp",
      "/assets/products/product2.webp",
      "/assets/products/product3.webp",
      "/assets/products/product4.webp",
      "/assets/products/product.webp",
    ],
    rating: 4.9,
    price: 460,
    discount: 10,
    stock: 50,
    choise_required: false,
    status: true,
    featured_status: false,
    total_sold: 0,
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 2,
    title: "Black Bralet Dress",
    slug: "black-bralet-dress",
    code: "BBD-101",
    brand: "Gammi",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    images: [
      "/assets/products/product6.webp",
      "/assets/products/product7.webp",
      "/assets/products/product8.webp",
      "/assets/products/product9.webp",
    ],
    rating: 4.4,
    price: 320,
    discount: 30,
    stock: 50,
    choise_required: false,
    status: true,
    featured_status: false,
    total_sold: 0,
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 3,
    title: "Burgundy Bralet Dress",
    slug: "burgundy-bralet-dress",
    code: "BBD-102",
    brand: "Gammi",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    images: [
      "/assets/products/product10.webp",
      "/assets/products/product11.webp",
      "/assets/products/product12.webp",
      "/assets/products/product13.webp",
    ],
    rating: 4.1,
    price: 370,
    discount: 0,
    stock: 50,
    choise_required: true,
    status: true,
    featured_status: false,
    total_sold: 0,
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 4,
    title: "Blue Bralet Dress",
    slug: "blue-bralet-dress",
    code: "BBD-103",
    brand: "Gammi",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    images: [
      "/assets/products/product14.webp",
      "/assets/products/product15.webp",
      "/assets/products/product16.webp",
    ],
    rating: 3.8,
    price: 410,
    discount: 15,
    stock: 50,
    choise_required: true,
    status: true,
    featured_status: false,
    total_sold: 0,
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 5,
    title: "Burgundy Bralet Dress 2",
    slug: "burgundy-bralet-dress-2",
    code: "BBD-104",
    brand: "Gammi",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    images: [
      "/assets/products/product11.webp",
      "/assets/products/product12.webp",
      "/assets/products/product16.webp",
      "/assets/products/product17.webp",
    ],
    rating: 2.4,
    price: 410,
    discount: 0,
    stock: 0,
    choise_required: true,
    status: true,
    featured_status: false,
    total_sold: 0,
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 6,
    title: "Tek Fotoğraflı Ürün",
    slug: "tek-fotograf-urun",
    code: "TFU-100",
    brand: null,
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    images: ["/assets/products/product15.webp"],
    rating: 2.4,
    price: 410,
    discount: 0,
    stock: 10,
    choise_required: true,
    status: true,
    featured_status: false,
    total_sold: 0,
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
];

export const instantProductDetail = {
  title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
  slug: "amor-bralet-jartiyer-ic-camasir-takimi",
  code: "ABJ-100",
  brand: "Gammi",
  mainCategory: "Kadın",
  mainCategory_slug: "kadin",
  category: "İç Giyim",
  category_slug: "ic-giyim",
  subCategory: "Takım",
  subCategory_slug: "takim",
  images: [
    "/assets/products/product5.webp",
    "/assets/products/product2.webp",
    "/assets/products/product3.webp",
    "/assets/products/product4.webp",
    "/assets/products/product.webp",
  ],
  rating: 4.9,
  total_comment: 864,
  price: 460,
  discount: 10,
  stock: 50,
  tags: [
    "Amor Bralet Jartiyer",
    "Kırmızı İç Çamaşır Takımı",
    "Kırmızı Bralet Jartiyer",
  ],
  product_group: {
    group_name: "Renk",
    products: [
      { choise_name: "Kırmızı", code: "BBD-103" },
      { choise_name: "Bordo", code: "BBD-102" },
    ],
  },
  attributes: [
    {
      required: true,
      attr_title: "Beden",
      attr_options: [
        { option_name: "XS", option_stock: 50 },
        { option_name: "S", option_stock: 50 },
        { option_name: "M", option_stock: 50 },
        { option_name: "L", option_stock: 50 },
        { option_name: "XL", option_stock: 50 },
        { option_name: "XXL", option_stock: 0 },
        { option_name: "3XL", option_stock: 50 },
        { option_name: "4XL", option_stock: 50 },
        { option_name: "5XL", option_stock: 50 },
      ],
    },
    {
      required: true,
      attr_title: "Boy",
      attr_options: [
        { option_name: "150", option_stock: 50 },
        { option_name: "151", option_stock: 0 },
        { option_name: "152", option_stock: 50 },
        { option_name: "153", option_stock: 50 },
        { option_name: "154", option_stock: 50 },
        { option_name: "155", option_stock: 50 },
        { option_name: "156", option_stock: 50 },
        { option_name: "157", option_stock: 50 },
        { option_name: "158", option_stock: 50 },
        { option_name: "159", option_stock: 50 },
        { option_name: "160", option_stock: 50 },
        { option_name: "161", option_stock: 50 },
        { option_name: "162", option_stock: 50 },
        { option_name: "163", option_stock: 50 },
        { option_name: "164", option_stock: 50 },
        { option_name: "165", option_stock: 50 },
      ],
    },
  ],
  choise_required: true,
  status: true,
  featured_status: false,
  total_sold: 0,
  created_at: new Date("2024-06-14T13:24:59.000000Z"),
  updated_at: null,
};