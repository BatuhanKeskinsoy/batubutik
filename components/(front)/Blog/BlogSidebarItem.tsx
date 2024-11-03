import { blogTypes } from "@/types/blogTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IBlogItemProps {
  blog: blogTypes;
}

function BlogSidebarItem({ blog }: IBlogItemProps) {
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
        className="w-full left-0 bg-gradient-to-t h-full flex justify-start dark:bg-zinc-800 bg-gray-100 dark:hover:bg-site/10 hover:bg-site/10 shadow-lg rounded-lg dark:text-gray-200 text-black-900 transition-all duration-300 group"
      >
        <div className="relative w-28 h-20 min-w-28 flex items-center justify-center rounded-lg overflow-hidden">
          <Image
            src={blog.image.thumbnail}
            fill
            sizes="(max-width: 768px) 112px, 112px"
            loading="lazy"
            alt={`${blog.title} Hakkında Blog İçeriği`}
            title={blog.title}
            className="object-cover group-hover:scale-110 transition-all duration-300"
          />
        </div>

        <div className="px-3 flex flex-col justify-center">
          <h2 className="font-gemunu text-base tracking-wider transition-all group-hover:text-site line-clamp-2">
            {blog.title}
          </h2>
          <time
            dateTime={date.toISOString()}
            className="flex items-center gap-1 opacity-50 text-sm"
          >
            <small>{day}</small>
            <small>{month}</small>
            <small>{year}</small>
          </time>
        </div>
      </Link>
    </div>
  );
}

export default BlogSidebarItem;
