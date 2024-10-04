import { NextResponse } from "next/server";

export async function GET() {
  const general = {
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

  return NextResponse.json(general);
}
