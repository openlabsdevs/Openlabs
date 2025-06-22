import type { Metadata } from 'next'
import { ThemeProvider } from "next-themes";
import { Footer } from "@/components/footer";

import './globals.css'
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
  title: 'OpenLabs',
  description: 'Open Source Community created Bashar Khan',
  icons: {
    icon: './favicon.ico',
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
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
