import Footer from "@/components/(front)/inc/Footer/Footer";
import Header from "@/components/(front)/inc/Header/Header";
import FixedBottomRight from "@/components/others/FixedBottomRight/FixedBottomRight";
import React from "react";
import { generalsTypes } from "@/types/generalTypes";
import { getGenerals } from "@/lib/utils/General/getGenerals";
import { mainCategoryTypes } from "@/types/categoryTypes";
import { getCategories } from "@/lib/utils/General/getCategories";
import Subscribe from "@/components/(front)/inc/Subscribe";

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const generals: generalsTypes = await getGenerals();
  const categories: mainCategoryTypes[] = await getCategories();
  return (
    <>
      <Header generals={generals} categories={categories} />
      <main>{children}</main>
      <aside className="mt-12">
        <Subscribe />
      </aside>
      <FixedBottomRight generals={generals} />
      <Footer generals={generals} categories={categories} />
    </>
  );
}
