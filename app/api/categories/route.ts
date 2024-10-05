import { NextResponse } from "next/server";

export async function GET() {
  const categories = [
    {
      name: "Erkek",
      slug: "erkek",
      product_count: 0,
      categories: [
        {
          name: "Üst Giyim",
          slug: "ust-giyim",
          product_count: 0,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 0 }],
        },
        {
          name: "Alt Giyim",
          slug: "alt-giyim",
          product_count: 0,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 0 }],
        },
      ],
    },
    {
      name: "Kadın",
      slug: "kadin",
      product_count: 6,
      categories: [
        {
          name: "Üst Giyim",
          slug: "ust-giyim",
          product_count: 0,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 0 }],
        },
        {
          name: "Alt Giyim",
          slug: "alt-giyim",
          product_count: 0,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 0 }],
        },
        {
          name: "İç Giyim",
          slug: "ic-giyim",
          product_count: 6,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 6 }],
        },
      ],
    },
    {
      name: "Çocuk",
      slug: "cocuk",
      product_count: 0,
      categories: [
        {
          name: "Üst Giyim",
          slug: "ust-giyim",
          product_count: 0,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 0 }],
        },
        {
          name: "Alt Giyim",
          slug: "alt-giyim",
          product_count: 0,
          sub_categories: [{ name: "Takım", slug: "takim", product_count: 0 }],
        },
      ],
    },
    {
      name: "Aksesuar",
      slug: "aksesuar",
      product_count: 0,
    },
  ];

  return NextResponse.json(categories);
}
