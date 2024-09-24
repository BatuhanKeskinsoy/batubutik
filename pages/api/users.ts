import type { NextApiRequest, NextApiResponse } from "next";

type User = {
  uid: number;
  fullName: string;
  email: string;
  password: string;
  role: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  res.status(200).json([
    {
      uid: 1,
      fullName: "Batuhan Keskinsoy",
      email: "batuhankeskinsoy55@gmail.com",
      password: "123456",
      role: "superadmin",
    },
    {
      uid: 2,
      fullName: "Ahmet Yılmaz",
      email: "ahmetyilmaz@gmail.com",
      password: "123456",
      role: "user",
    },
  ]);
}
