import { fullBlogTypes } from "@/types/blogTypes";
import React from "react";
import BlogImage from "@/components/(front)/Blog/Layout/Content/BlogImage";
import { ProductShares } from "@/components/others/Shares";
import { IoEyeOutline } from "react-icons/io5";

interface IBlogContentProps {
  blog: fullBlogTypes;
}

function BlogContent({ blog }: IBlogContentProps) {
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
    <div className="flex flex-col w-full gap-8">
      <div className="relative w-full lg:h-[520px] h-[250px] lg:rounded-2xl overflow-hidden">
        <BlogImage
          title={blog.title}
          original={blog.image.original}
          thumbnail={blog.image.thumbnail}
        />
        <div className="flex flex-col gap-2 absolute top-2.5 right-2.5">
          <time
            dateTime={date.toISOString()}
            className="dark:bg-zinc-800/70 bg-white/70 py-0.5 px-1.5 text-xs font-bold dark:text-white text-black-900 flex flex-col items-center rounded-lg"
          >
            <span className="text-3xl">{day}</span>
            <span className="font-medium tracking-wide">{month}</span>
            <span className="text-lg font-semibold">{year}</span>
          </time>
          <div className="flex items-center gap-1 dark:bg-zinc-800/70 bg-white/70 py-1.5 px-2 text-xs dark:text-white text-black-900 rounded-lg">
            <IoEyeOutline className="text-xl" />
            <span className="text-sm">{blog.views_count}</span>
          </div>
        </div>
      </div>
      <div className="blogContent max-lg:px-4">
        <h1 className="text-3xl font-gemunu font-semibold tracking-wider">
          {blog.title}
        </h1>
        <div
          className="dangeriousContent lg:leading-8 leading-7"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
        <div className="flex flex-col w-full gap-4">
          <span className="font-gemunu text-2xl">Paylaş</span>
          <ProductShares
            title={blog.title}
            description={blog.short_text}
            tags={blog.keywords}
          />
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
