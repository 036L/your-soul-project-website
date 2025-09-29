import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Play, ShoppingBag, Target, Home, Zap, Sprout, Users, ExternalLink } from "lucide-react"
import { ConditionalPage } from "@/components/conditional-page"

export default function SupportPage() {
  return (
    <ConditionalPage pageId="support">
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                プロジェクトを支援する
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                あなたの想いが
                <span className="text-primary block">未来を創る力になる</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Your Soul Projectの実現には、多くの方々のご支援が必要です。
                寄付、グッズ購入、動画視聴など、様々な方法でプロジェクトを応援していただけます。
              </p>
            </div>
          </div>
        </section>

        {/* Progress Overview */}
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">現在の進捗状況</h2>
                <p className="text-muted-foreground">皆様のご支援により、着実に目標に近づいています</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-background border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">¥3,400,000</CardTitle>
                    <CardDescription>現在の支援総額</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-background border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-secondary/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle className="text-2xl">120+</CardTitle>
                    <CardDescription>支援者数</CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-background border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-accent/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                      <Heart className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">68%</CardTitle>
                    <CardDescription>目標達成率</CardDescription>
                  </CardHeader>
                </Card>
              </div>

              <Card className="bg-background border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="h-5 w-5 text-primary" />
                      <span>目標金額: ¥5,000,000</span>
                    </CardTitle>
                    <Badge variant="secondary">68%達成</Badge>
                  </div>
                  <CardDescription>土地取得・インフラ整備・コミュニティ施設建設のための資金</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={68} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>現在: ¥3,400,000</span>
                    <span>残り: ¥1,600,000</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Support Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">支援方法</h2>
                <p className="text-muted-foreground">あなたに合った方法でプロジェクトを応援してください</p>
              </div>

              <Tabs defaultValue="donation" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="donation" className="flex items-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>寄付</span>
                  </TabsTrigger>
                  <TabsTrigger value="goods" className="flex items-center space-x-2">
                    <ShoppingBag className="h-4 w-4" />
                    <span>グッズ購入</span>
                  </TabsTrigger>
                  <TabsTrigger value="video" className="flex items-center space-x-2">
                    <Play className="h-4 w-4" />
                    <span>動画視聴</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="donation" className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">寄付でのご支援</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      直接的な資金援助により、プロジェクトの実現を加速させることができます。
                      いただいた寄付は、土地取得やインフラ整備に大切に使わせていただきます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">¥1,000</CardTitle>
                        <CardDescription>気軽に応援</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• お礼メール</li>
                          <li>• 進捗レポート</li>
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          寄付する
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow border-primary/50">
                      <CardHeader className="text-center">
                        <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">人気</Badge>
                        <CardTitle className="text-lg">¥5,000</CardTitle>
                        <CardDescription>しっかり支援</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• お礼メール</li>
                          <li>• 進捗レポート</li>
                          <li>• オリジナルステッカー</li>
                          <li>• 月次オンライン交流会</li>
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          寄付する
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">¥10,000</CardTitle>
                        <CardDescription>本格支援</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 上記すべて</li>
                          <li>• オリジナルトートバッグ</li>
                          <li>• 年次イベント招待</li>
                          <li>• 建設現場見学会</li>
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          寄付する
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center">
                        <CardTitle className="text-lg">¥50,000+</CardTitle>
                        <CardDescription>特別支援</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• 上記すべて</li>
                          <li>• 記念プレート掲示</li>
                          <li>• 個別相談会</li>
                          <li>• 優先入居権</li>
                        </ul>
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                          寄付する
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="goods" className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">グッズ購入でのご支援</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      オリジナルグッズをご購入いただくことで、プロジェクトを支援できます。
                      売上の一部は、プロジェクトの運営資金として活用させていただきます。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4">
                          <img
                            src="/placeholder.svg?key=tshirt"
                            alt="Your Soul Project オリジナルTシャツ"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <CardTitle>オリジナルTシャツ</CardTitle>
                        <CardDescription>¥3,500</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          野草をモチーフにしたデザインのオーガニックコットンTシャツ
                        </p>
                        <Button className="w-full bg-transparent" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          BASEで購入
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg mb-4">
                          <img
                            src="/placeholder.svg?key=tote"
                            alt="Your Soul Project トートバッグ"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <CardTitle>エコトートバッグ</CardTitle>
                        <CardDescription>¥2,800</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          リサイクル素材を使用した環境に優しいトートバッグ
                        </p>
                        <Button className="w-full bg-transparent" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          BASEで購入
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="aspect-square bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg mb-4">
                          <img
                            src="/placeholder.svg?key=sticker"
                            alt="Your Soul Project ステッカーセット"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <CardTitle>ステッカーセット</CardTitle>
                        <CardDescription>¥800</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          野草と自然をテーマにした防水ステッカー5枚セット
                        </p>
                        <Button className="w-full bg-transparent" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          BASEで購入
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="video" className="space-y-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-4">動画視聴でのご支援</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      YouTubeやSoundCloudでコンテンツを視聴・シェアしていただくことで、
                      プロジェクトの認知度向上と広告収益による支援につながります。
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-background border-border">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-red-500/20 rounded-full p-2">
                            <Play className="h-6 w-6 text-red-500" />
                          </div>
                          <div>
                            <CardTitle>YouTube チャンネル</CardTitle>
                            <CardDescription>プロジェクトの進捗や想いを動画で配信</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="aspect-video bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-lg flex items-center justify-center">
                          <Play className="h-12 w-12 text-red-500" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          建設現場の様子、メンバーインタビュー、 エコビレッジでの暮らしについて発信しています。
                        </p>
                        <Button className="w-full bg-transparent" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          YouTubeで視聴
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="bg-background border-border">
                      <CardHeader>
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-orange-500/20 rounded-full p-2">
                            <Play className="h-6 w-6 text-orange-500" />
                          </div>
                          <div>
                            <CardTitle>SoundCloud</CardTitle>
                            <CardDescription>自然音楽とメッセージを音声で配信</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="aspect-video bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center">
                          <Play className="h-12 w-12 text-orange-500" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          自然の音を取り入れた音楽や、 プロジェクトへの想いを音声で配信しています。
                        </p>
                        <Button className="w-full bg-transparent" variant="outline">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          SoundCloudで聴く
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Fund Usage */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">資金の使い道</h2>
                <p className="text-muted-foreground">皆様からのご支援は、以下の用途で大切に活用させていただきます</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/20 rounded-full p-2">
                        <Home className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>土地取得・建設費</CardTitle>
                        <CardDescription>¥3,000,000 (60%)</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={60} className="mb-4" />
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 土地購入費用</li>
                      <li>• 共同住宅建設</li>
                      <li>• コミュニティセンター</li>
                      <li>• 作業場・倉庫</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-secondary/20 rounded-full p-2">
                        <Zap className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <CardTitle>インフラ整備</CardTitle>
                        <CardDescription>¥1,200,000 (24%)</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={24} className="mb-4" />
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 太陽光発電システム</li>
                      <li>• 雨水利用システム</li>
                      <li>• 排水処理設備</li>
                      <li>• 道路・駐車場整備</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-accent/20 rounded-full p-2">
                        <Sprout className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle>農業・環境整備</CardTitle>
                        <CardDescription>¥500,000 (10%)</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={10} className="mb-4" />
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 農地整備</li>
                      <li>• 温室・育苗施設</li>
                      <li>• 農機具・工具</li>
                      <li>• 種子・苗木</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/20 rounded-full p-2">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle>運営・活動費</CardTitle>
                        <CardDescription>¥300,000 (6%)</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Progress value={6} className="mb-4" />
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• イベント開催費</li>
                      <li>• 広報・宣伝費</li>
                      <li>• 事務用品・通信費</li>
                      <li>• 法的手続き費用</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                あなたの支援が
                <span className="text-primary block">未来を変える</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                どんな形でも、あなたの想いがプロジェクトの力になります。 一緒に持続可能な未来を創造しましょう。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Heart className="mr-2 h-5 w-5" />
                  今すぐ寄付する
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  グッズを見る
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                ご質問やご相談がございましたら、お気軽にお問い合わせください。
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ConditionalPage>
  )
}
