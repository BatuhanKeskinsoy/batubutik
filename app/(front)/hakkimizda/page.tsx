import About from "@/components/(front)/About/About";
import { getAbout } from "@/lib/utils/General/getAbout";
import React from "react";

async function page() {
  const about = await getAbout();
  return (
    <section className="lg:mt-12 mt-4">
      <About about={about} />
    </section>
  );
}

export default page;
