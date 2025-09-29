"use client"

import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Leaf, LogOut, Home } from "lucide-react"
import Link from "next/link"

export function AdminHeader() {
  const { user, logout } = useAuth()

  return (
    <header className="bg-white border-b border-sage-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-6 w-6 text-sage-600" />
              <span className="font-bold text-sage-800">Your Soul Project</span>
              <span className="text-sm text-sage-500 bg-sage-100 px-2 py-1 rounded">管理画面</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-sage-600 hover:text-sage-800">
                <Home className="h-4 w-4 mr-2" />
                サイトを見る
              </Button>
            </Link>

            <div className="flex items-center space-x-2 text-sm text-sage-600">
              <span>ようこそ、{user?.name}さん</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={logout}
              className="border-sage-300 text-sage-600 hover:bg-sage-50 bg-transparent"
            >
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
