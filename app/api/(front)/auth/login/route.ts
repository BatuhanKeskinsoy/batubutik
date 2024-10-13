import { getUsers } from "@/lib/utils/User/getUsers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    let users;
    try {
      users = await getUsers();
    } catch (error) {
      console.error("Kullanıcıları alma işlemi başarısız oldu:", error);
      return NextResponse.json(
        { message: "Kullanıcıları alma işlemi başarısız oldu." },
        { status: 500 }
      );
    }

    const user = users.find(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (user) {
      const token = jwt.sign(
        { uid: user.uid, email: user.email, role: user.role },
        process.env.JWT_SECRET || "your_jwt_secret",
        { expiresIn: "1h" }
      );

      return NextResponse.json({
        message: `Başarıyla Giriş Yaptınız`,

        user: {
          uid: user.uid,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          role: user.role,
        },
        token,
      });
    } else {
      return NextResponse.json(
        { message: "E-Posta adresi veya şifre geçersiz!" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("POST işleminde bir hata oluştu :", error);

    const errorMessage =
      error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu.";

    return NextResponse.json(
      { message: "Bir hata oluştu.", error: errorMessage },
      { status: 500 }
    );
  }
}
