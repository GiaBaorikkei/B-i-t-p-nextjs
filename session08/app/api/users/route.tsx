import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "Gia Bảo",
    age: 19,
  },
  {
    id: 2,
    name: "Cảnh Hùng",
    age: 19,
  },
  {
    id: 3,
    name: "Đăng Hoàng",
    age: 19,
  },
];
export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const nameQuery = searchParams.get("name");

  if (nameQuery) {
    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    return NextResponse.json({ data: filteredUsers });
  }
  return NextResponse.json({ data: users });
}
export async function POST(req: any) {
  const data = await req.json();
  return NextResponse.json({
    message: "Thêm user thành công",
    users: data,
  });
}