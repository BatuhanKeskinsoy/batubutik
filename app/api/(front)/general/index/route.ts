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
    addressIframe: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.7209311323522!2d29.11197107642255!3d40.94378302339314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac707afbe6d99%3A0x111473247725faee!2se%20ticaret!5e0!3m2!1str!2str!4v1728206088631!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
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
    return_conditions: `
      <h2>İptal ve İade Koşulları</h2>
      <p>Almış olduğunuz ürünleri, teslim aldığınız tarihten itibaren 14 gün içinde iade edebilirsiniz. İade işlemleri için aşağıdaki şartların sağlanması gerekmektedir:</p>
      <h3>İade Şartları:</h3>
      <ul>
        <li>Ürün, orijinal ambalajında ve kullanılmamış olmalıdır.</li>
        <li>Ürünün etiketleri ve ambalajı, kullanılmamış ve zarar görmemiş olmalıdır.</li>
        <li>İade talebi, teslimat tarihinden itibaren 14 gün içinde yapılmalıdır.</li>
        <li>İade formunun doldurulması gerekmektedir.</li>
      </ul>
      <h3>İade Süreci:</h3>
      <p>İade talebinizi, <strong>info@batubutik.com</strong> e-posta adresine yazarak bildirebilirsiniz. İade talebiniz onaylandığında, ürünleri belirtilen adrese gönderebilirsiniz.</p>
      <h3>İade Ücretleri:</h3>
      <p>İade kargo ücretleri, müşteriye aittir. Ürünün iade sürecinde zarar görmesi durumunda, ürün bedeli iade edilmeyecektir.</p>
      <h3>İptal Koşulları:</h3>
      <p>Almış olduğunuz ürünlerin siparişini, ürün henüz kargoya verilmeden iptal edebilirsiniz. Sipariş iptali için müşteri hizmetlerimizle iletişime geçmeniz gerekmektedir.</p>
      <p>Herhangi bir sorunla karşılaştığınızda, <strong>08505058515</strong> numarasından müşteri hizmetlerimizle iletişime geçebilirsiniz.</p>
    `,
  };

  return NextResponse.json(generals);
}
