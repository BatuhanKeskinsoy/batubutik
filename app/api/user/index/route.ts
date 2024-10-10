import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      uid: 1,
      firstName: "Batuhan",
      lastName: "Keskinsoy Admin",
      email: "bkadmin@gmail.com",
      password: "Bk123456+",
      role: "superadmin",
    },
    {
      uid: 2,
      firstName: "Batuhan",
      lastName: "Keskinsoy",
      email: "batuhankeskinsoy55@gmail.com",
      password: "Bk123456+",
      role: "user",
    },
  ];

  return NextResponse.json(users);
}
