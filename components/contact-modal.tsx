"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react"

interface ContactModalProps {
  children: React.ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted")
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    console.log("[v0] Contact form submission completed")

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: "",
      })
      console.log("[v0] Contact form reset")
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        console.log("[v0] Contact modal open state changed:", open)
        setIsOpen(open)
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-background border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-foreground">
            <Mail className="h-5 w-5 text-primary" />
            <span>お問い合わせ</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your Soul Projectに関するご質問やご相談がございましたら、 お気軽にお問い合わせください。
          </DialogDescription>
        </DialogHeader>

        {isSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">お問い合わせありがとうございます</h3>
              <p className="text-muted-foreground">内容を確認の上、3営業日以内にご返信いたします。</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  お名前 <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="山田 太郎"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  メールアドレス <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                  className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category" className="text-foreground">
                お問い合わせ種別
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                <SelectTrigger className="bg-input border-border text-foreground">
                  <SelectValue placeholder="種別を選択してください" />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="general">一般的なお問い合わせ</SelectItem>
                  <SelectItem value="support">支援について</SelectItem>
                  <SelectItem value="membership">メンバー参加について</SelectItem>
                  <SelectItem value="media">メディア・取材について</SelectItem>
                  <SelectItem value="partnership">パートナーシップについて</SelectItem>
                  <SelectItem value="other">その他</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-foreground">
                件名 <span className="text-destructive">*</span>
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="お問い合わせの件名を入力してください"
                value={formData.subject}
                onChange={(e) => handleInputChange("subject", e.target.value)}
                required
                className="bg-input border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                お問い合わせ内容 <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="message"
                placeholder="お問い合わせ内容を詳しくお書きください"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                required
                rows={5}
                className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
              />
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-start space-x-2">
                <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="text-xs text-muted-foreground">
                  <p className="mb-1">
                    お預かりした個人情報は、お問い合わせへの回答のみに使用し、 適切に管理いたします。
                  </p>
                  <p>回答には3営業日程度お時間をいただく場合がございます。</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1 border-border text-foreground hover:bg-muted"
              >
                キャンセル
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email || !formData.subject || !formData.message}
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2" />
                    送信中...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    送信する
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
