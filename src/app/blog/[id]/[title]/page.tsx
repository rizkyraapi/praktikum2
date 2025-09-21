import BlogCard from "../../components/BlogCard";



interface BlogDetailProps {
  params: { id: string; title: string };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  const decodedTitle = decodeURIComponent(params.title);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Detail Blog</h1>

      {/* ini bagian penting: pakai BlogCard */}
      <BlogCard
        title={decodedTitle}
        description={`Ini adalah blog dengan ID: ${params.id}`}
      />
    </main>
  );
}
