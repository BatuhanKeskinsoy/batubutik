import { fullBlogTypes } from "@/types/blogTypes";
import React from "react";
import BlogSidebar from "@/components/(front)/Blog/Layout/BlogSidebar";
import BlogContent from "@/components/(front)/Blog/Layout/BlogContent";

interface IBlogMainProps {
  blog: fullBlogTypes;
}

function BlogMain({ blog }: IBlogMainProps) {
  return (
    <div className="container max-lg:px-0 mx-auto flex max-lg:flex-col gap-4">
      <BlogContent blog={blog} />
      <BlogSidebar otherBlogs={blog.other_blogs} title={blog.title} description={blog.short_text} tags={blog.keywords} />
    </div>
  );
}

export default BlogMain;
