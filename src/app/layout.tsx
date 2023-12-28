import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'LeoShumacher - React',
  description: 'Portifólio feito com react e tailwind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="h-screen w-screen">
        <Header />
        {children}
      </body>
    </html>
  )
}
