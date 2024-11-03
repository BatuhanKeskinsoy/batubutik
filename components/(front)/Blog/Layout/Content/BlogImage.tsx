"use client";
import { useGlobalContext } from "@/app/Context/store";
import Image from "next/image";
import React from "react";

interface IBlogImageProps {
  title: string;
  thumbnail: string;
  original: string;
}

function BlogImage({ title, thumbnail, original }: IBlogImageProps) {
  const { isMobile } = useGlobalContext();
  return (
    <Image
      src={isMobile ? thumbnail : original}
      title={title}
      alt={title}
      fill
      priority
      className="object-cover"
    />
  );
}

export default BlogImage;
