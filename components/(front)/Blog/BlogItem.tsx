import { blogTypes } from "@/types/blogTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlogItemProps {
  blog: blogTypes;
}

function BlogItem({ blog }: IBlogItemProps) {
  const months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const date = new Date(blog.created_at);
  const day = ("0" + date.getDate()).slice(-2);
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();

  return (
    <div className="relative w-full">
      <Link
        href={`/blog/${blog.slug}`}
        title={blog.title}
        className="w-full left-0 bg-gradient-to-t h-full flex flex-col justify-between transition-all group dark:bg-zinc-800 bg-gray-100 shadow-lg rounded-xl dark:text-gray-200 text-black-900"
      >
        <div className="h-56 min-h-[224px] flex items-center relative justify-center rounded-t-xl overflow-hidden">
          <Image
            src={blog.image.thumbnail}
            fill
            sizes="(max-width: 768px) 100vw, 35vw"
            loading="lazy"
            alt={`${blog.title} Hakkında Blog İçeriği`}
            quality={90}
            title={blog.title}
            className="object-cover object-center rounded-t-xl group-hover:scale-105 transition-all duration-300"
          />

          <time
            dateTime={date.toISOString()}
            className="absolute dark:bg-zinc-800/70 bg-white/70 py-0.5 px-1.5 text-xs font-bold dark:text-white text-black-900 top-2.5 right-2.5 flex flex-col items-center rounded-xl"
          >
            <span className="text-3xl">{day}</span>
            <span className="font-semibold">{month}</span>
            <span className="text-lg font-semibold">{year}</span>
          </time>
        </div>

        <div className="p-4 h-full flex flex-col justify-between">
          <h2 className="font-gemunu text-xl tracking-wider mb-2 transition-all group-hover:text-site line-clamp-2">
            {blog.title}
          </h2>
          <p className="text-sm opacity-70 transition-all line-clamp-3 font-normal">
            {blog.short_text}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default BlogItem;
