"use client";
import { orderTypes } from "@/types/order/orderTypes";
import React from "react";
import OrderItem from "@/components/(front)/UserProfile/Order/OrderItem";
import { IoFileTrayOutline } from "react-icons/io5";

interface IProfileOrdersProps {
  orders: orderTypes[];
}

function Orders({ orders }: IProfileOrdersProps) {
  if (orders.length === 0) {
    return (
      <div
        className={`flex flex-col gap-4 w-full py-8 justify-center items-center text-gray-500 dark:text-zinc-600`}
      >
        <div
          className={`flex  gap-4 justify-center items-center animate-pulse`}
        >
          <IoFileTrayOutline className={`text-6xl`} />
          <span className="font-gemunu tracking-wide lg:text-2xl text-xl">
            Henüz Siparişiniz Yok
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-full overflow-hidden">
        {orders
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map((order) => {
            return <OrderItem key={order.id} order={order} />;
          })}
      </div>
    );
  }
}

export default Orders;
