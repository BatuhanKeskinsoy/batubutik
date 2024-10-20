import { orderTypes } from "@/types/order/orderTypes";
import React from "react";
import OrderItem from "@/components/(front)/UserProfile/Order/OrderItem";
import { IoBagHandleOutline } from "react-icons/io5";

interface IProfileOrdersProps {
  orders: orderTypes[];
}

function Orders({ orders }: IProfileOrdersProps) {
  if (orders.length === 0) {
    return (
      <>
        <div
          className={`flex flex-col gap-4 w-full py-4 justify-start items-start text-gray-500 dark:text-zinc-500`}
        >
          <div className={`flex lg:gap-4 gap-2 justify-center items-center`}>
            <div className="lg:min-w-20 lg:w-20 lg:h-20 min-w-16 w-16 h-16 flex items-center justify-center">
              <IoBagHandleOutline
                className={`text-5xl lg:text-6xl min-w-[60px]`}
              />
            </div>
            <span className="font-gemunu tracking-wide lg:text-xl text-lg">
              Bu ürüne henüz yorum yapılmamış. Doğru değerlendirme amacıyla
              ürünü satın almadan yorum yapamazsınız, eğer ürünü zaten satın
              aldıysanız giriş yaptıktan sonra ilk yorumu{" "}
            </span>
          </div>
        </div>
        <hr className="dark:border-zinc-800 my-4" />
      </>
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
          .map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
      </div>
    );
  }
}

export default Orders;
