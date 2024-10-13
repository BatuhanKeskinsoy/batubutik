import { NextResponse } from "next/server";

export async function GET() {
  const user = {
    uid: 2,
    firstName: "Batuhan",
    lastName: "Keskinsoy",
    email: "batuhankeskinsoy55@gmail.com",
    phone: "05415283633",
    password: "Bk123456+",
    role: "user",
  };
  
  return NextResponse.json(user);
}
