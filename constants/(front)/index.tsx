import { IoBagAddOutline, IoBagHandleOutline, IoCarOutline, IoCartOutline, IoColorPaletteOutline, IoGiftOutline, IoGridOutline, IoHomeOutline, IoSettingsOutline } from "react-icons/io5";

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
    name: "GENEL",
    links: [
      {
        icon: <IoHomeOutline />,
                title: "Yönetim Paneli",
        url: "/panel",
      },
    ],
  },
  {
    name: "ÜRÜNLER",
    links: [
      {
        icon: <IoBagHandleOutline />,
        title: "Ürünler",
        url: "/panel/urunler",
      },
      {
        icon: <IoGiftOutline />,
        title: "İndirim Kodları",
        url: "/panel/indirim-kodlari",
      },
    ],
  },
  {
    name: "SİPARİŞLER",
    links: [
      {
        icon: <IoCartOutline />,
        title: "Siparişler",
        url: "/panel/siparisler",
      },
    ],
  },
  {
    name: "KATEGORİLER",
    links: [
      {
        icon: <IoGridOutline />,
        title: "Kategoriler",
        url: "/panel/kategoriler",
      },
    ],
  },
  {
    name: "AYARLAR",
    links: [
      {
        icon: <IoCarOutline />,
        title: "Kargo Ayarları",
        url: "/panel/kargo-ayarlari",
      },
      {
        icon: <IoColorPaletteOutline />,
        title: "Tema Ayarları",
        url: "/panel/tema-ayarlari",
      },
      {
        icon: <IoSettingsOutline />,
        title: "Genel Ayarlar",
        url: "/panel/site-ayarlari",
      },
    ],
  },
];
