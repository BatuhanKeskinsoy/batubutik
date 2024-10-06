import React from "react";
import NotFoundMain from "@/components/others/NotFoundMain";
import { getGenerals } from "@/lib/utils/General/getGenerals";

async function NotFound() {
  const generals = await getGenerals();
  return <NotFoundMain generals={generals} />;
}

export default NotFound;
