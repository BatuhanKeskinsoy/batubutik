export const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
export const siteURL = process.env.NEXT_PUBLIC_SITE_URL;

export const navLinks = [
  {
    title: "Blog",
    url: "/blog",
  },
  {
    title: "Hakkımızda",
    url: "/hakkimizda",
  },
  {
    title: "İletişim",
    url: "/iletisim",
  },
];

export const navLinksAuthUser = [
  {
    title: "Profilim",
    url: "/profilim",
  },
  {
    title: "Siparişlerim",
    url: "/profilim/siparislerim",
  },
  {
    title: "Favorilerim",
    url: "/profilim/favorilerim",
  },
  {
    title: "Kargo Takibi",
    url: "/profilim/kargo-takibi",
  },
];

export const navLinksAuthAdmin = [
  {
    name: "Genel",
    links: [
      {
        title: "Yönetim Paneli",
        url: "/panel",
      },
      {
        title: "Ürünler",
        url: "/panel/urunler",
      },
    ],
  },
  {
    name: "Kategoriler",
    links: [
      {
        title: "Kategoriler",
        url: "/panel/kategoriler",
      },
    ],
  },
  {
    name: "Ayarlar",
    links: [
      {
        title: "Site Ayarları",
        url: "/panel/site-ayarlari",
      },
    ],
  },
];
