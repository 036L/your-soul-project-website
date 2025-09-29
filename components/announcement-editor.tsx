"use client"

import { useState } from "react"
import { useContent } from "@/hooks/use-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Bell, Plus, Edit, Trash2, Save, X } from "lucide-react"

export function AnnouncementEditor() {
  const { content, addContent, updateContent, deleteContent, toggleVisibility } = useContent()
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    date: new Date().toISOString().split("T")[0],
    priority: "medium" as "high" | "medium" | "low",
  })

  const announcements = content.filter((item) => item.type === "announcement")

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      date: new Date().toISOString().split("T")[0],
      priority: "medium",
    })
    setIsAdding(false)
    setEditingId(null)
  }

  const handleSave = () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      return
    }

    if (editingId) {
      updateContent(editingId, formData)
    } else {
      addContent({
        type: "announcement",
        name: formData.title,
        isVisible: true,
        data: formData,
      })
    }

    resetForm()
  }

  const handleEdit = (item: any) => {
    setFormData(item.data)
    setEditingId(item.id)
    setIsAdding(true)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getPriorityLabel = (priority: string) => {
    switch (priority) {
      case "high":
        return "重要"
      case "medium":
        return "通常"
      case "low":
        return "低"
      default:
        return priority
    }
  }

  return (
    <div className="space-y-6">
      {/* Add/Edit Form */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="h-5 w-5" />
                <span>{editingId ? "お知らせを編集" : "お知らせを追加"}</span>
              </CardTitle>
              <CardDescription>ホームページに表示されるお知らせを管理します</CardDescription>
            </div>
            {!isAdding && (
              <Button onClick={() => setIsAdding(true)} className="bg-sage-600 hover:bg-sage-700">
                <Plus className="h-4 w-4 mr-2" />
                新規追加
              </Button>
            )}
          </div>
        </CardHeader>

        {isAdding && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">タイトル</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="お知らせのタイトル"
                  className="border-sage-200 focus:border-sage-400"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">日付</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="border-sage-200 focus:border-sage-400"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">内容</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="お知らせの内容を入力してください"
                rows={3}
                className="border-sage-200 focus:border-sage-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="priority">優先度</Label>
              <Select
                value={formData.priority}
                onValueChange={(value: "high" | "medium" | "low") => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger className="border-sage-200 focus:border-sage-400">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">重要</SelectItem>
                  <SelectItem value="medium">通常</SelectItem>
                  <SelectItem value="low">低</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex space-x-2">
              <Button onClick={handleSave} className="bg-sage-600 hover:bg-sage-700">
                <Save className="h-4 w-4 mr-2" />
                {editingId ? "更新" : "追加"}
              </Button>
              <Button variant="outline" onClick={resetForm}>
                <X className="h-4 w-4 mr-2" />
                キャンセル
              </Button>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Announcements List */}
      <Card>
        <CardHeader>
          <CardTitle>お知らせ一覧</CardTitle>
          <CardDescription>現在のお知らせ一覧と表示設定</CardDescription>
        </CardHeader>
        <CardContent>
          {announcements.length === 0 ? (
            <p className="text-sage-600 text-center py-8">お知らせがありません</p>
          ) : (
            <div className="space-y-4">
              {announcements.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-4 border border-sage-200 rounded-lg hover:bg-sage-50 transition-colors"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-medium text-sage-800">{item.data.title}</h4>
                      <Badge className={getPriorityColor(item.data.priority)}>
                        {getPriorityLabel(item.data.priority)}
                      </Badge>
                      {!item.isVisible && <Badge variant="secondary">非表示</Badge>}
                    </div>
                    <p className="text-sm text-sage-600">{item.data.content}</p>
                    <p className="text-xs text-sage-500">{new Date(item.data.date).toLocaleDateString("ja-JP")}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch checked={item.isVisible} onCheckedChange={() => toggleVisibility(item.id)} />
                    <Button variant="ghost" size="sm" onClick={() => handleEdit(item)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteContent(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
