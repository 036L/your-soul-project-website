"use client"

import { useEffect } from "react"

export default function ServiceWorkerHandler() {
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        if (
          event.reason?.message?.includes("ServiceWorker") ||
          event.reason?.message?.includes("__v0_sw.js") ||
          event.reason?.name === "NotSupportedError"
        ) {
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
