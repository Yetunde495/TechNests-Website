"use client";

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function BlogPostSkeleton() {
  return (
    <Card className="h-full">
      <div className="aspect-video bg-muted animate-pulse rounded-t-lg" />
      <CardHeader>
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1">
            <Skeleton className="h-4 w-24 mb-1" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function FeaturedPostSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="aspect-video lg:aspect-square bg-muted animate-pulse" />
        <div className="p-8">
          <Skeleton className="h-6 w-24 mb-4" />
          <Skeleton className="h-8 w-full mb-2" />
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3 mb-6" />
          
          <div className="flex items-center gap-4 mb-6">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="flex-1">
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-32" />
            </div>
          </div>
          
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </Card>
  );
}

export function BlogGridSkeleton({ count = 9 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array.from({ length: count }).map((_, index) => (
        <BlogPostSkeleton key={index} />
      ))}
    </div>
  );
}

export function BlogCategoriesSkeleton() {
  return (
    <div className="flex flex-wrap gap-2">
      <Skeleton className="h-8 w-16" />
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-8 w-24" />
      <Skeleton className="h-8 w-18" />
      <Skeleton className="h-8 w-22" />
    </div>
  );
}

export function BlogHeaderSkeleton() {
  return (
    <div className="text-center">
      <Skeleton className="h-6 w-32 mx-auto mb-4" />
      <Skeleton className="h-12 w-64 mx-auto mb-4" />
      <Skeleton className="h-6 w-96 mx-auto mb-2" />
      <Skeleton className="h-6 w-80 mx-auto" />
    </div>
  );
}

export function RelatedPostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <Card key={index} className="h-full">
          <div className="aspect-video bg-muted animate-pulse rounded-t-lg" />
          <CardHeader>
            <Skeleton className="h-5 w-full mb-2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-3 w-16" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function BlogPostContentSkeleton() {
  return (
    <div className="min-h-screen pt-24">
      {/* Back Button */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-32 mb-8" />
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Skeleton className="h-6 w-24 mx-auto mb-4" />
          <Skeleton className="h-12 w-96 mx-auto mb-6" />
          
          <div className="flex items-center justify-center gap-6 mb-8">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>

          <div className="flex items-center justify-center gap-4 mb-8">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div>
              <Skeleton className="h-4 w-24 mb-1" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-16" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg bg-muted animate-pulse mb-12" />
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))}
          
          {/* Tags Section */}
          <div className="mt-12 pt-8 border-t">
            <Skeleton className="h-5 w-16 mb-4" />
            <div className="flex flex-wrap gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-18" />
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}