"use client"

import type React from "react"

import { useContent } from "@/hooks/use-content"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ConditionalPageProps {
  pageId: string
  children: React.ReactNode
  redirectTo?: string
}

export function ConditionalPage({ pageId, children, redirectTo = "/" }: ConditionalPageProps) {
  const { isPageVisible, loading } = useContent()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isPageVisible(pageId)) {
      router.push(redirectTo)
    }
  }, [isPageVisible, pageId, loading, router, redirectTo])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">読み込み中...</p>
        </div>
      </div>
    )
  }

  if (!isPageVisible(pageId)) {
    return null
  }

  return <>{children}</>
}
