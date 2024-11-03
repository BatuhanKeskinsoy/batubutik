import { blogTypes } from "@/types/blogTypes";
import React from "react";
import BlogSidebarItem from "@/components/(front)/Blog/BlogSidebarItem";
import Link from "next/link";
import { ProductShares } from "@/components/others/Shares";

interface IBlogSidebarProps {
  otherBlogs: blogTypes[];
  title: string;
  description: string;
  tags: string;
}
function BlogSidebar({
  otherBlogs,
  title,
  description,
  tags,
}: IBlogSidebarProps) {
  return (
    <div className="lg:w-[420px] flex flex-col gap-8 w-full h-fit rounded-sm transition-all duration-300 max-lg:px-4">
      <div className="flex flex-col w-full gap-4">
        <span className="font-gemunu text-xl font-medium tracking-wider rounded-lg bg-gray-100 dark:bg-zinc-800 py-2 px-4 dark:shadow-lg select-none">
          Bu Bloğu Paylaşın
        </span>
        <div className="flex justify-center">
          <ProductShares title={title} description={description} tags={tags} />
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <span className="font-gemunu text-xl font-medium tracking-wider rounded-lg bg-gray-100 dark:bg-zinc-800 py-2 px-4 dark:shadow-lg select-none">
          Diğer Bloglar
        </span>
        <div className="flex flex-col w-full gap-3">
          {/* MAX 5 ADET BLOG LİSTELENEBİLİR */}
          {otherBlogs
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((blog, key) => (
              <BlogSidebarItem blog={blog} key={key} />
            ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full">
        <span className="font-gemunu text-xl font-medium tracking-wider rounded-lg bg-gray-100 dark:bg-zinc-800 py-2 px-4 dark:shadow-lg select-none">
          Etiketler
        </span>
        <ul className="tags flex flex-wrap gap-3">
          {tags.length > 0
            ? tags
                .split(",")
                .map((tag: string, key: number) => (
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
    </div>
  );
}

export default BlogSidebar;
