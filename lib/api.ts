// API integration functions for Technests backend
// These functions simulate real API calls to the backend

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  plan: string;
  status: 'active' | 'trial' | 'inactive';
  createdAt: Date;
}

export interface TradingSignal {
  id: string;
  symbol: string;
  type: 'buy' | 'sell';
  price: number;
  stopLoss: number;
  takeProfit: number;
  confidence: number;
  timestamp: Date;
  status: 'active' | 'completed' | 'cancelled';
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'starter' | 'professional' | 'enterprise';
  status: 'active' | 'trial' | 'cancelled' | 'past_due';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  trialEnd?: Date;
}

export interface LeadCaptureData {
  name: string;
  email: string;
  source: 'chat' | 'newsletter' | 'contact';
  metadata?: Record<string, any>;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone?: string;
  company?: string;
}

// Auth API
export const authAPI = {
  async login(email: string, password: string): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      user: {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
        plan: 'professional',
        status: 'active',
        createdAt: new Date()
      },
      token: 'mock-jwt-token'
    };
  },

  async register(userData: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    plan: string;
  }): Promise<{ user: User; token: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      user: {
        id: Math.random().toString(36).substr(2, 9),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        plan: userData.plan,
        status: 'trial',
        createdAt: new Date()
      },
      token: 'mock-jwt-token'
    };
  },

  async logout(): Promise<void> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
  },

  async resetPassword(email: string): Promise<{ message: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: 'Password reset instructions sent to your email'
    };
  }
};

// Trading Signals API
export const signalsAPI = {
  async getSignals(limit: number = 10): Promise<TradingSignal[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockSignals: TradingSignal[] = [
      {
        id: '1',
        symbol: 'EURUSD',
        type: 'buy',
        price: 1.0850,
        stopLoss: 1.0800,
        takeProfit: 1.0920,
        confidence: 85,
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 mins ago
        status: 'active'
      },
      {
        id: '2',
        symbol: 'GBPJPY',
        type: 'sell',
        price: 189.50,
        stopLoss: 190.20,
        takeProfit: 188.00,
        confidence: 92,
        timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 mins ago
        status: 'active'
      },
      {
        id: '3',
        symbol: 'AAPL',
        type: 'buy',
        price: 182.50,
        stopLoss: 180.00,
        takeProfit: 188.00,
        confidence: 78,
        timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
        status: 'completed'
      }
    ];
    
    return mockSignals.slice(0, limit);
  },

  async getSignalHistory(userId: string, days: number = 30): Promise<TradingSignal[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return mock historical data
    return [];
  }
};

// Subscription API
export const subscriptionAPI = {
  async createSubscription(data: {
    userId: string;
    plan: string;
    billing: 'monthly' | 'yearly';
  }): Promise<Subscription> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const now = new Date();
    const trialEnd = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 7 days
    
    return {
      id: Math.random().toString(36).substr(2, 9),
      userId: data.userId,
      plan: data.plan as any,
      status: 'trial',
      currentPeriodStart: now,
      currentPeriodEnd: trialEnd,
      trialEnd
    };
  },

  async getSubscription(userId: string): Promise<Subscription | null> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return null; // Mock: no existing subscription
  },

  async cancelSubscription(subscriptionId: string): Promise<{ message: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      message: 'Subscription cancelled successfully'
    };
  },

  async updateSubscription(subscriptionId: string, data: {
    plan?: string;
    billing?: 'monthly' | 'yearly';
  }): Promise<Subscription> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Return updated subscription
    throw new Error('Not implemented');
  }
};

// Lead Capture API
export const leadAPI = {
  async captureLeadFromChat(data: LeadCaptureData): Promise<{ success: boolean; leadId: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log('Lead captured from chat:', data);
    
    return {
      success: true,
      leadId: Math.random().toString(36).substr(2, 9)
    };
  },

  async subscribeToNewsletter(email: string, source: string = 'newsletter'): Promise<{ success: boolean }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600));
    
    console.log('Newsletter subscription:', { email, source });
    
    return {
      success: true
    };
  },

  async submitContactForm(data: ContactFormData): Promise<{ success: boolean; ticketId: string }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Contact form submitted:', data);
    
    return {
      success: true,
      ticketId: Math.random().toString(36).substr(2, 9)
    };
  }
};

// Analytics API
export const analyticsAPI = {
  async trackEvent(eventName: string, properties: Record<string, any>): Promise<void> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 200));
    
    console.log('Analytics event:', { eventName, properties });
  },

  async getPerformanceMetrics(userId: string, timeframe: '7d' | '30d' | '90d' = '30d'): Promise<{
    totalTrades: number;
    winRate: number;
    totalProfit: number;
    averageReturn: number;
  }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      totalTrades: 156,
      winRate: 87.2,
      totalProfit: 12450.75,
      averageReturn: 23.4
    };
  }
};

// Notification API
export const notificationAPI = {
  async sendSignalNotification(userId: string, signal: TradingSignal): Promise<void> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    
    console.log('Signal notification sent:', { userId, signal });
  },

  async getNotificationPreferences(userId: string): Promise<{
    email: boolean;
    push: boolean;
    sms: boolean;
    signals: boolean;
    marketing: boolean;
  }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      email: true,
      push: true,
      sms: false,
      signals: true,
      marketing: false
    };
  },

  async updateNotificationPreferences(userId: string, preferences: {
    email?: boolean;
    push?: boolean;
    sms?: boolean;
    signals?: boolean;
    marketing?: boolean;
  }): Promise<{ success: boolean }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 700));
    
    console.log('Notification preferences updated:', { userId, preferences });
    
    return {
      success: true
    };
  }
};

// Blog API
export const blogAPI = {
  async getBlogPosts(limit: number = 10, category?: string): Promise<any[]> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Return mock blog posts
    return [];
  },

  async getBlogPost(slug: string): Promise<any | null> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 400));
    
    // Return mock blog post
    return null;
  }
};

// Payment API
export const paymentAPI = {
  async createPaymentIntent(amount: number, currency: string = 'usd'): Promise<{
    clientSecret: string;
    paymentIntentId: string;
  }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      clientSecret: 'pi_mock_client_secret',
      paymentIntentId: 'pi_mock_payment_intent'
    };
  },

  async confirmPayment(paymentIntentId: string): Promise<{ success: boolean }> {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    return {
      success: true
    };
  }
};

// Error handling utility
export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}

// Request helper with error handling
export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new APIError(
        errorData.message || 'An error occurred',
        response.status,
        errorData.code
      );
    }

    return await response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error occurred', 0);
  }
}