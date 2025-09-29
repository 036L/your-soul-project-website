import Link from "next/link"
import { Leaf, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">Your Soul Project</span>
            </Link>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              現代社会の「依存」から脱却し、一人ひとりが輝く"共生型"コミュニティを創造するエコビレッジプロジェクト。
              野草のように強く、しなやかに生きる未来を一緒に築きましょう。
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">クイックリンク</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/vision" className="text-muted-foreground hover:text-primary transition-colors">
                  ビジョン・ストーリー
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-primary transition-colors">
                  サポート
                </Link>
              </li>
              <li>
                <Link href="/content" className="text-muted-foreground hover:text-primary transition-colors">
                  コンテンツ
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-muted-foreground hover:text-primary transition-colors">
                  メンバー
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">お問い合わせ</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@yoursoulproject.com</li>
              <li>プライバシーポリシー</li>
              <li>利用規約</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Your Soul Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
