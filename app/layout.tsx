import './globals.css';
import type { Metadata } from 'next';
import { Golos_Text } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/sonner';
import { ServiceWorkerRegister } from '@/components/service-worker';
import { InstallToast } from '@/components/install-prompt';

const golos = Golos_Text({ subsets: ['cyrillic'] });



export const metadata: Metadata = {
  title: "LiveFolio - Professional Portfolio in Minutes",
  description:
    "Turn your experience into a professional portfolio website — without hiring a designer or paying for hosting.",
  generator: "Next.js",
  applicationName: "LiveFolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "portfolio",
    "CV",
    "resume",
    "professional website",
    "ATS scoring",
    "cover letter generator",
  ],
  authors: [{ name: "LiveFolio" }],
  creator: "LiveFolio",
  publisher: "LiveFolio",
  formatDetection: {
    email: true,
    telephone: true,
  },
  metadataBase: new URL("https://livefolio.com"),
  openGraph: {
    title: "LiveFolio - Professional Portfolio in Minutes",
    description:
      "Turn your experience into a professional portfolio website — without hiring a designer or paying for hosting.",
    url: "https://livefolio.com",
    type: "website",
    images: [
      {
        url: "https://livefolio.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiveFolio - Professional Portfolio in Minutes",
    description:
      "Turn your experience into a professional portfolio website — without hiring a designer or paying for hosting.",
    images: ["https://livefolio.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
        />
      </head>
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
          <Toaster />
        </ThemeProvider>
         <ServiceWorkerRegister />
         <InstallToast />
      </body>
    </html>
  );
}