import { blogTypes } from "@/types/blogTypes";
import React from "react";
import BlogItem from "@/components/(front)/Blog/BlogItem";

interface IBlogsMainProps {
  blogs: blogTypes[];
}

function BlogsMain({ blogs }: IBlogsMainProps) {
  return (
    <div className="container mx-auto px-4 flex lg:flex-row flex-col gap-8">
      <div className="flex flex-col lg:gap-6 gap-4 w-full text-lg tracking-wide">
        <span className="font-gemunu lg:text-4xl text-3xl tracking-wider font-medium">
          Blog
        </span>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full text-gray-600 gap-6">
          {blogs
            .sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .map((blog, key) => (
              <BlogItem key={key} blog={blog} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BlogsMain;
