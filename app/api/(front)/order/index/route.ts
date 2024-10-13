import { NextResponse } from "next/server";

export async function GET() {
  const orders = [
    {
      id: 1,
      order_no: "4123056789",
      products: [
        {
          product: {
              id: 1,
              title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
              short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
              slug: "amor-bralet-jartiyer-ic-camasir-takimi",
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
                  original: "/assets/products/product5.webp",
                  thumbnail: "/assets/products/product5.webp",
                },
                {
                  original: "/assets/products/product2.webp",
                  thumbnail: "/assets/products/product2.webp",
                },
                {
                  original: "/assets/products/product3.webp",
                  thumbnail: "/assets/products/product3.webp",
                },
                {
                  original: "/assets/products/product4.webp",
                  thumbnail: "/assets/products/product4.webp",
                },
                {
                  original: "/assets/products/product.webp",
                  thumbnail: "/assets/products/product.webp",
                },
              ],
              rating: 4.9,
              price: 460,
              discount: 10,
              stock: 50,
              choise_required: false,
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
              status: true,
              featured_status: false,
              total_sold: 0,
              created_at: new Date("2024-06-14T13:24:59.000000Z"),
              updated_at: null,
          },
          quantity: 2,
          attributes: [
            {
              attr_title: "Beden",
              attr_options: {
                option_name: "XS",
              },
            },
            {
              attr_title: "Boy",
              attr_options: {
                option_name: "150",
              },
            },
          ],
        },
        {
          product: {
            id: 2,
            title: "Black Bralet Dress",
            short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
            slug: "black-bralet-dress",
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
                original: "/assets/products/product6.webp",
                thumbnail: "/assets/products/product6.webp",
              },
              {
                original: "/assets/products/product7.webp",
                thumbnail: "/assets/products/product7.webp",
              },
              {
                original: "/assets/products/product8.webp",
                thumbnail: "/assets/products/product8.webp",
              },
              {
                original: "/assets/products/product9.webp",
                thumbnail: "/assets/products/product9.webp",
              },
            ],
            rating: 4.4,
            price: 320,
            discount: 30,
            stock: 50,
            choise_required: false,
            attributes: [
              {
                attr_title: "Beden",
                attr_options: [
                  { option_name: "XS", option_stock: 50 },
                  { option_name: "S", option_stock: 50 },
                  { option_name: "M", option_stock: 50 },
                ],
              },
              {
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
            created_at: new Date("2024-06-14T13:24:59.000000Z"),
            updated_at: null,
          },
          quantity: 1,
          attributes: null,
        },
        {
          product: {
            id: 2,
            title: "Black Bralet Dress",
            short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
            slug: "black-bralet-dress",
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
                original: "/assets/products/product6.webp",
                thumbnail: "/assets/products/product6.webp",
              },
              {
                original: "/assets/products/product7.webp",
                thumbnail: "/assets/products/product7.webp",
              },
              {
                original: "/assets/products/product8.webp",
                thumbnail: "/assets/products/product8.webp",
              },
              {
                original: "/assets/products/product9.webp",
                thumbnail: "/assets/products/product9.webp",
              },
            ],
            rating: 4.4,
            price: 320,
            discount: 30,
            stock: 50,
            choise_required: false,
            attributes: [
              {
                attr_title: "Beden",
                attr_options: [
                  { option_name: "XS", option_stock: 50 },
                  { option_name: "S", option_stock: 50 },
                  { option_name: "M", option_stock: 50 },
                ],
              },
              {
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
            created_at: new Date("2024-06-14T13:24:59.000000Z"),
            updated_at: null,
          },
          quantity: 1,
          attributes: null,
        },
        {
          product: {
            id: 2,
            title: "Black Bralet Dress",
            short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
            slug: "black-bralet-dress",
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
                original: "/assets/products/product6.webp",
                thumbnail: "/assets/products/product6.webp",
              },
              {
                original: "/assets/products/product7.webp",
                thumbnail: "/assets/products/product7.webp",
              },
              {
                original: "/assets/products/product8.webp",
                thumbnail: "/assets/products/product8.webp",
              },
              {
                original: "/assets/products/product9.webp",
                thumbnail: "/assets/products/product9.webp",
              },
            ],
            rating: 4.4,
            price: 320,
            discount: 30,
            stock: 50,
            choise_required: false,
            attributes: [
              {
                attr_title: "Beden",
                attr_options: [
                  { option_name: "XS", option_stock: 50 },
                  { option_name: "S", option_stock: 50 },
                  { option_name: "M", option_stock: 50 },
                ],
              },
              {
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
            created_at: new Date("2024-06-14T13:24:59.000000Z"),
            updated_at: null,
          },
          quantity: 1,
          attributes: null,
        },
        {
          product: {
            id: 2,
            title: "Black Bralet Dress",
            short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
            slug: "black-bralet-dress",
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
                original: "/assets/products/product6.webp",
                thumbnail: "/assets/products/product6.webp",
              },
              {
                original: "/assets/products/product7.webp",
                thumbnail: "/assets/products/product7.webp",
              },
              {
                original: "/assets/products/product8.webp",
                thumbnail: "/assets/products/product8.webp",
              },
              {
                original: "/assets/products/product9.webp",
                thumbnail: "/assets/products/product9.webp",
              },
            ],
            rating: 4.4,
            price: 320,
            discount: 30,
            stock: 50,
            choise_required: false,
            attributes: [
              {
                attr_title: "Beden",
                attr_options: [
                  { option_name: "XS", option_stock: 50 },
                  { option_name: "S", option_stock: 50 },
                  { option_name: "M", option_stock: 50 },
                ],
              },
              {
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
            created_at: new Date("2024-06-14T13:24:59.000000Z"),
            updated_at: null,
          },
          quantity: 1,
          attributes: null,
        },
      ],
      discount: 10,
      price: 4000,
      created_at: "2024-10-12T09:10:00.000000Z",
    },
    {
      id: 2,
      order_no: "1234567890",
      products: [
        {
          product: {
            id: 3,
            title: "Burgundy Bralet Dress",
            short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
            slug: "burgundy-bralet-dress",
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
                original: "/assets/products/product11.webp",
                thumbnail: "/assets/products/product11.webp",
              },
              {
                original: "/assets/products/product12.webp",
                thumbnail: "/assets/products/product12.webp",
              },
              {
                original: "/assets/products/product16.webp",
                thumbnail: "/assets/products/product16.webp",
              },
              {
                original: "/assets/products/product17.webp",
                thumbnail: "/assets/products/product17.webp",
              },
            ],
            rating: 4.1,
            price: 370,
            discount: 0,
            stock: 50,
            choise_required: true,
            attributes: [
              {
                attr_title: "Beden",
                attr_options: [
                  { option_name: "XS", option_stock: 50 },
                  { option_name: "S", option_stock: 50 },
                  { option_name: "M", option_stock: 50 },
                ],
              },
              {
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
            created_at: new Date("2024-06-14T13:24:59.000000Z"),
            updated_at: null,
          },
          quantity: 1,
          attributes: [
            {
              attr_title: "Boy",
              attr_options: {
                option_name: "165",
              },
            },
          ],
        },
      ],
      price: 3000,
      created_at: "2024-10-14T13:20:00.000000Z",
    },
    {
      id: 3,
      order_no: "2345678901",
      products: [
        {
          product: {
            id: 4,
            title: "Blue Bralet Dress",
            short_content: "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
            slug: "blue-bralet-dress",
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
                original: "/assets/products/product14.webp",
                thumbnail: "/assets/products/product14.webp",
              },
              {
                original: "/assets/products/product15.webp",
                thumbnail: "/assets/products/product15.webp",
              },
              {
                original: "/assets/products/product16.webp",
                thumbnail: "/assets/products/product16.webp",
              },
            ],
            rating: 3.8,
            price: 410,
            discount: 15,
            stock: 50,
            choise_required: true,
            attributes: [
              {
                attr_title: "Beden",
                attr_options: [
                  { option_name: "XS", option_stock: 50 },
                  { option_name: "S", option_stock: 50 },
                ],
              },
              {
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
            created_at: new Date("2024-06-14T13:24:59.000000Z"),
            updated_at: null,
          },
          quantity: 5,
          attributes: null,
        },
      ],
      price: 2000,
      created_at: "2024-10-13T16:40:00.000000Z",
    },
  ];

  return NextResponse.json(orders);
}
