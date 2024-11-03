import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    title: "Zarafet ve Konforun Kusursuz Dengesi",
    short_text:
      "Kadın iç giyiminde doğru seçimle rahatlık ve zarafeti bir araya getirin. Sütyen, külot ve korse modelleri arasından vücudunuza uygun iç çamaşırları seçmenin püf noktalarını öğrenin.",
    slug: "zarafet-ve-konforun-kusursuz-dengesi",
    image: {
      original: "/assets/banner/original/banner.webp",
      thumbnail: "/assets/banner/thumbnail/banner.webp",
    },
    views_count: 114,
    created_at: "2024-10-12T09:10:00.000000Z",
    updated_at: null,
  },
  {
    id: 2,
    title: "Kusursuz İç Giyim Seçimiyle Kendinizi Keşfedin",
    short_text:
      "Doğru iç giyim seçimi sadece şıklığınızı değil, aynı zamanda kendinize olan güveninizi de artırır. Kusursuz iç giyim alışverişi için ipuçları.",
    slug: "kusursuz-ic-giyim-secimiyle-kendinizi-kesfedin",
    image: {
      original: "/assets/banner/original/banner2.webp",
      thumbnail: "/assets/banner/thumbnail/banner2.webp",
    },
    views_count: 264,
    created_at: "2024-10-13T16:15:00.000000Z",
    updated_at: null,
  },
  {
    id: 3,
    title: "Kadın İç Giyimde Vücut Tipine Göre Doğru Seçimler Nasıl Yapılır?",
    short_text:
      "Kadın iç giyimde vücut tipine uygun seçimler, konfor ve şıklık açısından önemlidir. Vücut tipinize uygun sütyen, külot ve korseleri keşfetmek için blog yazımızı okuyun.",
    slug: "kadin-ic-giyimde-vucut-tipine-gore-dogru-secimler",
    image: {
      original: "/assets/banner/original/banner3.webp",
      thumbnail: "/assets/banner/thumbnail/banner3.webp",
    },
    views_count: 321,
    created_at: "2024-10-14T16:15:00.000000Z",
    updated_at: null,
  },
  {
    id: 4,
    title: "Kadın İç Giyimde Doğru Renk Seçimi Nasıl Yapılır?",
    short_text:
      "Kadın iç giyimde doğru renk seçimi, hem ruh halinizi hem de görünümünüzü etkiler. Renklerin psikolojik etkilerini keşfedin ve iç giyimde doğru renkleri nasıl seçeceğinizi öğrenin.",
    slug: "kadin-ic-giyimde-dogru-renk-secimi-nasil-yapilir",
    image: {
      original: "/assets/banner/original/banner2.webp",
      thumbnail: "/assets/banner/thumbnail/banner2.webp",
    },
    views_count: 411,
    created_at: "2024-10-15T16:15:00.000000Z",
    updated_at: null,
  },
  {
    id: 5,
    title: "Kadın İç Giyimde Doğru Bedeni Bulmanın Önemi",
    short_text:
      "Kadın iç giyimde doğru bedeni bulmak, hem konfor hem de şıklık açısından kritik bir öneme sahiptir. İç giyimde beden ölçülerini nasıl alacağınızı öğrenin.",
    slug: "kadin-ic-giyimde-dogru-bedeni-bulmanin-onemi",
    image: {
      original: "/assets/banner/original/banner.webp",
      thumbnail: "/assets/banner/thumbnail/banner.webp",
    },
    views_count: 495,
    created_at: "2024-10-16T16:15:00.000000Z",
    updated_at: null,
  },
  {
    id: 6,
    title: "Kadın İç Giyimde Korse ve Body Seçimi Nasıl Yapılır?",
    short_text:
      "Kadın iç giyimde korse ve body seçimi, hem görünümünüzü hem de kendinizi nasıl hissettiğinizi etkiler. Korse ve body seçiminde hangi faktörlerin göz önünde bulundurulması gerektiğini öğrenin.",
    slug: "kadin-ic-giyimde-korse-ve-body-secimi-nasil-yapilir",
    image: {
      original: "/assets/banner/original/banner3.webp",
      thumbnail: "/assets/banner/thumbnail/banner3.webp",
    },
    views_count: 626,
    created_at: "2024-10-17T16:15:00.000000Z",
    updated_at: null,
  },
];

export async function GET() {
  return NextResponse.json(blogs);
}
