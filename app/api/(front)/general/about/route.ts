import { NextResponse } from "next/server";

export async function GET() {
  const about = {
    content:
      `<p>Batubutik olarak 2005 yılından bu yana kadın iç giyim sektöründe hizmet vermekteyiz. Kurulduğumuz günden itibaren müşteri memnuniyetini en ön planda tutmakla birlikte her sezon modayı yakından takip ederek, en yeni trendleri ve en rahat tasarımları müşterilerimizle buluşturuyoruz.</p>` +
      `</br>` +
      `<p>Müşterilerimize sadece ürün satışı değil, aynı zamanda tarz ve konfor da sunmayı amaçlıyoruz.</p>` +
      `</br>` +
      `<p>Müşteri odaklı hizmet anlayışımızla, her zaman kaliteli ve güvenilir alışveriş deneyimi sağlamaya özen gösteriyoruz. Online alışveriş sitemiz ile Türkiye'nin dört bir yanındaki müşterilerimize ulaşmaktayız. Güvenilir kargo hizmetlerimiz ve hızlı teslimat sürelerimizle alışverişi keyifli hale getiriyoruz.</p>` +
      `</br>` +
      `<p>Batubutik olarak, sektördeki yenilikleri ve gelişmeleri yakından takip ederek, her zaman en iyi hizmeti vermeyi amaçlıyoruz.</p>`,
    image: "/assets/about/about.png",
  };

  return NextResponse.json(about);
}
