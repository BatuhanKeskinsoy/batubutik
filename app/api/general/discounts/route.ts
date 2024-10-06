import { NextResponse } from "next/server";

export async function GET() {
  const discounts = [
    {
      code: "CODE01",
      isPercentage: true,
      discount: 10,
    },
    {
      code: "CODE02",
      isPercentage: false,
      discount: 200,
    },
    {
      code: "CODE03",
      isPercentage: true,
      discount: 20,
    },
  ];

  return NextResponse.json(discounts);
}
