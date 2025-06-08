import type { Metadata } from 'next'
import { ThemeProvider } from "next-themes";

import './globals.css'

export const metadata: Metadata = {
  title: 'OpenLabs',
  description: 'Created Bashar Khan',
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
