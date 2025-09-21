// src/app/blog/components/BlogCard.tsx
import Link from "next/link";

type BlogCardProps = {
  id: string;
  title: string;
};

export default function BlogCard({ id, title }: BlogCardProps) {
  
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="max-w-sm p-4 bg-white border rounded shadow">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm text-gray-600">ID: {id}</p>
      <Link
        href={`/blog/${id}/${encodedTitle}`}
        className="inline-block mt-3 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Baca Selengkapnya
      </Link>
    </div>
  );
}
