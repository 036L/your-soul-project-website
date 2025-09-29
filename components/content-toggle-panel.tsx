"use client"

import { useContent } from "@/hooks/use-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Globe, Layout, Bell, TrendingUp } from "lucide-react"

const getTypeIcon = (type: string) => {
  switch (type) {
    case "page":
      return <Globe className="h-4 w-4" />
    case "section":
      return <Layout className="h-4 w-4" />
    case "announcement":
      return <Bell className="h-4 w-4" />
    case "progress":
      return <TrendingUp className="h-4 w-4" />
    default:
      return <Globe className="h-4 w-4" />
  }
}

const getTypeName = (type: string) => {
  switch (type) {
    case "page":
      return "ページ"
    case "section":
      return "セクション"
    case "announcement":
      return "お知らせ"
    case "progress":
      return "進捗"
    default:
      return type
  }
}

const getTypeColor = (type: string) => {
  switch (type) {
    case "page":
      return "bg-blue-100 text-blue-800"
    case "section":
      return "bg-green-100 text-green-800"
    case "announcement":
      return "bg-yellow-100 text-yellow-800"
    case "progress":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export function ContentTogglePanel() {
  const { content, toggleVisibility, loading } = useContent()

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <p className="text-sage-600">読み込み中...</p>
        </CardContent>
      </Card>
    )
  }

  const groupedContent = content.reduce(
    (acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = []
      }
      acc[item.type].push(item)
      return acc
    },
    {} as Record<string, typeof content>,
  )

  return (
    <div className="space-y-6">
      {Object.entries(groupedContent).map(([type, items]) => (
        <Card key={type}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {getTypeIcon(type)}
              <span>{getTypeName(type)}管理</span>
            </CardTitle>
            <CardDescription>{getTypeName(type)}の表示・非表示を切り替えます</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-sage-200 rounded-lg hover:bg-sage-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {item.isVisible ? (
                        <Eye className="h-4 w-4 text-green-600" />
                      ) : (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="font-medium text-sage-800">{item.name}</span>
                    </div>
                    <Badge className={getTypeColor(item.type)}>{getTypeName(item.type)}</Badge>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-xs text-sage-500">
                      更新: {new Date(item.updatedAt).toLocaleDateString("ja-JP")}
                    </span>
                    <Switch checked={item.isVisible} onCheckedChange={() => toggleVisibility(item.id)} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
