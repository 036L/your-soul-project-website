"use client"

import { AdminGuard } from "@/components/admin-guard"
import { AdminHeader } from "@/components/admin-header"
import { ContentTogglePanel } from "@/components/content-toggle-panel"
import { ProgressEditor } from "@/components/progress-editor"
import { AnnouncementEditor } from "@/components/announcement-editor"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <div className="min-h-screen bg-sage-50">
        <AdminHeader />

        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-sage-800 mb-2">管理ダッシュボード</h1>
            <p className="text-sage-600">Your Soul Project ウェブサイトのコンテンツを管理</p>
          </div>

          <Tabs defaultValue="content" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-4">
              <TabsTrigger value="content">コンテンツ管理</TabsTrigger>
              <TabsTrigger value="progress">進捗管理</TabsTrigger>
              <TabsTrigger value="announcements">お知らせ管理</TabsTrigger>
              <TabsTrigger value="analytics">統計情報</TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-6">
              <ContentTogglePanel />
            </TabsContent>

            <TabsContent value="progress" className="space-y-6">
              <ProgressEditor />
            </TabsContent>

            <TabsContent value="announcements" className="space-y-6">
              <AnnouncementEditor />
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="bg-white rounded-lg border border-sage-200 p-6">
                <h3 className="text-lg font-semibold text-sage-800 mb-4">統計情報</h3>
                <p className="text-sage-600">統計情報機能は今後実装予定です。</p>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </AdminGuard>
  )
}
