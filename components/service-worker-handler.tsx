"use client"

if (typeof window !== "undefined") {
  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const reason = event.reason
    const message = reason?.message || ""
    const name = reason?.name || ""

    // Service Worker関連のエラーをすべてキャッチ
    if (
      message.includes("ServiceWorker") ||
      message.includes("service worker") ||
      message.includes("__v0_sw") ||
      message.includes("sw.js") ||
      name === "NotSupportedError" ||
      name === "SecurityError" ||
      (reason instanceof Error && reason.toString().includes("ServiceWorker"))
    ) {
      // エラーを抑制（コンソールログも出力しない）
      event.preventDefault()
      return
    }
  }

  const handleError = (event: ErrorEvent) => {
    const message = event.message || ""

    if (message.includes("ServiceWorker") || message.includes("service worker") || message.includes("__v0_sw")) {
      event.preventDefault()
      return
    }
  }

  // スクリプト読み込み時に即座にリスナーを登録
  window.addEventListener("unhandledrejection", handleUnhandledRejection)
  window.addEventListener("error", handleError)
}

export default function ServiceWorkerHandler() {
  // コンポーネントは何もレンダリングしない
  return null
}
