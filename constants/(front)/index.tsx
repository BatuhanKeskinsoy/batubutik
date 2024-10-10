export const baseURL = process.env.NEXT_PUBLIC_API_BASEURL;
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
    title: "Yönetici Paneli",
    url: "/panel",
  },
  {
    title: "Ürünler",
    url: "/panel",
  },
  {
    title: "Kategoriler",
    url: "/panel",
  },
  {
    title: "Site Ayarları",
    url: "/panel",
  },
];