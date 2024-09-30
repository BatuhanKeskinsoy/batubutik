import { NextResponse } from "next/server";

export async function GET() {
  const users = [
    {
      uid: 1,
      fullName: "Batuhan Keskinsoy",
      email: "batuhankeskinsoy55@gmail.com",
      password: "123456+",
      role: "superadmin",
    },
    {
      uid: 2,
      fullName: "Ahmet Yılmaz",
      email: "ahmetyilmaz@gmail.com",
      password: "123456+",
      role: "user",
    },
  ];

  return NextResponse.json(users);
}
