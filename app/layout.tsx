import './globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider"
import {createClient} from '@supabase/supabase-js'
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'LeBombusP',
  description: 'My personal website'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={inter.className}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      {children}
    </ThemeProvider>
    </body>
    </html>
  )
}
