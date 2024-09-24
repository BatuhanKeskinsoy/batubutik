import { getUser } from "@/lib/utils/User/getUser";
import axios from "axios";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Kullanıcı verilerini çek
    let users;
    try {
      users = await getUser(); // Burada kullanıcı verilerini çekiyoruz
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return NextResponse.json(
        { message: "Failed to fetch users." },
        { status: 500 }
      );
    }

    // Kullanıcıyı bulma
    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
        return NextResponse.json({
        message: `Başarıyla Giriş Yaptınız`,
        
        user: {
          uid: user.uid,
          fullName: user.fullName,
          email: user.email,
          role: user.role,
        },
      });
    } else {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error in POST request:", error); // Hata bilgilerini konsola yazdır

    // Hata mesajını güvenli bir şekilde almak için tür koruması
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";

    return NextResponse.json(
      { message: "An error occurred.", error: errorMessage },
      { status: 500 }
    );
  }
}
