import { Metadata } from "next";
import { notFound } from "next/navigation";
import Hero from "@/components/sections/blog-detail/Hero";
import BlogDetail from "@/components/sections/blog-detail/BlogDetail";
import { allBlogs, getBlogById } from "@/data/blogs";
import { parseNumericRouteId } from "@/lib/routes";

type BlogDetailPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return allBlogs.map((blog) => ({ id: String(blog.id) }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const blogId = parseNumericRouteId(id);
  const blog = blogId === null ? undefined : getBlogById(blogId);

  if (!blog) {
    return {
      title:
        "Blog Detail | HMP - Car Dealer, Rental & Listing",
    };
  }

  return {
    title: `${blog.title} | HMP`,
    description: blog.excerpt ?? blog.intro,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blogId = parseNumericRouteId(id);
  const blog = blogId === null ? undefined : getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Hero blog={blog} />
      <BlogDetail blog={blog} />
    </>
  );
}
