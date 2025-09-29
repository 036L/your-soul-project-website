export interface ContentItem {
  id: string
  type: "page" | "section" | "announcement" | "progress"
  name: string
  isVisible: boolean
  data?: any
  updatedAt: string
}

export interface ProgressData {
  current: number
  target: number
  label: string
}

export interface AnnouncementData {
  title: string
  content: string
  date: string
  priority: "high" | "medium" | "low"
}

export class ContentManager {
  private static instance: ContentManager
  private content: ContentItem[] = []
  private listeners: ((content: ContentItem[]) => void)[] = []

  static getInstance(): ContentManager {
    if (!ContentManager.instance) {
      ContentManager.instance = new ContentManager()
    }
    return ContentManager.instance
  }

  constructor() {
    this.loadContent()
    this.initializeDefaultContent()
  }

  private loadContent() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("content_settings")
      if (stored) {
        try {
          this.content = JSON.parse(stored)
        } catch (error) {
          console.error("Failed to parse content settings:", error)
          this.initializeDefaultContent()
        }
      } else {
        this.initializeDefaultContent()
      }
    }
  }

  private initializeDefaultContent() {
    this.content = [
      {
        id: "page-vision",
        type: "page",
        name: "ビジョン・ストーリーページ",
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "page-support",
        type: "page",
        name: "サポートページ",
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "page-content",
        type: "page",
        name: "コンテンツページ",
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "page-members",
        type: "page",
        name: "メンバーページ",
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "section-hero",
        type: "section",
        name: "ヒーローセクション",
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "section-progress",
        type: "section",
        name: "進捗ゲージ",
        isVisible: true,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "progress-data",
        type: "progress",
        name: "進捗データ",
        isVisible: true,
        data: {
          current: 2500000,
          target: 10000000,
          label: "目標金額達成まで",
        } as ProgressData,
        updatedAt: new Date().toISOString(),
      },
      {
        id: "announcement-1",
        type: "announcement",
        name: "お知らせ1",
        isVisible: true,
        data: {
          title: "新しい動画をアップロードしました",
          content: "エコビレッジの日常を撮影した動画を公開しました。",
          date: "2024-01-15",
          priority: "high",
        } as AnnouncementData,
        updatedAt: new Date().toISOString(),
      },
    ]
    this.saveContent()
  }

  private saveContent() {
    if (typeof window !== "undefined") {
      localStorage.setItem("content_settings", JSON.stringify(this.content))
    }
    this.notifyListeners()
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => listener([...this.content]))
  }

  subscribe(listener: (content: ContentItem[]) => void) {
    this.listeners.push(listener)
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener)
    }
  }

  getAllContent(): ContentItem[] {
    return [...this.content]
  }

  getContentById(id: string): ContentItem | undefined {
    return this.content.find((item) => item.id === id)
  }

  getContentByType(type: ContentItem["type"]): ContentItem[] {
    return this.content.filter((item) => item.type === type)
  }

  getVisibleContent(): ContentItem[] {
    return this.content.filter((item) => item.isVisible)
  }

  toggleVisibility(id: string): boolean {
    const item = this.content.find((item) => item.id === id)
    if (item) {
      item.isVisible = !item.isVisible
      item.updatedAt = new Date().toISOString()
      this.saveContent()
      return true
    }
    return false
  }

  updateContent(id: string, data: any): boolean {
    const item = this.content.find((item) => item.id === id)
    if (item) {
      item.data = { ...item.data, ...data }
      item.updatedAt = new Date().toISOString()
      this.saveContent()
      return true
    }
    return false
  }

  addContent(content: Omit<ContentItem, "id" | "updatedAt">): string {
    const id = `${content.type}-${Date.now()}`
    const newItem: ContentItem = {
      ...content,
      id,
      updatedAt: new Date().toISOString(),
    }
    this.content.push(newItem)
    this.saveContent()
    return id
  }

  deleteContent(id: string): boolean {
    const index = this.content.findIndex((item) => item.id === id)
    if (index !== -1) {
      this.content.splice(index, 1)
      this.saveContent()
      return true
    }
    return false
  }

  // Helper methods for specific content types
  isPageVisible(pageId: string): boolean {
    const page = this.getContentById(`page-${pageId}`)
    return page?.isVisible ?? true
  }

  isSectionVisible(sectionId: string): boolean {
    const section = this.getContentById(`section-${sectionId}`)
    return section?.isVisible ?? true
  }

  getProgressData(): ProgressData {
    const progress = this.getContentById("progress-data")
    return progress?.data ?? { current: 0, target: 10000000, label: "目標金額達成まで" }
  }

  getVisibleAnnouncements(): AnnouncementData[] {
    return this.getContentByType("announcement")
      .filter((item) => item.isVisible)
      .map((item) => item.data)
      .filter(Boolean)
  }
}
