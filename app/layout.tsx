import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OTConekt',
  description: 'Ghanas No.1 Occupational TeleHealth Platform',
  generator: 'OTConekt',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.png" type="image/png" />
      <meta property="og:image" content="/ot.png" />
      <meta name="twitter:image" content="/ot.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
