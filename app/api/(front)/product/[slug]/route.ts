import { NextResponse } from "next/server";

const products = [
  {
    title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
    short_text: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
    slug: "amor-bralet-jartiyer-ic-camasir-takimi",
    content:
      `<h1>Başlık H1</h1>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h4>Başlık H4</h4>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>`,
    code: "ABJ-100",
    brand: "Penti",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      {
        original: "/assets/products/original/product5.webp",
        thumbnail: "/assets/products/thumbnail/product5.webp",
      },
      {
        original: "/assets/products/original/product2.webp",
        thumbnail: "/assets/products/thumbnail/product2.webp",
      },
      {
        original: "/assets/products/original/product3.webp",
        thumbnail: "/assets/products/thumbnail/product3.webp",
      },
      {
        original: "/assets/products/original/product4.webp",
        thumbnail: "/assets/products/thumbnail/product4.webp",
      },
      {
        original: "/assets/products/original/product.webp",
        thumbnail: "/assets/products/thumbnail/product.webp",
      },
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
        {
          choise_name: "Kırmızı",
          product: {
            title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
            slug: "amor-bralet-jartiyer-ic-camasir-takimi",
            code: "ABJ-100",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product5.webp",
                thumbnail: "/assets/products/thumbnail/product5.webp",
              },
              {
                original: "/assets/products/original/product2.webp",
                thumbnail: "/assets/products/thumbnail/product2.webp",
              },
              {
                original: "/assets/products/original/product3.webp",
                thumbnail: "/assets/products/thumbnail/product3.webp",
              },
              {
                original: "/assets/products/original/product4.webp",
                thumbnail: "/assets/products/thumbnail/product4.webp",
              },
              {
                original: "/assets/products/original/product.webp",
                thumbnail: "/assets/products/thumbnail/product.webp",
              },
            ],
          },
        },
        {
          choise_name: "Siyah",
          product: {
            title: "Black Bralet Dress",
            slug: "black-bralet-dress",
            code: "BBD-101",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product6.webp",
                thumbnail: "/assets/products/thumbnail/product6.webp",
              },
              {
                original: "/assets/products/original/product7.webp",
                thumbnail: "/assets/products/thumbnail/product7.webp",
              },
              {
                original: "/assets/products/original/product8.webp",
                thumbnail: "/assets/products/thumbnail/product8.webp",
              },
              {
                original: "/assets/products/original/product9.webp",
                thumbnail: "/assets/products/thumbnail/product9.webp",
              },
            ],
          },
        },
        {
          choise_name: "Mavi",
          product: {
            title: "Blue Bralet Dress",
            slug: "blue-bralet-dress",
            code: "BBD-103",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product14.webp",
                thumbnail: "/assets/products/thumbnail/product14.webp",
              },
              {
                original: "/assets/products/original/product15.webp",
                thumbnail: "/assets/products/thumbnail/product15.webp",
              },
              {
                original: "/assets/products/original/product16.webp",
                thumbnail: "/assets/products/thumbnail/product16.webp",
              },
            ],
          },
        },
        {
          choise_name: "Bordo",
          product: {
            title: "Burgundy Bralet Dress",
            slug: "burgundy-bralet-dress",
            code: "BBD-102",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product11.webp",
                thumbnail: "/assets/products/thumbnail/product11.webp",
              },
              {
                original: "/assets/products/original/product12.webp",
                thumbnail: "/assets/products/thumbnail/product12.webp",
              },
              {
                original: "/assets/products/original/product13.webp",
                thumbnail: "/assets/products/thumbnail/product13.webp",
              },
              {
                original: "/assets/products/original/product10.webp",
                thumbnail: "/assets/products/thumbnail/product10.webp",
              },
            ],
          },
        },
      ],
    },
    choise_required: false,
    attributes: [
      {
        required: false,
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
        required: false,
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
    status: true,
    featured_status: false,
    total_sold: 0,
    meta_title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
    meta_description:
      "Amor bralet jartiyer iç çamaşır takımı çok uygun fiyatlarla sadece web sitemizde.",
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 2,
    title: "Black Bralet Dress",
    short_text: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
    slug: "black-bralet-dress",
    content:
      `<h1>Başlık H1</h1>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h4>Başlık H4</h4>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>`,
    code: "BBD-101",
    brand: "Penti",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      {
        original: "/assets/products/original/product6.webp",
        thumbnail: "/assets/products/thumbnail/product6.webp",
      },
      {
        original: "/assets/products/original/product7.webp",
        thumbnail: "/assets/products/thumbnail/product7.webp",
      },
      {
        original: "/assets/products/original/product8.webp",
        thumbnail: "/assets/products/thumbnail/product8.webp",
      },
      {
        original: "/assets/products/original/product9.webp",
        thumbnail: "/assets/products/thumbnail/product9.webp",
      },
    ],
    rating: 4.4,
    total_comment: 864,
    price: 320,
    discount: 30,
    stock: 50,
    tags: [
      "Amor Bralet Jartiyer",
      "Kırmızı İç Çamaşır Takımı",
      "Kırmızı Bralet Jartiyer",
    ],
    product_group: {
      group_name: "Renk",
      products: [
        {
          choise_name: "Siyah",
          product: {
            title: "Black Bralet Dress",
            slug: "black-bralet-dress",
            code: "BBD-101",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product6.webp",
                thumbnail: "/assets/products/thumbnail/product6.webp",
              },
              {
                original: "/assets/products/original/product7.webp",
                thumbnail: "/assets/products/thumbnail/product7.webp",
              },
              {
                original: "/assets/products/original/product8.webp",
                thumbnail: "/assets/products/thumbnail/product8.webp",
              },
              {
                original: "/assets/products/original/product9.webp",
                thumbnail: "/assets/products/thumbnail/product9.webp",
              },
            ],
          },
        },
        {
          choise_name: "Kırmızı",
          product: {
            title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
            slug: "amor-bralet-jartiyer-ic-camasir-takimi",
            code: "ABJ-100",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product5.webp",
                thumbnail: "/assets/products/thumbnail/product5.webp",
              },
              {
                original: "/assets/products/original/product2.webp",
                thumbnail: "/assets/products/thumbnail/product2.webp",
              },
              {
                original: "/assets/products/original/product3.webp",
                thumbnail: "/assets/products/thumbnail/product3.webp",
              },
              {
                original: "/assets/products/original/product4.webp",
                thumbnail: "/assets/products/thumbnail/product4.webp",
              },
              {
                original: "/assets/products/original/product.webp",
                thumbnail: "/assets/products/thumbnail/product.webp",
              },
            ],
          },
        },
        {
          choise_name: "Mavi",
          product: {
            title: "Blue Bralet Dress",
            slug: "blue-bralet-dress",
            code: "BBD-103",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product14.webp",
                thumbnail: "/assets/products/thumbnail/product14.webp",
              },
              {
                original: "/assets/products/original/product15.webp",
                thumbnail: "/assets/products/thumbnail/product15.webp",
              },
              {
                original: "/assets/products/original/product16.webp",
                thumbnail: "/assets/products/thumbnail/product16.webp",
              },
            ],
          },
        },
        {
          choise_name: "Bordo",
          product: {
            title: "Burgundy Bralet Dress",
            slug: "burgundy-bralet-dress",
            code: "BBD-102",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product11.webp",
                thumbnail: "/assets/products/thumbnail/product11.webp",
              },
              {
                original: "/assets/products/original/product12.webp",
                thumbnail: "/assets/products/thumbnail/product12.webp",
              },
              {
                original: "/assets/products/original/product13.webp",
                thumbnail: "/assets/products/thumbnail/product13.webp",
              },
              {
                original: "/assets/products/original/product10.webp",
                thumbnail: "/assets/products/thumbnail/product10.webp",
              },
            ],
          },
        },
      ],
    },
    choise_required: true,
    attributes: [
      {
        required: true,
        attr_title: "Beden",
        attr_options: [
          { option_name: "XS", option_stock: 50 },
          { option_name: "S", option_stock: 50 },
          { option_name: "M", option_stock: 50 },
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
        ],
      },
    ],
    status: true,
    featured_status: false,
    total_sold: 0,
    meta_title: "Black Bralet Dress",
    meta_description:
      "Black Bralet Dress çok uygun fiyatlarla sadece web sitemizde.",
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 3,
    title: "Burgundy Bralet Dress",
    short_text: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
    slug: "burgundy-bralet-dress",
    content:
      `<h1>Başlık H1</h1>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h4>Başlık H4</h4>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>`,
    code: "BBD-102",
    brand: "Penti",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      {
        original: "/assets/products/original/product11.webp",
        thumbnail: "/assets/products/thumbnail/product11.webp",
      },
      {
        original: "/assets/products/original/product12.webp",
        thumbnail: "/assets/products/thumbnail/product12.webp",
      },
      {
        original: "/assets/products/original/product13.webp",
        thumbnail: "/assets/products/thumbnail/product13.webp",
      },
      {
        original: "/assets/products/original/product10.webp",
        thumbnail: "/assets/products/thumbnail/product10.webp",
      },
    ],
    rating: 4.1,
    total_comment: 864,
    price: 370,
    discount: 0,
    stock: 50,
    tags: [
      "Amor Bralet Jartiyer",
      "Kırmızı İç Çamaşır Takımı",
      "Kırmızı Bralet Jartiyer",
    ],
    product_group: {
      group_name: "Renk",
      products: [
        {
          choise_name: "Bordo",
          product: {
            title: "Burgundy Bralet Dress",
            slug: "burgundy-bralet-dress",
            code: "BBD-102",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product11.webp",
                thumbnail: "/assets/products/thumbnail/product11.webp",
              },
              {
                original: "/assets/products/original/product12.webp",
                thumbnail: "/assets/products/thumbnail/product12.webp",
              },
              {
                original: "/assets/products/original/product13.webp",
                thumbnail: "/assets/products/thumbnail/product13.webp",
              },
              {
                original: "/assets/products/original/product10.webp",
                thumbnail: "/assets/products/thumbnail/product10.webp",
              },
            ],
          },
        },
        {
          choise_name: "Siyah",
          product: {
            title: "Black Bralet Dress",
            slug: "black-bralet-dress",
            code: "BBD-101",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product6.webp",
                thumbnail: "/assets/products/thumbnail/product6.webp",
              },
              {
                original: "/assets/products/original/product7.webp",
                thumbnail: "/assets/products/thumbnail/product7.webp",
              },
              {
                original: "/assets/products/original/product8.webp",
                thumbnail: "/assets/products/thumbnail/product8.webp",
              },
              {
                original: "/assets/products/original/product9.webp",
                thumbnail: "/assets/products/thumbnail/product9.webp",
              },
            ],
          },
        },
        {
          choise_name: "Kırmızı",
          product: {
            title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
            slug: "amor-bralet-jartiyer-ic-camasir-takimi",
            code: "ABJ-100",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product5.webp",
                thumbnail: "/assets/products/thumbnail/product5.webp",
              },
              {
                original: "/assets/products/original/product2.webp",
                thumbnail: "/assets/products/thumbnail/product2.webp",
              },
              {
                original: "/assets/products/original/product3.webp",
                thumbnail: "/assets/products/thumbnail/product3.webp",
              },
              {
                original: "/assets/products/original/product4.webp",
                thumbnail: "/assets/products/thumbnail/product4.webp",
              },
              {
                original: "/assets/products/original/product.webp",
                thumbnail: "/assets/products/thumbnail/product.webp",
              },
            ],
          },
        },
        {
          choise_name: "Mavi",
          product: {
            title: "Blue Bralet Dress",
            slug: "blue-bralet-dress",
            code: "BBD-103",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product14.webp",
                thumbnail: "/assets/products/thumbnail/product14.webp",
              },
              {
                original: "/assets/products/original/product15.webp",
                thumbnail: "/assets/products/thumbnail/product15.webp",
              },
              {
                original: "/assets/products/original/product16.webp",
                thumbnail: "/assets/products/thumbnail/product16.webp",
              },
            ],
          },
        },
      ],
    },
    choise_required: true,
    attributes: [
      {
        required: true,
        attr_title: "Beden",
        attr_options: [
          { option_name: "XS", option_stock: 50 },
          { option_name: "S", option_stock: 50 },
          { option_name: "M", option_stock: 50 },
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
    status: true,
    featured_status: false,
    total_sold: 0,
    meta_title: "Burgundy Bralet Dress",
    meta_description:
      "Burgundy Bralet Dress çok uygun fiyatlarla sadece web sitemizde.",
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 4,
    title: "Blue Bralet Dress",
    short_text: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
    slug: "blue-bralet-dress",
    content:
      `<h1>Başlık H1</h1>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h4>Başlık H4</h4>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>`,
    code: "BBD-103",
    brand: "Penti",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: "Takım",
    subCategory_slug: "takim",
    images: [
      {
        original: "/assets/products/original/product14.webp",
        thumbnail: "/assets/products/thumbnail/product14.webp",
      },
      {
        original: "/assets/products/original/product15.webp",
        thumbnail: "/assets/products/thumbnail/product15.webp",
      },
      {
        original: "/assets/products/original/product16.webp",
        thumbnail: "/assets/products/thumbnail/product16.webp",
      },
    ],
    rating: 3.8,
    total_comment: 864,
    price: 410,
    discount: 15,
    stock: 50,
    tags: [
      "Amor Bralet Jartiyer",
      "Kırmızı İç Çamaşır Takımı",
      "Kırmızı Bralet Jartiyer",
    ],
    product_group: {
      group_name: "Renk",
      products: [
        {
          choise_name: "Mavi",
          product: {
            title: "Blue Bralet Dress",
            slug: "blue-bralet-dress",
            code: "BBD-103",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product14.webp",
                thumbnail: "/assets/products/thumbnail/product14.webp",
              },
              {
                original: "/assets/products/original/product15.webp",
                thumbnail: "/assets/products/thumbnail/product15.webp",
              },
              {
                original: "/assets/products/original/product16.webp",
                thumbnail: "/assets/products/thumbnail/product16.webp",
              },
            ],
          },
        },
        {
          choise_name: "Bordo",
          product: {
            title: "Burgundy Bralet Dress",
            slug: "burgundy-bralet-dress",
            code: "BBD-102",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product11.webp",
                thumbnail: "/assets/products/thumbnail/product11.webp",
              },
              {
                original: "/assets/products/original/product12.webp",
                thumbnail: "/assets/products/thumbnail/product12.webp",
              },
              {
                original: "/assets/products/original/product13.webp",
                thumbnail: "/assets/products/thumbnail/product13.webp",
              },
              {
                original: "/assets/products/original/product10.webp",
                thumbnail: "/assets/products/thumbnail/product10.webp",
              },
            ],
          },
        },
        {
          choise_name: "Siyah",
          product: {
            title: "Black Bralet Dress",
            slug: "black-bralet-dress",
            code: "BBD-101",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product6.webp",
                thumbnail: "/assets/products/thumbnail/product6.webp",
              },
              {
                original: "/assets/products/original/product7.webp",
                thumbnail: "/assets/products/thumbnail/product7.webp",
              },
              {
                original: "/assets/products/original/product8.webp",
                thumbnail: "/assets/products/thumbnail/product8.webp",
              },
              {
                original: "/assets/products/original/product9.webp",
                thumbnail: "/assets/products/thumbnail/product9.webp",
              },
            ],
          },
        },
        {
          choise_name: "Kırmızı",
          product: {
            title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
            slug: "amor-bralet-jartiyer-ic-camasir-takimi",
            code: "ABJ-100",
            mainCategory_slug: "kadin",
            category_slug: "ic-giyim",
            subCategory_slug: null,
            images: [
              {
                original: "/assets/products/original/product5.webp",
                thumbnail: "/assets/products/thumbnail/product5.webp",
              },
              {
                original: "/assets/products/original/product2.webp",
                thumbnail: "/assets/products/thumbnail/product2.webp",
              },
              {
                original: "/assets/products/original/product3.webp",
                thumbnail: "/assets/products/thumbnail/product3.webp",
              },
              {
                original: "/assets/products/original/product4.webp",
                thumbnail: "/assets/products/thumbnail/product4.webp",
              },
              {
                original: "/assets/products/original/product.webp",
                thumbnail: "/assets/products/thumbnail/product.webp",
              },
            ],
          },
        },
      ],
    },
    choise_required: true,
    attributes: [
      {
        required: true,
        attr_title: "Beden",
        attr_options: [
          { option_name: "XS", option_stock: 50 },
          { option_name: "S", option_stock: 50 },
        ],
      },
      {
        required: false,
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
    status: true,
    featured_status: false,
    total_sold: 0,
    meta_title: "Blue Bralet Dress",
    meta_description:
      "Blue Bralet Dress çok uygun fiyatlarla sadece web sitemizde.",
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 5,
    title: "Burgundy Bralet Dress 2",
    short_text: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
    slug: "burgundy-bralet-dress-2",
    content:
      `<h1>Başlık H1</h1>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h4>Başlık H4</h4>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>`,
    code: "BBD-104",
    brand: "LC Waikiki",
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: "İç Giyim",
    category_slug: "ic-giyim",
    subCategory: null,
    subCategory_slug: null,
    images: [
      {
        original: "/assets/products/original/product17.webp",
        thumbnail: "/assets/products/thumbnail/product17.webp",
      },
      {
        original: "/assets/products/original/product11.webp",
        thumbnail: "/assets/products/thumbnail/product11.webp",
      },
      {
        original: "/assets/products/original/product12.webp",
        thumbnail: "/assets/products/thumbnail/product12.webp",
      },
      {
        original: "/assets/products/original/product16.webp",
        thumbnail: "/assets/products/thumbnail/product16.webp",
      },
    ],
    rating: 2.4,
    total_comment: 864,
    price: 410,
    discount: 0,
    stock: 0,
    tags: [
      "Amor Bralet Jartiyer",
      "Kırmızı İç Çamaşır Takımı",
      "Kırmızı Bralet Jartiyer",
    ],
    product_group: null,
    choise_required: true,
    attributes: [
      {
        required: true,
        attr_title: "Beden",
        attr_options: [{ option_name: "5XL", option_stock: 50 }],
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
    status: true,
    featured_status: false,
    total_sold: 0,
    meta_title: "Burgundy Bralet Dress 2",
    meta_description:
      "Burgundy Bralet Dress 2 çok uygun fiyatlarla sadece web sitemizde.",
    created_at: new Date("2024-06-14T13:24:59.000000Z"),
    updated_at: null,
  },
  {
    id: 6,
    title: "Tek Fotoğraflı Ürün",
    short_text: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
    slug: "tek-fotograf-urun",
    content:
      `<h1>Başlık H1</h1>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h2>Başlık H2</h2>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h3>Başlık H3</h3>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>` +
      `<h4>Başlık H4</h4>` +
      `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloremque, praesentium autem placeat obcaecati voluptates, at adipisci laborum nulla temporibus assumenda laudantium sit labore? Architecto dicta repudiandae quisquam minus mollitia.</p>`,
    code: "TFU-100",
    brand: null,
    mainCategory: "Kadın",
    mainCategory_slug: "kadin",
    category: null,
    category_slug: null,
    subCategory: null,
    subCategory_slug: null,
    images: [
      {
        original: "/assets/products/original/product15.webp",
        thumbnail: "/assets/products/thumbnail/product15.webp",
      },
    ],
    rating: 2.4,
    total_comment: 864,
    price: 410,
    discount: 0,
    stock: 10,
    tags: [
      "Amor Bralet Jartiyer",
      "Kırmızı İç Çamaşır Takımı",
      "Kırmızı Bralet Jartiyer",
    ],
    product_group: null,
    choise_required: true,
    attributes: [
      {
        required: true,
        attr_title: "Beden",
        attr_options: [{ option_name: "5XL", option_stock: 50 }],
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
    status: true,
    featured_status: false,
    total_sold: 0,
    meta_title: "Tek Fotoğraflı Ürün",
    meta_description:
      "Tek Fotoğraflı Ürün çok uygun fiyatlarla sadece web sitemizde.",
    created_at: new Date("2024-06-15T13:24:59.000000Z"),
    updated_at: null,
  },
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const product = products.find((product) => product.slug === params.slug);

  if (!product) {
    return NextResponse.json({ error: "Ürün bulunamadı" }, { status: 404 });
  }

  return NextResponse.json(product);
}
