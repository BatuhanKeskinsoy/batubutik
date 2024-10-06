import Footer from "@/components/(front)/inc/Footer/Footer";
import Header from "@/components/(front)/inc/Header/Header";
import FixedBottomRight from "@/components/others/FixedBottomRight/FixedBottomRight";
import "@/public/styles/globals.css";
import React from "react";
import { generalsTypes } from "@/types/generalTypes";
import { getGenerals } from "@/lib/utils/General/getGenerals";
import { productTypes } from "@/types/product/productTypes";
import { getProducts } from "@/lib/utils/Product/getProducts";
import { mainCategoryTypes } from "@/types/categoryTypes";
import { getCategories } from "@/lib/utils/General/getCategories";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generals: generalsTypes = await getGenerals();
  const categories: mainCategoryTypes[] = await getCategories();
  const products: productTypes[] = await getProducts();
  return (
    <>
      <Header generals={generals} products={products} categories={categories} />
      {children}
      <FixedBottomRight generals={generals} />
      <Footer generals={generals} categories={categories} />
    </>
  );
}
