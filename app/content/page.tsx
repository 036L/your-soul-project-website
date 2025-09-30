import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Music, FileText, Calendar, ExternalLink, Heart, Share2, Volume2 } from "lucide-react"
import { ConditionalPage } from "@/components/conditional-page"

export default function ContentPage() {
  return (
    <ConditionalPage pageId="content">
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                コンテンツ・メディア
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                音楽と映像で伝える
                <span className="text-primary block">プロジェクトの想い</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your Soul Projectの理念や日々の活動を、音楽や動画を通してお届けします。
                自然の音、メンバーの想い、プロジェクトの進捗をぜひご覧ください。
              </p>
            </div>
          </div>
        </section>

        {/* Content Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="music" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-12">
                  <TabsTrigger value="music" className="flex items-center space-x-2">
                    <Music className="h-4 w-4" />
                    <span>音楽</span>
                  </TabsTrigger>
                  <TabsTrigger value="video" className="flex items-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>動画</span>
                  </TabsTrigger>
                  <TabsTrigger value="blog" className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>ブログ</span>
                  </TabsTrigger>
                </TabsList>

                {/* Music Content */}
                <TabsContent value="music" className="space-y-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">自然音楽とメッセージ</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      自然の音を取り入れた音楽や、プロジェクトへの想いを込めた楽曲をSoundCloudで配信しています。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                          <Volume2 className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle className="flex items-center justify-between">
                          <span>野草の歌</span>
                          <Badge variant="secondary">新着</Badge>
                        </CardTitle>
                        <CardDescription>自然の中で録音した環境音と共に</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          朝露に濡れた野草をイメージした楽曲。 鳥のさえずりや風の音と共に、
                          プロジェクトへの想いを歌にしました。
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Play className="mr-2 h-4 w-4" />
                            再生
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="mr-2 h-4 w-4" />
                            シェア
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                          <Volume2 className="h-12 w-12 text-secondary" />
                        </div>
                        <CardTitle>母なる大地</CardTitle>
                        <CardDescription>コミュニティの絆をテーマに</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          母性的な愛情と支え合いの精神を表現した楽曲。 メンバーの声も収録し、
                          温かいコミュニティの雰囲気を音楽で表現しています。
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Play className="mr-2 h-4 w-4" />
                            再生
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="mr-2 h-4 w-4" />
                            シェア
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                          <Volume2 className="h-12 w-12 text-accent" />
                        </div>
                        <CardTitle>自立への道</CardTitle>
                        <CardDescription>依存からの脱却をテーマに</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          現代社会の依存から解放され、 真の自立を目指す想いを込めた楽曲。
                          力強いメロディーと希望に満ちた歌詞が特徴です。
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Play className="mr-2 h-4 w-4" />
                            再生
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="mr-2 h-4 w-4" />
                            シェア
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                          <Volume2 className="h-12 w-12 text-primary" />
                        </div>
                        <CardTitle>未来への種</CardTitle>
                        <CardDescription>次世代への想いを込めて</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          子どもたちの未来への願いを込めた楽曲。 持続可能な社会への想いと、
                          希望に満ちた未来への期待を歌っています。
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
                            <Play className="mr-2 h-4 w-4" />
                            再生
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="mr-2 h-4 w-4" />
                            シェア
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      SoundCloudで全ての楽曲を聴く
                    </Button>
                  </div>
                </TabsContent>

                {/* Video Content */}
                <TabsContent value="video" className="space-y-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">プロジェクト動画</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      建設現場の様子、メンバーインタビュー、エコビレッジでの暮らしについて動画で配信しています。
                    </p>
                  </div>

                  <div className="space-y-8">
                    {/* Featured Video */}
                    <Card className="bg-background border-border">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div>
                            <CardTitle className="text-xl">Your Soul Project 紹介動画</CardTitle>
                            <CardDescription>プロジェクトの全体像をわかりやすく解説</CardDescription>
                          </div>
                          <Badge className="bg-red-500/20 text-red-500 border-red-500/30">注目</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center mb-4">
                          <Play className="h-16 w-16 text-red-500" />
                        </div>
                        <p className="text-muted-foreground mb-4">
                          Your Soul Projectの理念、目標、これまでの歩みを15分でまとめた紹介動画です。
                          プロジェクトに興味を持っていただいた方に、まずご覧いただきたい内容です。
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span>15:32</span>
                            <span>•</span>
                            <span>12,450 回視聴</span>
                            <span>•</span>
                            <span>2024年3月10日</span>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                              <Play className="mr-2 h-4 w-4" />
                              視聴
                            </Button>
                            <Button size="sm" variant="outline">
                              <Share2 className="mr-2 h-4 w-4" />
                              シェア
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3">
                            <Play className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-base">土地見学レポート</CardTitle>
                          <CardDescription className="text-sm">候補地の詳細な調査結果</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>8:24</span>
                            <span>3,200 回視聴</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Play className="mr-2 h-3 w-3" />
                            視聴
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center mb-3">
                            <Play className="h-8 w-8 text-secondary" />
                          </div>
                          <CardTitle className="text-base">メンバーインタビュー</CardTitle>
                          <CardDescription className="text-sm">創設メンバーの想いを聞く</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>12:15</span>
                            <span>5,800 回視聴</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Play className="mr-2 h-3 w-3" />
                            視聴
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-3">
                            <Play className="h-8 w-8 text-accent" />
                          </div>
                          <CardTitle className="text-base">パーマカルチャー講座</CardTitle>
                          <CardDescription className="text-sm">持続可能な農業について学ぶ</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>18:42</span>
                            <span>2,100 回視聴</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Play className="mr-2 h-3 w-3" />
                            視聴
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-3">
                            <Play className="h-8 w-8 text-primary" />
                          </div>
                          <CardTitle className="text-base">オンライン説明会</CardTitle>
                          <CardDescription className="text-sm">プロジェクトの詳細説明</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>45:30</span>
                            <span>8,900 回視聴</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Play className="mr-2 h-3 w-3" />
                            視聴
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="aspect-video bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center mb-3">
                            <Play className="h-8 w-8 text-secondary" />
                          </div>
                          <CardTitle className="text-base">建設進捗レポート</CardTitle>
                          <CardDescription className="text-sm">工事の様子をタイムラプスで</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>6:18</span>
                            <span>4,500 回視聴</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Play className="mr-2 h-3 w-3" />
                            視聴
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center mb-3">
                            <Play className="h-8 w-8 text-accent" />
                          </div>
                          <CardTitle className="text-base">自然音コレクション</CardTitle>
                          <CardDescription className="text-sm">現地で録音した環境音</CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            <span>22:00</span>
                            <span>1,800 回視聴</span>
                          </div>
                          <Button size="sm" variant="outline" className="w-full bg-transparent">
                            <Play className="mr-2 h-3 w-3" />
                            視聴
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      YouTubeチャンネルを見る
                    </Button>
                  </div>
                </TabsContent>

                {/* Blog Content */}
                <TabsContent value="blog" className="space-y-12">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-foreground mb-4">プロジェクトブログ</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      日々の活動や想い、学びをnoteで発信しています。プロジェクトの裏側や詳しい情報をお届けします。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024年3月15日</span>
                        </div>
                        <CardTitle className="text-lg">なぜ「野草」なのか？</CardTitle>
                        <CardDescription>プロジェクト名に込めた想い</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Your Soul Projectの核となる「野草」の哲学について、
                          創設者の体験談を交えながら詳しく解説します...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Heart className="h-3 w-3" />
                            <span>124</span>
                            <span>•</span>
                            <span>5分で読める</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            読む
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024年3月12日</span>
                        </div>
                        <CardTitle className="text-lg">土地探しの苦労と発見</CardTitle>
                        <CardDescription>理想の場所を求めて</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          エコビレッジに適した土地を見つけるまでの道のり。
                          20箇所以上を見学した中で学んだことをシェアします...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Heart className="h-3 w-3" />
                            <span>89</span>
                            <span>•</span>
                            <span>8分で読める</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            読む
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024年3月8日</span>
                        </div>
                        <CardTitle className="text-lg">パーマカルチャーとの出会い</CardTitle>
                        <CardDescription>持続可能な農業への道</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          パーマカルチャーの考え方がプロジェクトに与えた影響と、
                          実際の農業計画について詳しく説明します...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Heart className="h-3 w-3" />
                            <span>156</span>
                            <span>•</span>
                            <span>12分で読める</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            読む
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024年3月5日</span>
                        </div>
                        <CardTitle className="text-lg">コミュニティ設計の考え方</CardTitle>
                        <CardDescription>人と人とのつながりを大切に</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          エコビレッジにおけるコミュニティ設計の重要性と、 私たちが目指す理想的な関係性について...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Heart className="h-3 w-3" />
                            <span>203</span>
                            <span>•</span>
                            <span>10分で読める</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            読む
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024年3月1日</span>
                        </div>
                        <CardTitle className="text-lg">資金調達の現実と課題</CardTitle>
                        <CardDescription>透明性のある運営を目指して</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          クラウドファンディングや寄付による資金調達の実情と、 支援者の皆様への責任について...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Heart className="h-3 w-3" />
                            <span>167</span>
                            <span>•</span>
                            <span>7分で読める</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            読む
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-4 w-4" />
                          <span>2024年2月28日</span>
                        </div>
                        <CardTitle className="text-lg">子どもたちの未来を考える</CardTitle>
                        <CardDescription>次世代への責任</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          エコビレッジでの子育て環境と教育について。 自然の中で育つ子どもたちの可能性を探ります...
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <Heart className="h-3 w-3" />
                            <span>245</span>
                            <span>•</span>
                            <span>9分で読める</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <ExternalLink className="mr-2 h-3 w-3" />
                            読む
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="text-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      noteで全ての記事を読む
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">最新情報をお届け</h2>
                <p className="text-muted-foreground">新しいコンテンツやプロジェクトの進捗を メールでお知らせします。</p>
              </div>

              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      placeholder="メールアドレスを入力"
                      className="flex-1 px-4 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">購読する</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    いつでも配信停止できます。プライバシーポリシーに従って情報を管理します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ConditionalPage>
  )
}
