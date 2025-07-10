"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  BookmarkPlus,
  Twitter,
  Facebook,
  Linkedin,
  Dot,
  Tag,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BlogPostContentSkeleton,
  RelatedPostsSkeleton,
} from "@/components/blog-skeleton";
import { BlogPost } from "@/lib/blog-api";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

interface BlogPostContentProps {
  blogPost: BlogPost | null;
  relatedPosts: BlogPost[];
  params: { slug: string };
  loading?: boolean;
}

export function BlogPostContent({
  blogPost,
  relatedPosts,
  loading = false,
}: BlogPostContentProps) {
  const [relatedLoading, setRelatedLoading] = useState(true);

  useEffect(() => {
    // Simulate related posts loading delay
    const timer = setTimeout(() => {
      setRelatedLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || !blogPost) {
    return <BlogPostContentSkeleton />;
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <section className="py-8 px-4 flex justify-between gap-2 items-center sm:px-6 lg:px-8">
        <div className="">
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        
        </div>
          {/* Social Share Buttons */}
          <div className="">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="lg:text-4xl md:text-3xl text-2xl font-display font-bold mb-4">
              {blogPost.title}
            </h1>
            {blogPost.summary && (
              <p className="text-base text-center text-muted-foreground mb-2">
                {blogPost.summary}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="aspect-video rounded-lg overflow-hidden"
          >
            <img
              src={blogPost.featuredImage}
              alt={blogPost.title}
              className="w-full h-full max-h-96 object-cover"
            />
          </motion.div>
          <div className="flex items-center w-full space-x-6 justify-between text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Avatar className="h-10 w-10">
                <AvatarFallback>
                  {(
                    blogPost?.author?.firstName +
                    " " +
                    blogPost?.author?.lastName
                  )
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="font-semibold">
                  {blogPost?.author?.firstName +
                    " " +
                    blogPost?.author?.lastName}
                </p>
                <p className="text-sm text-muted-foreground">Admin</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <div className="flex items-center text-xs">
                <Clock className="h-3 w-3 mr-1" />
                {blogPost?.readingTime}
              </div>
              <Dot />
              {blogPost.publishedAt && (
                <div className="flex items-center text-xs">
                  <Calendar className="h-3 w-3 mr-1" />
                  {new Date(blogPost.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              )}
            </div>
          </div>
          
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <div className="w-full flex flex-col justify-center items-center">
              <div data-color-mode="light" className="w-full prose dark:prose-invert max-w-none">
                <div className="wmde-markdown-var dark:dark-wmde w-full prose dark:prose-invert max-w-none">
                  <MDEditor.Markdown
                    source={blogPost?.content || ""}
                    style={{
                      minHeight: "350px",
                    }}
                    className="editor-preview h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t"
          >
            <h3 className="font-semibold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {(relatedPosts.length > 0 || relatedLoading) && (
        <section className="py-20 px-4 sm:px-[7%] bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6">Related Articles</h2>
            </motion.div>

            {relatedLoading ? (
              <RelatedPostsSkeleton />
            ) : (
              <motion.div
                variants={{
                  animate: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                {relatedPosts.map((post, index) => (
                  <motion.div key={post._id} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-muted">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          <Link
                            href={`/blog/${post.urlSlug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{post?.summary}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {post?.readingTime}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want More Trading Insights?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for weekly trading tips and market
              analysis.
            </p>
            <Button size="lg" asChild>
              <Link href="/subscription">Subscribe Now</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
