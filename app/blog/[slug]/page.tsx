import { Suspense } from "react";
import { notFound } from "next/navigation";
import { BlogPostContent } from "./blog-post-content";
import { BlogPostContentSkeleton } from "@/components/blog-skeleton";
import { fetchBlogPost, fetchRecentPosts } from "@/lib/blog-api";

export const dynamicParams = true;

export async function generateStaticParams() {
  return []; // Generate nothing at build, allow on-demand rendering
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await fetchBlogPost(params.slug);

  if (!post) return {};

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    keywords: post.metaKeywords?.map(k => k.trim()) ?? [],
    alternates: {
      canonical: `https://yourdomain.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription,
      type: "article",
      url: `https://yourdomain.com/blog/${params.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle || post.title,
      description: post.metaDescription,
    },
  };
}
async function BlogPostData({ slug }: { slug: string }) {
  try {
    const blogPost = await fetchBlogPost(slug);
    console.log("Fetched post:", blogPost);
    if (!blogPost) {
      notFound();
    }

    // Fetch related posts
    const relatedPosts = await fetchRecentPosts();

    return (
      <BlogPostContent
        blogPost={blogPost}
        relatedPosts={relatedPosts}
        params={{ slug }}
      />
    );
  } catch (error) {
    console.error("Error loading blog post:", error);
    notFound();
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<BlogPostContentSkeleton />}>
      <BlogPostData slug={params.slug} />
    </Suspense>
  );
}
