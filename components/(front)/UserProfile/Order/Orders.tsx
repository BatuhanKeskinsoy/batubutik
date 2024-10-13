import { orderTypes } from "@/types/order/orderTypes";
import React from "react";
import OrderItem from "@/components/(front)/UserProfile/Order/OrderItem";

interface IProfileOrdersProps {
  orders: orderTypes[];
}

function Orders({ orders }: IProfileOrdersProps) {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {orders
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        )
        .map((order) => (
          <OrderItem key={order.id} order={order} />
        ))}
    </div>
  );
}

export default Orders;
