import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh sách bài viết",
  description: "Danh sách các bài viết mới nhất về các chủ đề hấp dẫn.",
};

const posts = [
  {
    id: 1,
    title: "Accusamus beatae ad facilis",
    thumbnailUrl:
      "https://printgo.vn/uploads/media/792227/cac-loai-mau-xanh-1_1624333128.jpg",
  },
  {
    id: 2,
    title: "Reprehenderit est deserunt",
    thumbnailUrl:
      "https://printgo.vn/uploads/media/792227/cac-loai-mau-xanh-1_1624333128.jpg",
  },
  {
    id: 3,
    title: "Officia porro iure quia",
    thumbnailUrl:
      "https://printgo.vn/uploads/media/792227/cac-loai-mau-xanh-1_1624333128.jpg",
  },
];

export default function PostsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách bài viết</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow-sm">
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              width={500}
              height={300}
              className="rounded mb-2"
              priority={post.id === 1}
            />
            <h2 className="text-lg font-semibold">{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
