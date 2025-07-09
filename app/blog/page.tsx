"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Calendar,
  Clock,
  User,
  Search,
  TrendingUp,
  BarChart3,
  Shield,
  Zap,
  Tag,
  ArrowRight,
  Download,
  CircleCheck,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  type BlogCategory,
  type BlogPost,
  fetchBlogCategories,
  fetchBlogPosts,
  fetchFeaturedPosts,
  PaginatedResponse,
} from "@/lib/blog-api";
import {
  BlogCategoriesSkeleton,
  BlogGridSkeleton,
} from "@/components/blog-skeleton";
import { BlogPagination } from "@/components/blog-pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/mockdata";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Blog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [blogData, setBlogData] = useState<PaginatedResponse<BlogPost> | null>(
    null
  );
  const [featuredPost, setFeaturedPost] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [featuredLoading, setFeaturedLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  // Get current filters from URL
  const currentPage = parseInt(searchParams.get("page") || "1");
  const currentCategory = searchParams.get("category") || "";
  const currentSearch = searchParams.get("search") || "";

  // Fetch data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        // Fetch blog posts with current filters
        const postsResponse = await fetchBlogPosts({
          page: currentPage,
          limit: 6,
          search: currentSearch,
          category: currentCategory,
        });
        setBlogData(postsResponse);

        // Fetch featured post only on first page without filters
        if (currentPage === 1 && !currentSearch && !currentCategory) {
          const featured = await fetchFeaturedPosts(4);
          setFeaturedPost(featured);
        } else {
          setFeaturedPost([]);
        }

        // Fetch categories
        const categoriesData = await fetchBlogCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error loading blog data:", error);
      } finally {
        setLoading(false);
        setFeaturedLoading(false);
        setCategoriesLoading(false);
      }
    };

    loadData();
  }, [currentPage, currentCategory, currentSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());

    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    } else {
      params.delete("search");
    }

    // Reset to first page when searching
    params.delete("page");

    const queryString = params.toString();
    router.push(queryString ? `/blog?${queryString}` : "/blog");
  };

  const handleCategoryFilter = (categoryId: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (categoryId === "" || categoryId === currentCategory) {
      params.delete("category");
    } else {
      params.set("category", categoryId);
    }

    // Reset to first page when filtering
    params.delete("page");

    const queryString = params.toString();
    router.push(queryString ? `/blog?${queryString}` : "/blog");
  };
  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold mb-3">
              Welcome to{" "}
              <span className="py-2 gradient-text !bg-clip-text text-transparent inline-block">
                Technests Blog
              </span>
            </h1>
            <p className="text-base text-[#374758] dark:text-zinc-100 mb-8 max-w-3xl mx-auto">
              Stay updated with the latest trading strategies, market analysis,
              and insights from our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row flex-wrap gap-8">
            <div className="flex-1">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>

            {categoriesLoading ? (
              <BlogCategoriesSkeleton />
            ) : (
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={!currentCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryFilter("")}
                  className="flex items-center gap-2"
                >
                  All
                  <Badge variant="secondary" className="ml-1">
                    {blogData?.pagination.total || 0}
                  </Badge>
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category._id}
                    variant={
                      currentCategory === category._id ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleCategoryFilter(category._id)}
                    className="flex items-center gap-2"
                  >
                    <Tag className="h-4 w-4" />
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.postCount}
                    </Badge>
                  </Button>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {!featuredLoading && featuredPost?.length > 0 && (
        <section className="py-20 px-4 sm:px-[5%] lg:px-[7%] bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold">Featured Articles</h2>
            </motion.div>

            {featuredLoading ? (
              <BlogGridSkeleton count={3} />
            ) : (
              <>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                >
                  <motion.div variants={fadeInUp} className="">
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-muted">
                        <img
                          src={featuredPost[0]?.featuredImage}
                          alt={featuredPost[0].title}
                          className={` w-full h-full object-cover rounded-t-lg`}
                        />
                      </div>
                      <CardHeader className="py-4 px-3 max-sm:px-2">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-1">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {(
                                  featuredPost[0].author?.firstName +
                                  " " +
                                  featuredPost[0]?.author?.lastName
                                )
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm font-medium">
                                {featuredPost[0]?.author?.firstName}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(
                                featuredPost[0].publishedAt
                              ).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {featuredPost[0]?.readingTime}
                            </span>
                          </div>
                        </div>

                        <CardTitle className="text-lg">
                          <Link
                            href={`/blog/${featuredPost[0]?.urlSlug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {featuredPost[0].title}
                          </Link>
                        </CardTitle>
                        <CardDescription>
                          {featuredPost[0]?.summary}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="px-3 max-sm:px-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="w-fit mb-2">
                            {featuredPost[0]?.category?.name}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  {featuredPost.length > 1 && (
                    <div className="flex flex-col gap-4 max-sm:gap-8">
                      {featuredPost?.slice(1)?.map((post) => (
                        <motion.div key={post._id} variants={fadeInUp}>
                          <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-4 items-start  hover:shadow-lg transition-shadow duration-300">
                            <div className=" bg-muted">
                              <img
                                src={post?.featuredImage}
                                alt={post.title}
                                className={` w-full h-full object-cover rounded-lg`}
                              />
                            </div>
                            <div className="space-y-2 h-full">
                              <div className="px-3 max-sm:px-2">
                                <div className="text-base font-semibold mb-2">
                                  <Link
                                    href={`/blog/${post?.urlSlug}`}
                                    className="hover:text-primary transition-colors"
                                  >
                                    {post.title}
                                  </Link>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {post?.summary}
                                </p>
                              </div>
                              <div className="px-3 max-sm:px-2 relative -bottom-3">
                                <div className="flex items-center justify-between gap-3">
                                  <Badge
                                      variant="outline"
                                      className="w-fit mb-2"
                                    >
                                      {post?.category?.name}
                                    </Badge>

                                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <Calendar className="h-3 w-3" />
                                      {new Date(
                                        post.publishedAt
                                      ).toLocaleDateString()}
                                    </span>
                                    
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-[5%] lg:px-[7%] bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold">Latest Articles</h2>
          </motion.div>

          {loading ? (
            <BlogGridSkeleton count={9} />
          ) : blogData && blogData.data.length > 0 ? (
            <>
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {blogData?.data?.map((post, index) => (
                  <motion.div key={post._id} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="aspect-video bg-muted">
                        <img
                          src={post?.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader className="py-4 px-3 max-sm:px-2">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-1">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback>
                                {(
                                  post.author?.firstName +
                                  " " +
                                  post?.author?.lastName
                                )
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <p className="text-sm font-medium">
                                {post?.author?.firstName}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post?.readingTime}
                            </span>
                          </div>
                        </div>

                        <CardTitle className="text-lg">
                          <Link
                            href={`/blog/${post?.urlSlug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{post?.summary}</CardDescription>
                      </CardHeader>
                      <CardContent className="px-3 max-sm:px-2">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="w-fit mb-2">
                            {post?.category?.name}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              {/* Pagination */}
              <BlogPagination
                currentPage={blogData.pagination.page}
                totalPages={blogData.pagination.totalPages}
                hasNext={blogData.pagination.hasNext}
                hasPrev={blogData.pagination.hasPrev}
              />
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg">
                {currentSearch || currentCategory
                  ? "No articles found matching your criteria."
                  : "No articles available at the moment."}
              </p>
              {(currentSearch || currentCategory) && (
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => router.push("/blog")}
                >
                  View All Articles
                </Button>
              )}
            </motion.div>
          )}

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="md:text-xl text-lg text-muted-foreground max-w-3xl mx-auto">
              Our FAQ area is the best place to look to find answers to your
              questions. Our community and support team constantly updates the
              questions and answers.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex w-full justify-center items-center max-w-5xl mx-auto"
          >
            <Accordion type="single" collapsible className="w-full space-y-2.5">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-[7%]">
        <div className="max-w-6xl mx-auto text-center bg-[#F6F7F8] dark:bg-[#151515BF] py-[7%] px-[5%] rounded-2xl border dark:border-zinc-800 border-zinc-300">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-center text-3xl font-bold md:text-4xl text-slate-900 dark:text-white tracking-tight mb-6">
              Ready to Pass Your Next
              <br />
              <span className="py-2 gradient-text !bg-clip-text text-transparent inline-block">
                Prop Firm Challenge?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of successful traders who've transformed their
              trading with Technests.ai. Get the discipline, structure, and
              AI-powered insights you need to succeed.
            </p>
            <div className="flex justify-center items-center grid-cols-1 gap-5 w-full">
              <div className="flex items-center text-sm justify-center gap-1 text-center">
                <CircleCheck className="text-[#17C964]" />

                <p className=" text-[#374758] dark:text-zinc-100">
                  67% Success Rate
                </p>
              </div>
              <div className="flex items-center text-sm justify-center gap-1 text-center">
                <Shield className="text-[#00DCF1]" />

                <p className=" text-[#374758] dark:text-zinc-100">
                  100% Private & Local
                </p>
              </div>
              <div className="flex items-center text-sm justify-center gap-1 text-center">
                <Download className="text-[#CD12DF]" />

                <p className=" text-[#374758] dark:text-zinc-100">
                  Instant Download
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center py-8">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <Link href="/pricing">
                  View Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
             
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
