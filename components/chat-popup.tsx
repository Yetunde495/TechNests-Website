"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MessageCircle, 
  X, 
  Send, 
  User, 
  Bot,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatState {
  isOpen: boolean;
  isEmailCaptured: boolean; 
  userEmail: string;
  userName: string;
  messages: Message[];
  currentMessage: string;
}

const initialMessages: Message[] = [
  {
    id: '1',
    type: 'bot',
    content: "👋 Hi! I'm TradePro's AI assistant. I'm here to help you with questions about our trading platform and services. How can I assist you today?",
    timestamp: new Date()
  }
];

const botResponses = [
  "Thanks for your question! Our AI-powered trading signals have an average accuracy rate of 87%. Would you like to know more about our risk management features?",
  "Great question! We support Forex, Stocks, Commodities, and Cryptocurrencies across all major exchanges. Our platform works 24/7 to capture opportunities.",
  "Our Professional plan is our most popular choice, offering 25 signals per day with advanced automation. You can start with a 7-day free trial!",
  "Absolutely! We provide comprehensive onboarding, live webinars, and 24/7 support to help you succeed. Our success rate speaks for itself.",
  "Our platform uses institutional-grade security with bank-level encryption. Your funds and data are completely secure with us.",
  "You can start trading within minutes of signing up. Our Quick Start guide will have you up and running in no time!"
];

export function ChatPopup() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    isEmailCaptured: false,
    userEmail: '',
    userName: '',
    messages: [],
    currentMessage: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const { toast } = useToast();

  const toggleChat = () => {
    setChatState(prev => ({
      ...prev,
      isOpen: !prev.isOpen,
      messages: prev.messages.length === 0 ? initialMessages : prev.messages
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;

    if (!email || !name) return;

    // Simulate API call to capture lead
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In real app, send lead data to backend/CRM
      console.log('Lead captured:', { email, name });
      
      setChatState(prev => ({
        ...prev,
        isEmailCaptured: true,
        userEmail: email,
        userName: name
      }));

      setShowEmailForm(false);

      // Add welcome message
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: `Welcome ${name}! 🎉 Thanks for joining our community. I'm here to answer any questions about TradePro. What would you like to know?`,
        timestamp: new Date()
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, welcomeMessage]
      }));

      toast({
        title: "Welcome to TradePro!",
        description: "You can now chat with our AI assistant."
      });

    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const sendMessage = async () => {
    if (!chatState.currentMessage.trim()) return;

    if (!chatState.isEmailCaptured) {
      setShowEmailForm(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: chatState.currentMessage,
      timestamp: new Date()
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      currentMessage: ''
    }));

    // Simulate bot typing
    setIsTyping(true);
    
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot', 
        content: randomResponse,
        timestamp: new Date()
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, botMessage]
      }));
      
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={toggleChat}
          size="lg"
          className="rounded-full text-white w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
        >
          {chatState.isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </Button>
        
        {/* Notification badge */}
        {!chatState.isOpen && !chatState.isEmailCaptured && (
          <motion.div
            className="absolute -top-2 -right-2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 3 }}
          >
            <Badge className="bg-red-500 text-white rounded-full w-6 h-6 p-0 flex items-center justify-center text-xs">
              1
            </Badge>
          </motion.div>
        )}
      </motion.div>

      {/* Email Capture Modal */}
      <AnimatePresence>
        {showEmailForm && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEmailForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="w-full max-w-md">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Start Your Conversation</CardTitle>
                  <CardDescription>
                    To provide you with personalized assistance, please share your contact information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setShowEmailForm(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1">
                        Start Chat
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {chatState.isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-40 w-96 max-w-[calc(100vw-3rem)]"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Card className="shadow-2xl">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/logo.png" alt="TradePro AI" />
                      <AvatarFallback>
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">TradePro Assistant</CardTitle>
                      <CardDescription className="text-xs">
                        {chatState.isEmailCaptured ? "Online • Typically replies instantly" : "Get instant answers"}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleChat}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4">
                  {chatState.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-2 ${
                        message.type === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {message.type === 'bot' && (
                        <Avatar className="h-6 w-6 mt-1">
                          <AvatarFallback className="bg-primary/10">
                            <Bot className="h-3 w-3 text-primary" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.type === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted'
                        }`}
                      >
                        {message.content}
                      </div>
                      {message.type === 'user' && (
                        <Avatar className="h-6 w-6 mt-1">
                          <AvatarFallback className="bg-secondary">
                            <User className="h-3 w-3" />
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-2">
                      <Avatar className="h-6 w-6 mt-1">
                        <AvatarFallback className="bg-primary/10">
                          <Bot className="h-3 w-3 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-muted-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-4 border-t">
                  {!chatState.isEmailCaptured ? (
                    <div className="text-center space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Start a conversation to get personalized help
                      </p>
                      <Button onClick={() => setShowEmailForm(true)} size="sm" className="w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Start Conversation
                      </Button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Type your message..."
                        value={chatState.currentMessage}
                        onChange={(e) => setChatState(prev => ({ ...prev, currentMessage: e.target.value }))}
                        onKeyPress={handleKeyPress}
                        className="min-h-[40px] max-h-[120px] resize-none"
                        rows={1}
                      />
                      <Button 
                        onClick={sendMessage}
                        size="icon"
                        disabled={!chatState.currentMessage.trim() || isTyping}
                        className="h-10 w-10 flex-shrink-0"
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}