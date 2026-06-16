import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STK SPORT DESIGN — รับออกแบบและผลิตเสื้อผ้าพิมพ์ลาย',
  description: 'STK SPORT DESIGN — รับออกแบบและผลิตเสื้อผ้าพิมพ์ลาย',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
