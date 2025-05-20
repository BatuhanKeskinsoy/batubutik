import React from "react";
import { ProductShares } from "@/components/others/Shares";
import Link from "next/link";
import { useGenerals } from "@/hooks/useGenerals";
import { IoLogoWhatsapp } from "react-icons/io5";

interface IBlogSidebarProps {
  title: string;
  description: string;
  tags: string[] | null;
}

function ProductDetailSidebar({ title, description, tags }: IBlogSidebarProps) {
  const { generals } = useGenerals();
  return (
    <div className="lg:w-[420px] flex flex-col w-full h-fit gap-4 rounded-sm transition-all duration-300 lg:sticky lg:top-24 px-4">
      {generals?.whatsapp_number && (
        <>
          <Link
            href={`https://api.whatsapp.com/send?phone=9${generals.whatsapp_number}&amp;text=Merhaba, size web sitenizden ulaşıyorum.`}
            title="WhatsApp"
            target="_blank"
            className="bg-green-500 hover:bg-green-500/80 text-white flex items-center gap-4 justify-center py-3 px-4 w-full rounded-lg transition-all duration-300"
          >
            <IoLogoWhatsapp className="text-3xl" />
            <span className="text-lg">WhatsApp'tan Ulaşın</span>
          </Link>
          <hr className="dark:border-zinc-800" />
        </>
      )}
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col gap-6 w-full">
          <span className="text-lg tracking-wider rounded-lg bg-gray-100 dark:bg-zinc-800 py-2 px-4 dark:shadow-lg select-none">
            Paylaş
          </span>
          <ProductShares title={title} description={description} tags={tags} />
        </div>
        {tags && (
          <div className="flex flex-col gap-6 w-full">
            <span className="text-lg tracking-wider rounded-lg bg-gray-100 dark:bg-zinc-800 py-2 px-4 dark:shadow-lg select-none">
              Etiketler
            </span>
            <ul className="tags flex flex-wrap gap-3">
              {tags.length > 0
                ? tags.map((tag: string, key: number) => (
                    <li className="flex gap-x-2 items-center" key={key}>
                      <span className="text-site text-xl">#</span>
                      <Link
                        href={""}
                        title={tag.trim()}
                        className="text-base text-zinc-600 dark:text-gray-400 hover:text-site dark:hover:text-site transition-all duration-300 capitalize"
                      >
                        {tag.trim()}
                      </Link>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductDetailSidebar;
