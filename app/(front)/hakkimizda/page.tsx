import About from "@/components/(front)/About/About";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getAbout } from "@/lib/utils/General/getAbout";
import React from "react";

async function page() {
  const about = await getAbout();
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="Hakkımızda" />
      </div>
      <section>
        <About about={about} />
      </section>
    </>
  );
}

export default page;
