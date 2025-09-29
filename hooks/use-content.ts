"use client"

import { useState, useEffect } from "react"
import { ContentManager, type ContentItem } from "@/lib/content-manager"

export function useContent() {
  const [content, setContent] = useState<ContentItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const contentManager = ContentManager.getInstance()

    // Get initial content
    setContent(contentManager.getAllContent())
    setLoading(false)

    // Subscribe to changes
    const unsubscribe = contentManager.subscribe((newContent) => {
      setContent(newContent)
    })

    return unsubscribe
  }, [])

  const toggleVisibility = (id: string) => {
    const contentManager = ContentManager.getInstance()
    return contentManager.toggleVisibility(id)
  }

  const updateContent = (id: string, data: any) => {
    const contentManager = ContentManager.getInstance()
    return contentManager.updateContent(id, data)
  }

  const addContent = (content: Omit<ContentItem, "id" | "updatedAt">) => {
    const contentManager = ContentManager.getInstance()
    return contentManager.addContent(content)
  }

  const deleteContent = (id: string) => {
    const contentManager = ContentManager.getInstance()
    return contentManager.deleteContent(id)
  }

  const isPageVisible = (pageId: string) => {
    const contentManager = ContentManager.getInstance()
    return contentManager.isPageVisible(pageId)
  }

  const isSectionVisible = (sectionId: string) => {
    const contentManager = ContentManager.getInstance()
    return contentManager.isSectionVisible(sectionId)
  }

  const getProgressData = () => {
    const contentManager = ContentManager.getInstance()
    return contentManager.getProgressData()
  }

  const getVisibleAnnouncements = () => {
    const contentManager = ContentManager.getInstance()
    return contentManager.getVisibleAnnouncements()
  }

  return {
    content,
    loading,
    toggleVisibility,
    updateContent,
    addContent,
    deleteContent,
    isPageVisible,
    isSectionVisible,
    getProgressData,
    getVisibleAnnouncements,
  }
}
