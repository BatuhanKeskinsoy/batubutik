import { NextResponse } from "next/server";

export async function GET() {
  const home = {
    fullViewSlider: [
      {
        text_1: "2024 Batubutik Koleksiyonu",
        text_2: "Zarafetin Özgürlüğü",
        text_3: "Kadın ürünlerini inceleyin!",
        button_text: "Koleksiyonu Keşfet",
        button_redirect: "/magaza/kadin",
        image: {
          original: "/assets/banner/banner.webp",
          thumbnail: "/assets/banner/banner.webp",
        },
      },
      {
        text_1: "2024 Batubutik Koleksiyonu",
        text_2: "İç Giyim Ürünlerimiz",
        text_3: "Kadın iç giyim ürünlerini inceleyin!",
        button_text: "İç Giyim Ürünleri",
        button_redirect: "/magaza/kadin/ic-giyim",
        image: {
          original: "/assets/banner/banner2.webp",
          thumbnail: "/assets/banner/banner2.webp",
        },
      },
      {
        text_1: "2024 Batubutik Koleksiyonu",
        text_2: "Kadın İç Takım Ürünlerimiz",
        text_3: "Kadın iç giyim takım ürünlerini inceleyin!",
        button_text: "Takımları İncele",
        button_redirect: "/magaza/kadin/ic-giyim/takim",
        image: {
          original: "/assets/banner/banner3.webp",
          thumbnail: "/assets/banner/banner3.webp",
        },
      },
    ],
    categories: [
      {
        name: "Erkek",
        slug: "erkek",
      },
      {
        name: "Kadın",
        slug: "kadin",
      },
      {
        name: "Çocuk",
        slug: "cocuk",
      },
      {
        name: "Aksesuar",
        slug: "aksesuar",
      },
    ],
    featuredProducts: {
      title: "Batubutik Öne Çıkan Ürünler",
      description: "Batubutik koleksiyonu içerisinde öne çıkan ürünler",
      products: [
        {
          title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 460,
          discount: 10,
          stock: 50,
          choise_required: false,
        },
        {
          title: "Black Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 320,
          discount: 30,
          stock: 50,
          choise_required: false,
        },
        {
          title: "Burgundy Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 370,
          discount: 0,
          stock: 50,
          choise_required: true,
        },
        {
          title: "Blue Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 410,
          discount: 15,
          stock: 50,
          choise_required: true,
        },
        {
          title: "Burgundy Bralet Dress 2",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
          slug: "burgundy-bralet-dress-2",
          code: "BBD-104",
          brand: "Batubutik",
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
          price: 410,
          discount: 0,
          stock: 0,
          choise_required: true,
        },
        {
          title: "Tek Fotoğraflı Ürün",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
          slug: "tek-fotograf-urun",
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
          price: 410,
          discount: 0,
          stock: 10,
          choise_required: true,
        },
      ],
    },
    newProducts: {
      title: "Batubutik En Yeni Ürünler",
      description: "Batubutik koleksiyonuna eklenen en yeni ürünler",
      products: [
        {
          title: "Burgundy Bralet Dress 2",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
          slug: "burgundy-bralet-dress-2",
          code: "BBD-104",
          brand: "Batubutik",
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
          price: 410,
          discount: 0,
          stock: 0,
          choise_required: true,
        },
        {
          title: "Black Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 320,
          discount: 30,
          stock: 50,
          choise_required: false,
        },
        {
          title: "Blue Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 410,
          discount: 15,
          stock: 50,
          choise_required: true,
        },
        {
          title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 460,
          discount: 10,
          stock: 50,
          choise_required: false,
        },
        {
          title: "Burgundy Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 370,
          discount: 0,
          stock: 50,
          choise_required: true,
        },
        {
          title: "Tek Fotoğraflı Ürün",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
          slug: "tek-fotograf-urun",
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
          price: 410,
          discount: 0,
          stock: 10,
          choise_required: true,
        },
      ],
    },
    bestSellingProducts: {
      title: "Batubutik En Çok Satılan Ürünler",
      description:
        "Batubutik koleksiyonu içerisinde en çok talep edilen ve en çok satılan ürünler",
      products: [
        {
          title: "Tek Fotoğraflı Ürün",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
          slug: "tek-fotograf-urun",
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
          price: 410,
          discount: 0,
          stock: 10,
          choise_required: true,
        },
        {
          title: "Burgundy Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 370,
          discount: 0,
          stock: 50,
          choise_required: true,
        },
        {
          title: "Blue Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 410,
          discount: 15,
          stock: 50,
          choise_required: true,
        },
        {
          title: "Burgundy Bralet Dress 2",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
          slug: "burgundy-bralet-dress-2",
          code: "BBD-104",
          brand: "Batubutik",
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
          price: 410,
          discount: 0,
          stock: 0,
          choise_required: true,
        },
        {
          title: "Black Bralet Dress",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 320,
          discount: 30,
          stock: 50,
          choise_required: false,
        },
        {
          title: "Amor Bralet Jartiyer İç Çamaşır Takımı",
          short_content:
            "Ürünümüz standart bedenler için uygundur. Rahat kalıptır.",
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
          price: 460,
          discount: 10,
          stock: 50,
          choise_required: false,
        },
      ],
    },
    about: {
      content:
        `<p>Batubutik olarak 2005 yılından bu yana kadın iç giyim sektöründe hizmet vermekteyiz. Kurulduğumuz günden itibaren müşteri memnuniyetini en ön planda tutmakla birlikte her sezon modayı yakından takip ederek, en yeni trendleri ve en rahat tasarımları müşterilerimizle buluşturuyoruz.</p>` +
        `</br>` +
        `<p>Müşterilerimize sadece ürün satışı değil, aynı zamanda tarz ve konfor da sunmayı amaçlıyoruz.</p>` +
        `</br>` +
        `<p>Müşteri odaklı hizmet anlayışımızla, her zaman kaliteli ve güvenilir alışveriş deneyimi sağlamaya özen gösteriyoruz. Online alışveriş sitemiz ile Türkiye'nin dört bir yanındaki müşterilerimize ulaşmaktayız. Güvenilir kargo hizmetlerimiz ve hızlı teslimat sürelerimizle alışverişi keyifli hale getiriyoruz.</p>` +
        `</br>` +
        `<p>Batubutik olarak, sektördeki yenilikleri ve gelişmeleri yakından takip ederek, her zaman en iyi hizmeti vermeyi amaçlıyoruz.</p>`,
      image: "/assets/about/about.png",
    },
    generals: {
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
      return_conditions: "İptal ve İade Koşulları Henüz Belirtilmemiş!",
    },
  };

  return NextResponse.json(home);
}

/*  
    images, code, choise_required, 
    slug, mainCategory_slug, category_slug, subCategory_slug, 
    brand, title, stock, discount, 
    mainCategory, category, subCategory, 
    short_content, rating, price 
*/
