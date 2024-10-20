import { NextResponse } from "next/server";

const comments = [
  {
    id: 1,
    code: "ABJ-100",
    comment:
      "Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum.",
    reply: null,
    rating: 4.9,
    user: {
      firstName: "Batuhan",
      lastName: "Keskinsoy",
    },
    created_at: "2024-10-20T13:24:59.000000Z",
  },
  {
    id: 2,
    code: "ABJ-100",
    comment:
      "Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum.",
    reply:
      "Beğenmenize sevindik, iyi günler beğenmenize sevindik, iyi günlerde kullanın. Beğenmenize sevindik, iyi günlerde kullanın.",
    rating: 3.2,
    user: {
      firstName: "Ahmet",
      lastName: "Yılmaz",
    },
    created_at: "2024-10-20T15:42:22.000000Z",
  },
  {
    id: 3,
    code: "BBD-103",
    comment:
      "Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum. Güzel ürün ben aldım kullanıyorum.",
    reply:
      "Beğenmenize sevindik, iyi günler beğenmenize sevindik, iyi günlerde kullanın. Beğenmenize sevindik, iyi günlerde kullanın.",
    rating: 4.1,
    user: {
      firstName: "Ahmet",
      lastName: "Yılmaz",
    },
    created_at: "2024-10-20T22:42:12.000000Z",
  },
];

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const comment = comments.filter((comment) => comment.code === params.code);

  if (!comment) {
    return NextResponse.json({ error: "Yorum bulunamadı" }, { status: 404 });
  }

  return NextResponse.json(comment);
}
