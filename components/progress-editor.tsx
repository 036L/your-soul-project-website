"use client"

import { useState } from "react"
import { useContent } from "@/hooks/use-content"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { TrendingUp, Save } from "lucide-react"

export function ProgressEditor() {
  const { getProgressData, updateContent } = useContent()
  const progressData = getProgressData()

  const [current, setCurrent] = useState(progressData.current.toString())
  const [target, setTarget] = useState(progressData.target.toString())
  const [label, setLabel] = useState(progressData.label)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState("")

  const handleSave = async () => {
    setSaving(true)
    setMessage("")

    try {
      const currentNum = Number.parseInt(current.replace(/,/g, ""))
      const targetNum = Number.parseInt(target.replace(/,/g, ""))

      if (isNaN(currentNum) || isNaN(targetNum)) {
        setMessage("数値を正しく入力してください")
        return
      }

      if (currentNum < 0 || targetNum <= 0) {
        setMessage("正の数値を入力してください")
        return
      }

      if (currentNum > targetNum) {
        setMessage("現在の値は目標値以下にしてください")
        return
      }

      const success = updateContent("progress-data", {
        current: currentNum,
        target: targetNum,
        label: label.trim(),
      })

      if (success) {
        setMessage("進捗データを更新しました")
      } else {
        setMessage("更新に失敗しました")
      }
    } catch (error) {
      setMessage("エラーが発生しました")
    } finally {
      setSaving(false)
    }
  }

  const formatNumber = (value: string) => {
    const num = Number.parseInt(value.replace(/,/g, ""))
    return isNaN(num) ? value : num.toLocaleString()
  }

  const percentage = Math.round((progressData.current / progressData.target) * 100)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>進捗データ編集</span>
        </CardTitle>
        <CardDescription>ホームページに表示される進捗ゲージの数値を編集します</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Progress Display */}
        <div className="p-4 bg-sage-50 rounded-lg">
          <h4 className="font-medium text-sage-800 mb-2">現在の進捗</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-sage-600">
              <span>{progressData.label}</span>
              <span>{percentage}%</span>
            </div>
            <div className="w-full bg-sage-200 rounded-full h-2">
              <div
                className="bg-sage-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(percentage, 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-sm font-medium text-sage-800">
              <span>¥{progressData.current.toLocaleString()}</span>
              <span>¥{progressData.target.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Edit Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="current">現在の金額</Label>
            <Input
              id="current"
              value={current}
              onChange={(e) => setCurrent(e.target.value)}
              onBlur={(e) => setCurrent(formatNumber(e.target.value))}
              placeholder="2,500,000"
              className="border-sage-200 focus:border-sage-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="target">目標金額</Label>
            <Input
              id="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              onBlur={(e) => setTarget(formatNumber(e.target.value))}
              placeholder="10,000,000"
              className="border-sage-200 focus:border-sage-400"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="label">ラベル</Label>
          <Input
            id="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="目標金額達成まで"
            className="border-sage-200 focus:border-sage-400"
          />
        </div>

        {message && (
          <Alert>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}

        <Button onClick={handleSave} disabled={saving} className="bg-sage-600 hover:bg-sage-700">
          <Save className="h-4 w-4 mr-2" />
          {saving ? "保存中..." : "変更を保存"}
        </Button>
      </CardContent>
    </Card>
  )
}
