import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "Zarafet ve Konforun Kusursuz Dengesi",
    short_text:
      "Kadın iç giyiminde doğru seçimle rahatlık ve zarafeti bir araya getirin. Sütyen, külot ve korse modelleri arasından vücudunuza uygun iç çamaşırları seçmenin püf noktalarını öğrenin.",
    slug: "zarafet-ve-konforun-kusursuz-dengesi",
    image: {
      original: "/assets/banner/banner.webp",
      thumbnail: "/assets/banner/banner.webp",
    },
    views_count: 376,
    created_at: "2024-10-12T09:10:00.000000Z",
    updated_at: null,
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}
