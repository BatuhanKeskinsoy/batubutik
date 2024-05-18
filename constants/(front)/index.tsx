export const generals = {
  site_name: "Batubutik",
  free_shipping: 1000,
};

export const instantProducts = [
  {
    id: 1,
    title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
    slug: "amor-bralet-jartiyer-ic-camasir-takimi",
    code: "ABJ-100",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      "/assets/products/product5.jpg",
      "/assets/products/product2.jpg",
      "/assets/products/product3.jpg",
      "/assets/products/product4.jpg",
      "/assets/products/product.jpg",
    ],
    rating: 4.9,
    amount: 460,
    discount: 10,
    stock: 50,
    choise_required: false,
  },
  {
    id: 2,
    title: "Black Bralet Dress",
    slug: "black-bralet-dress",
    code: "BBD-101",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      "/assets/products/product6.jpg",
      "/assets/products/product7.jpg",
      "/assets/products/product8.jpg",
      "/assets/products/product9.jpg",
    ],
    rating: 4.4,
    amount: 320,
    discount: 30,
    stock: 50,
    choise_required: false,
  },
  {
    id: 3,
    title: "Burgundy Bralet Dress",
    slug: "burgundy-bralet-dress",
    code: "BBD-102",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      "/assets/products/product10.jpg",
      "/assets/products/product11.jpg",
      "/assets/products/product12.jpg",
      "/assets/products/product13.jpg",
    ],
    rating: 4.1,
    amount: 370,
    discount: 0,
    stock: 50,
    choise_required: true,
  },
  {
    id: 4,
    title: "Blue Bralet Dress",
    slug: "blue-bralet-dress",
    code: "BBD-103",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      "/assets/products/product14.jpg",
      "/assets/products/product15.jpg",
      "/assets/products/product16.jpg",
    ],
    rating: 3.8,
    amount: 410,
    discount: 15,
    stock: 50,
    choise_required: true,
  },
  {
    id: 5,
    title: "Burgundy Bralet Dress 2",
    slug: "burgundy-bralet-dress-2",
    code: "BBD-104",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      "/assets/products/product11.jpg",
      "/assets/products/product12.jpg",
      "/assets/products/product16.jpg",
      "/assets/products/product17.jpg",
    ],
    rating: 2.4,
    amount: 410,
    discount: 0,
    stock: 0,
    choise_required: true,
  },
  {
    id: 6,
    title: "Tek Fotoğraflı Ürün",
    slug: "tek-fotograf-urun",
    code: "TFU-100",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: ["/assets/products/product15.jpg"],
    rating: 2.4,
    amount: 410,
    discount: 0,
    stock: 10,
    choise_required: true,
  },
];

export const instantProductDetail = {
  title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
  slug: "amor-bralet-jartiyer-ic-camasir-takimi",
  code: "ABJ-100",
  mainCategory: "Kadın",
  mainCategory_slug: "kadin",
  category: "İç Giyim",
  category_slug: "ic-giyim",
  subCategory: "Takım",
  subCategory_slug: "takim",
  images: [
    "/assets/products/product5.jpg",
    "/assets/products/product2.jpg",
    "/assets/products/product3.jpg",
    "/assets/products/product4.jpg",
    "/assets/products/product.jpg",
  ],
  rating: 4.9,
  total_comment: 864,
  amount: 460,
  discount: 10,
  stock: 50,
  tags: [
    "Amor Bralet Jartiyer",
    "Kırmızı İç Çamaşır Takımı",
    "Kırmızı Bralet Jartiyer",
  ],
  product_group: {
    required: true,
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
};
