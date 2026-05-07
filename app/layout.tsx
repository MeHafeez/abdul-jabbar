import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdul Jabbar Shaik | Senior Accountant & Finance Professional',
  description: 'Senior Accountant with 14+ years of experience in financial accounting, GST compliance, TDS management, and financial statement preparation. Expertise in Tally Prime, ERP systems, and comprehensive bookkeeping. Available for international opportunities in USA and Gulf countries.',
  keywords: ['Senior Accountant', 'Chartered Accountant', 'GST', 'TDS', 'Financial Statements', 'Tally Prime', 'Bookkeeping', 'Abdul Jabbar Shaik', 'Finance Professional', 'International Accountant', 'UAE Accountant', 'USA Accountant'],
  authors: [{ name: 'Abdul Jabbar Shaik' }],
  creator: 'Abdul Jabbar Shaik',
  openGraph: {
    title: 'Abdul Jabbar Shaik | Senior Accountant & Finance Professional',
    description: 'Senior Accountant with 14+ years of experience in financial accounting, GST compliance, and TDS management. Seeking international opportunities.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Jabbar Shaik | Senior Accountant',
    description: 'Senior Accountant with 14+ years of experience in financial accounting and compliance.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1f2e' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
