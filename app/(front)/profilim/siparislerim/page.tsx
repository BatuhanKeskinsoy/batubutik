import Orders from "@/components/(front)/UserProfile/Order/Orders";
import { getOrders } from "@/lib/utils/Order/getOrders";
import { orderTypes } from "@/types/order/orderTypes";
import React from "react";

async function page() {
  const orders: orderTypes[] = await getOrders();
  return <Orders orders={orders} />;
}

export default page;
