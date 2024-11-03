import BlogMain from "@/components/(front)/Blog/Layout/BlogMain";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getBlogShow } from "@/lib/utils/Blog/getBlogShow";
import { fullBlogTypes } from "@/types/blogTypes";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog: fullBlogTypes = await getBlogShow(params.slug);

  return {
    title: blog.title,
    description: blog.short_text,
    keywords: blog.keywords,
  };
}

async function page({ params }: { params: { slug: string } }) {
  const blog: fullBlogTypes = await getBlogShow(params.slug);
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Blog" slug="/blog" title2={blog.title} />
      </div>
      <section>
        <BlogMain blog={blog} />
      </section>
    </>
  );
}

export default page;
