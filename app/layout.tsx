import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import "./globals.css"
import ServiceWorkerHandler from "../components/service-worker-handler"

export const metadata: Metadata = {
  title: "Your Soul Project - エコビレッジで共生する未来へ",
  description: '現代社会の「依存」から脱却し、一人ひとりが輝く"共生型"コミュニティを創造するエコビレッジプロジェクト',
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        <ServiceWorkerHandler />
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
