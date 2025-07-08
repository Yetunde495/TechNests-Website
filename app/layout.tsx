import './globals.css';
import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
// import { ChatPopup } from '@/components/chat-popup';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';

// const inter = Inter({ subsets: ['latin'] });
const golos = Golos_Text({ subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 'Technests Signals - Professional Trading Automation',
  description: 'Advanced trading signals and precision automation for professional traders. Maximize your profits with our AI-powered trading platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={golos.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          {/* <ChatPopup /> */}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}