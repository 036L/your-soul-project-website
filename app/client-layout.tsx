"use client"

import { Suspense } from "react"
import React from "react"

function ServiceWorkerHandler() {
  React.useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        if (event.reason?.message?.includes("ServiceWorker") || event.reason?.message?.includes("__v0_sw.js")) {
          console.log("[v0] Service Worker registration blocked by user or browser settings")
          event.preventDefault()
        }
      }

      window.addEventListener("unhandledrejection", handleUnhandledRejection)

      return () => {
        window.removeEventListener("unhandledrejection", handleUnhandledRejection)
      }
    }
  }, [])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className="font-sans antialiased">
      <ServiceWorkerHandler />
      <Suspense fallback={null}>{children}</Suspense>
    </body>
  )
}
