import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STK Sport หนองสองห้อง — รวมแบบเสื้อและสินค้าทั้งหมด',
  description: 'STK Sport หนองสองห้อง — ระบบจัดการแบบเสื้อ',
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
