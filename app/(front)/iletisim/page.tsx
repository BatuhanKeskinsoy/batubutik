import Contact from "@/components/(front)/Contact/Contact";
import Breadcrumb from "@/components/others/Breadcrumb";
import { getGenerals } from "@/lib/utils/General/getGenerals";
import { generalsTypes } from "@/types/generalTypes";
import React from "react";

async function page() {
  const generals: generalsTypes = await getGenerals();
  return (
    <>
      <div className="container mx-auto px-4 lg:flex hidden">
        <Breadcrumb title="İletişim" />
      </div>
      <section>
        <Contact generals={generals} />
      </section>
    </>
  );
}

export default page;
