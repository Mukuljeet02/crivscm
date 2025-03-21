import type { Metadata } from 'next'
import '../styles/globals.css' // ✅ Adjust the path if needed

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/crivscm/globals.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
