import axios, { AxiosResponse } from 'axios';

const API_BASE_URL = 'https://technests.onrender.com/v1';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for authentication if needed
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export interface BlogPost {
  _id: string;
  title: string;
  urlSlug: string;
  summary: string;
  content: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
    bio: string;
  };
  category: {
    _id: string;
    name: string;
  };
  tags: string[];
  featuredImage: string;
  publishedAt: string;
  readingTime: string;
  status: 'PUBLISHED' | 'DRAFT';
  isFeatured: boolean;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
}

export interface BlogCategory {
  _id: string;
  name: string;
  description: string;
  postCount: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}



export interface BlogPostsParams {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  isFeatured?: boolean;
}

// Fetch blog posts with pagination and filters
export async function fetchBlogPosts(params: BlogPostsParams = {}): Promise<PaginatedResponse<BlogPost>> {
  try {
    const queryParams = {
      page: params.page || 1,
      limit: params.limit || 10,
      ...(params.search && { search: params.search }),
    };

    const response: AxiosResponse = await apiClient.get('/blogs', {
      params: queryParams
    });

    const apiResponse = response.data;
    
    // Transform API response to match our interface
    const transformedData: PaginatedResponse<BlogPost> = {
      data: apiResponse.entity.items,
      pagination: {
        page: apiResponse.entity.meta.currentPage,
        limit: apiResponse.entity.meta.itemsPerPage,
        total: apiResponse.entity.meta.totalItems,
        totalPages: apiResponse.entity.meta.totalPages,
        hasNext: apiResponse.entity.meta.hasNextPage,
        hasPrev: apiResponse.entity.meta.hasPreviousPage
      }
    };

    return transformedData;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

// Fetch recent posts as fallback for related posts
export async function fetchRecentPosts(limit: number = 3): Promise<BlogPost[]> {
  try {
    const response = await fetchBlogPosts({
      limit,
      page: 1,
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching recent posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response: AxiosResponse = await apiClient.get(`/blogs/${slug}`);
    const apiResponse = response.data;
    
    // Check if the response has the expected structure
    if (apiResponse.entity) {
      return apiResponse.entity;
    } else {
      return apiResponse;
    }
  } catch (error: any) {
    if (error.response?.status === 404) {
      return null;
    }
    console.error('Error fetching blog post:', error);
    throw error;
  }
}

// Fetch blog categories
export async function fetchBlogCategories(): Promise<BlogCategory[]> {
  try {
    const response: AxiosResponse = await apiClient.get('/blog-categories/active');
    const apiResponse = response.data;
    
    // Transform categories if they follow similar structure
    const categories = apiResponse.entity?.items || apiResponse.entity || apiResponse;
    
    return categories.map((category: any) => ({
      id: category._id || category.id,
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      postCount: category.postCount || 0
    }));
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    // Return default categories if API fails
    return [];
  }
}


// Fetch related posts
export async function fetchRelatedPosts(postId: string, limit: number = 3): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/blog/posts/${postId}/related?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch related posts: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return []; // Return empty array on error
  }
}

// Fetch featured posts
export async function fetchFeaturedPosts(limit: number = 1): Promise<BlogPost[]> {
  try {
    const response = await fetchBlogPosts({
      isFeatured: true,
      limit,
      page: 1
    });
    
    return response.data;
  } catch (error) {
    console.error('Error fetching featured posts:', error);
    return [];
  }
}

// Search blog posts
export async function searchBlogPosts(query: string, page: number = 1, limit: number = 10): Promise<PaginatedResponse<BlogPost>> {
  return fetchBlogPosts({
    search: query,
    page,
    limit
  });
}

// Get posts by category
export async function fetchPostsByCategory(categorySlug: string, page: number = 1, limit: number = 3): Promise<PaginatedResponse<BlogPost>> {
  return fetchBlogPosts({
    category: categorySlug,
    page,
    limit
  });
}