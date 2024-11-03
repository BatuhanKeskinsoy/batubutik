import BlogsMain from "@/components/(front)/Blog/Layout/BlogsMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getBlogs } from "@/lib/utils/Blog/getBlogs";
import { blogTypes } from "@/types/blogTypes";
import React from "react";

async function page() {
  const blogs: blogTypes[] = await getBlogs();
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Blog" />
      </div>
      <section>
        <BlogsMain blogs={blogs} />
      </section>
    </>
  );
}

export default page;
