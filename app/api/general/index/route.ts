import { NextResponse } from "next/server";

export async function GET() {
  const generals = {
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
    addressIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96437.2454397095!2d29.27856355349156!3d40.945032337235546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad70fd26705e3%3A0xcbd4c281a7b18cea!2sPendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1728198134098!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
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

  return NextResponse.json(generals);
}
