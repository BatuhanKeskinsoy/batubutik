"use client";
import CustomButton from "@/components/others/CustomButton";
import React from "react";
import Auth from "@/components/(front)/inc/Header/Auth/Auth";
import Favorite from "@/components/(front)/inc/Header/Favorite/Favorite";
import Search from "@/components/(front)/inc/Header/Search/Search";
import { IoHomeOutline, IoStorefrontOutline } from "react-icons/io5";
import { usePathname, useRouter } from "next/navigation";
import Subscribe from "@/components/(front)/inc/Subscribe";
import Link from "next/link";
import { generals, categories } from "@/constants/(front)";
import { getSocialIcon } from "@/lib/functions/getSocialIcon";
import Image from "next/image";

function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div className="mt-12">
        <Subscribe />
      </div>
      <footer className="relative w-full z-10 max-lg:pb-16">
        <aside className="flex lg:hidden fixed bottom-0 h-16 bg-gray-100 dark:bg-zinc-800 w-full shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex items-center justify-around gap-2 py-2.5 px-4 w-full h-full *:flex *:justify-center *:items-center">
            <div className="relative flex items-center rounded-full lg:hover:scale-110 transition-all duration-300 h-full cursor-pointer">
              <CustomButton
                leftIcon={
                  <IoStorefrontOutline className="text-xl max-lg:text-2xl" />
                }
                containerStyles={`p-2 border transition-all duration-300 rounded-full ${
                  pathname && pathname.startsWith("/magaza")
                    ? "text-white border-transparent bg-site"
                    : "border-gray-200 dark:border-zinc-700"
                }`}
                handleClick={() => router.push("/magaza")}
              />
            </div>
            <Search />
            <CustomButton
              containerStyles="w-full max-w-[80px] h-[calc(100%+36px)] rounded-t-full bg-site text-white -mt-4 shadow-[0_-5px_30px_0_rgba(0,0,0,0.3)]"
              leftIcon={<IoHomeOutline className="text-4xl -mb-2" />}
              handleClick={() => router.push("/")}
            />
            <Favorite />
            <Auth />
          </div>
        </aside>
        <div className="flex flex-col pt-8 bg-gray-200 dark:bg-zinc-900">
          <div className="container mx-auto p-4 dark:text-gray-400">
            <div className="flex lg:flex-row flex-col gap-8 w-full">
              <div className="flex flex-col gap-4 lg:w-1/4 w-full">
                <Link
                  href={"/"}
                  className="relative capitalize font-medium font-gemunu text-5xl text-site"
                  title={generals.site_name}
                >
                  {generals.logo ? (
                    <Image
                      src={generals.logo}
                      alt={generals.site_name}
                      title={generals.site_name}
                      width={0}
                      height={0}
                      className="h-10 w-auto"
                    />
                  ) : (
                    <span>{generals.site_name}</span>
                  )}
                </Link>
                <p>
                  2005 yılından bu yana kadın iç giyim sektöründe hizmet
                  vermekteyiz. Her sezon modayı yakından takip eden ekibimizle,
                  en yeni trendleri ve en rahat tasarımları müşterilerimizle
                  buluşturuyoruz.
                </p>
                <div className="flex justify-start gap-4 flex-wrap items-center *:transition-all *:duration-300">
                  {generals.socials.map((social, key) => (
                    <Link
                      key={key}
                      href={social.url}
                      className="text-gray-600 dark:text-gray-400 hover:text-site dark:hover:text-site *:text-3xl"
                      target="_blank"
                    >
                      {getSocialIcon(social.platform)}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex lg:flex-row flex-col gap-4 lg:w-3/4 w-full">
                <div className="flex-1">
                  <span className="font-gemunu text-2xl tracking-wide dark:text-gray-200">
                    Hızlı Linkler
                  </span>
                  <hr className="my-2 border-gray-300 dark:border-zinc-800" />
                  <ul>
                    <li>
                      <Link
                        title="Mağaza"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/magaza"
                      >
                        Mağaza
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Blog"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/blog"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Hakkımızda"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/hakkimizda"
                      >
                        Hakkımızda
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="İletişim"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/iletisim"
                      >
                        İletişim
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="font-gemunu text-2xl tracking-wide dark:text-gray-200">
                    Kategoriler
                  </span>
                  <hr className="my-2 border-gray-300 dark:border-zinc-800" />
                  <ul>
                    {categories.slice(0, 4).map((category, key) => (
                      <li key={key}>
                        <Link
                          title={category.name}
                          className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                          href={`/magaza/${category.slug}`}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="font-gemunu text-2xl tracking-wide dark:text-gray-200">
                    Sözleşme ve Politikalar
                  </span>
                  <hr className="my-2 border-gray-300 dark:border-zinc-800" />
                  <ul>
                    <li>
                      <Link
                        title="Gizlilik Politikası"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/"
                      >
                        Gizlilik Politikası
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Şartlar ve Koşullar"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/"
                      >
                        Şartlar ve Koşullar
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="İptal ve İade Politikası"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/"
                      >
                        İptal ve İade Politikası
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="Mesafeli Satış Sözleşmesi"
                        className="w-fit flex items-center gap-x-1 py-1 font-gemunu tracking-wide text-lg hover:text-site hover:pl-1 transition-all line-clamp-1"
                        href="/"
                      >
                        Mesafeli Satış Sözleşmesi
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <span className="font-gemunu text-2xl tracking-wide dark:text-gray-200">
                    Popüler Etiketler
                  </span>
                  <hr className="my-2 border-gray-300 dark:border-zinc-800" />
                  <ul className="flex flex-wrap gap-2">
                    {generals.tags.slice(0, 10).map((tag, key) => (
                      <li key={key}>
                        <Link
                          title={tag}
                          className="w-fit flex items-center gap-x-1 font-gemunu tracking-wide text-lg hover:text-site transition-all line-clamp-1"
                          href="/"
                        >
                          {tag}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-gray-300 dark:border-zinc-800 w-full" />
          <div className="container mx-auto px-4 ">
            <div className="w-full flex justify-between py-4 text-gray-600 dark:text-gray-400 text-sm md:flex-row flex-col text-center">
              <div className="md:my-0 my-1">
                Copyright ©{" "}
                <span className="text-site select-none font-semibold">
                  {" "}
                  {new Date().getFullYear() === 2024
                    ? new Date().getFullYear()
                    : "2024 - " + new Date().getFullYear()}{" "}
                </span>
              </div>
              <div className="md:my-0 my-1">
                Kodlama ve Tasarım{" "}
                <Link
                  href={"https://www.linkedin.com/in/batuhankeskinsoy/"}
                  target="_blank"
                  className="text-site hover:text-site/70 transition-all duration-300 font-medium"
                >
                  Batuhan Keskinsoy
                </Link>
                'a aittir. Tüm haklar saklıdır.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
