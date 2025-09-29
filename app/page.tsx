import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Heart, Users, Leaf, Play, Gift, ArrowRight, Target, Calendar } from "lucide-react"
import Link from "next/link"
import { useContent } from "@/hooks/use-content"

export default function HomePage() {
  const { isSectionVisible, getProgressData, getVisibleAnnouncements } = useContent()
  const progressData = getProgressData()
  const announcements = getVisibleAnnouncements()
  const progressPercentage = Math.round((progressData.current / progressData.target) * 100)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      {isSectionVisible("hero") && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                    エコビレッジプロジェクト
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                    野草のように
                    <span className="text-primary block">強く、しなやかに</span>
                    生きる未来へ
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    現代社会の「依存」から脱却し、一人ひとりが輝く"共生型"コミュニティを創造する。 Your Soul
                    Projectで、本当の豊かさを見つけませんか？
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Play className="mr-2 h-5 w-5" />
                    動画で応援する
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    支援する
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center">
                  <img
                    src="/peaceful-eco-village-with-morning-dew-on-wild-gras.jpg"
                    alt="朝露に濡れた野草とエコビレッジの風景"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-lg border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/20 rounded-full p-2">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">120+</p>
                      <p className="text-sm text-muted-foreground">支援者</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Progress Section */}
      {isSectionVisible("progress") && (
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">プロジェクトの進捗</h2>
                <p className="text-muted-foreground">皆様のご支援により、着実に前進しています</p>
              </div>

              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>目標金額: ¥{progressData.target.toLocaleString()}</span>
                    </CardTitle>
                    <Badge variant="secondary">{progressPercentage}%達成</Badge>
                  </div>
                  <CardDescription>{progressData.label}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={progressPercentage} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>現在: ¥{progressData.current.toLocaleString()}</span>
                    <span>残り: ¥{(progressData.target - progressData.current).toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">なぜYour Soul Project？</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              私たちが目指すのは、単なる田舎暮らしではありません。真の自立と共生を実現するコミュニティです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>野草の哲学</CardTitle>
                <CardDescription>
                  どんな環境でも根を張り、美しく咲く野草のように、
                  一人ひとりが自分らしく輝けるコミュニティを目指します。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle>母性の力</CardTitle>
                <CardDescription>
                  包み込むような温かさと、生命を育む力。 母性的な愛情でお互いを支え合う関係性を大切にします。
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-background border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>依存からの脱却</CardTitle>
                <CardDescription>
                  現代社会の様々な依存から解放され、 真の自立と相互扶助による豊かな暮らしを実現します。
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">最新情報</h2>
              <p className="text-muted-foreground">プロジェクトの最新の動きをお届けします</p>
            </div>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              すべて見る
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.slice(0, 3).map((announcement, index) => (
              <Card key={index} className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(announcement.date).toLocaleDateString("ja-JP")}</span>
                    {announcement.priority === "high" && (
                      <Badge variant="destructive" className="text-xs">
                        重要
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg">{announcement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{announcement.content}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    詳細を読む
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}

            {announcements.length === 0 && (
              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>2024年3月15日</span>
                  </div>
                  <CardTitle className="text-lg">土地の下見を実施しました</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    候補地の一つである山梨県の土地を実際に見学し、 水源や日当たり、アクセスなどを詳しく調査しました。
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary hover:text-primary-foreground hover:bg-primary"
                  >
                    詳細を読む
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground">一緒に未来を創りませんか？</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Your Soul Projectは、あなたの参加を待っています。 小さな一歩が、大きな変化の始まりです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/support">
                  <Gift className="mr-2 h-5 w-5" />
                  今すぐ支援する
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/vision">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  詳しく知る
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
