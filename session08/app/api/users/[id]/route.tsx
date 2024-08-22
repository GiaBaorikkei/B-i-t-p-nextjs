import React from "react";
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
export async function GET(req: any, res: any) {
  console.log(req);
  let find = users.find((item) => {
    return item.id == +res.params.id;
  });
  return NextResponse.json({ user: find ? find : "không tìm thấy" });
}
export async function DELETE(req: any) {
  const data = await req.json();
  return NextResponse.json({ massage: "Xóa user thành công", user: data });
}
export async function PUT(req: any) {
  const data = await req.json();
  return NextResponse.json({
    message: "Cập nhật user thành công",
    users: data,
  });
}
export async function PATCH(req: any) {
  const data = await req.json();
  return NextResponse.json({
    message: "Cập nhật user thành công",
    users: data,
  });
}