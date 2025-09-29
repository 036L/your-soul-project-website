"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ContactModal } from "@/components/contact-modal"
import { useContent } from "@/hooks/use-content"
import { Menu, X, Leaf } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { isPageVisible } = useContent()

  const navItems = [
    { href: "/", label: "ホーム", pageId: "home" },
    { href: "/vision", label: "ビジョン・ストーリー", pageId: "vision" },
    { href: "/support", label: "サポート", pageId: "support" },
    { href: "/content", label: "コンテンツ", pageId: "content" },
    { href: "/logo-story", label: "ロゴストーリー", pageId: "logo-story" },
  ].filter((item) => item.pageId === "home" || isPageVisible(item.pageId))

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl text-foreground">Your Soul Project</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <ContactModal>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                お問い合わせ
              </Button>
            </ContactModal>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <ContactModal>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    お問い合わせ
                  </Button>
                </ContactModal>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
