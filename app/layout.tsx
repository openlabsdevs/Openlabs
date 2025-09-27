import type { Metadata } from 'next'
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

import './globals.css'
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'OpenLabs',
  description: 'Join OpenLabs: the premier society for open-source contributors',
  icons: {
    icon: './favicon.ico',
  },
  openGraph: {
    images: './og.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
