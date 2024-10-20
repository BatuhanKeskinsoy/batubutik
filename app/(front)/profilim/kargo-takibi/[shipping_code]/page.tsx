import ShippingTracking from "@/components/(front)/UserProfile/ShippingTracking/ShippingTracking";
import React from "react";

function page({ params }: { params: { shipping_code: string } }) {
  const shippingCode = params.shipping_code;
  return <ShippingTracking code={shippingCode} />;
}

export default page;
