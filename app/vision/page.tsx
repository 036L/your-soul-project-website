import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Leaf, Heart, Users, Sprout, Sun, Mountain, ArrowRight } from "lucide-react"
import Link from "next/link"
import { ConditionalPage } from "@/components/conditional-page"

export default function VisionPage() {
  return (
    <ConditionalPage pageId="vision">
      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/30">
                私たちのビジョン
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                野草のように
                <span className="text-primary block">根を張り、花を咲かせる</span>
                コミュニティ
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                現代社会の様々な「依存」から解放され、一人ひとりが本来の力を発揮できる場所。 それがYour Soul
                Projectの目指すエコビレッジです。
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">私たちの物語</h2>
                <p className="text-muted-foreground">なぜYour Soul Projectが生まれたのか</p>
              </div>

              <div className="space-y-16">
                {/* Story Item 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary/20 rounded-full p-2">
                        <Mountain className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">始まりの想い</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      都市部での忙しい生活の中で、私たちは気づきました。 便利さと引き換えに、人間本来の生きる力や、
                      お互いを支え合う温かいつながりを失っているのではないかと。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      そんな時、道端に咲く小さな野草に目が留まりました。
                      誰に世話をされるでもなく、厳しい環境の中でも美しく咲く花。
                      そこに、私たちが目指すべき生き方のヒントがありました。
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                      <img
                        src="/small-wildflowers-growing-through-concrete-cracks-.jpg"
                        alt="都市部のコンクリートの隙間から咲く野草"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Story Item 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative order-2 lg:order-1">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20">
                      <img
                        src="/mother-nurturing-child-in-natural-garden-setting.jpg"
                        alt="自然の中で子どもを見守る母親"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-6 order-1 lg:order-2">
                    <div className="flex items-center space-x-3">
                      <div className="bg-secondary/20 rounded-full p-2">
                        <Heart className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">母性の力</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      野草が教えてくれたもう一つの大切なこと。 それは「母性」の力でした。
                      大地が植物を包み込み、育むように、 私たちは互いを温かく支え合える関係性を築きたい。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      競争ではなく共生を。 奪い合いではなく分かち合いを。
                      そんな母性的な愛情に満ちたコミュニティを目指しています。
                    </p>
                  </div>
                </div>

                {/* Story Item 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-accent/20 rounded-full p-2">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">依存からの脱却</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      現代社会は便利ですが、同時に多くの「依存」を生み出しています。
                      食べ物、エネルギー、情報、人間関係... 私たちは知らず知らずのうちに、自分で考え、
                      行動する力を失っているのかもしれません。
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Your Soul Projectでは、これらの依存から段階的に脱却し、
                      真の自立と相互扶助による豊かな暮らしを実現したいと考えています。
                    </p>
                  </div>
                  <div className="relative">
                    <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-primary/20">
                      <img
                        src="/people-working-together-in-sustainable-community-g.jpg"
                        alt="持続可能なコミュニティガーデンで協力する人々"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4">私たちの哲学</h2>
                <p className="text-muted-foreground">Your Soul Projectを支える3つの柱</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-background border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Leaf className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">野草の精神</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      どんな環境でも根を張り、美しく咲く野草のように。 一人ひとりが持つ本来の力を信じ、
                      それぞれの個性を大切にします。
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• 自然との調和</li>
                      <li>• 個性の尊重</li>
                      <li>• 逞しい生命力</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-secondary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-8 w-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl">母性の愛</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      包み込むような温かさで、 お互いを支え合う関係性を築きます。 競争ではなく共生の精神を大切にします。
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• 無条件の受容</li>
                      <li>• 相互扶助</li>
                      <li>• 温かいつながり</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-background border-border text-center">
                  <CardHeader className="pb-4">
                    <div className="bg-accent/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Sprout className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl">真の自立</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      現代社会の様々な依存から脱却し、 自分で考え、行動する力を取り戻します。
                      持続可能な暮らしを実現します。
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-2 text-left">
                      <li>• 食の自給</li>
                      <li>• エネルギーの自立</li>
                      <li>• 精神的な自由</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision for Future */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">未来への展望</h2>
                <p className="text-muted-foreground">私たちが描く10年後の姿</p>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
                  <img
                    src="/thriving-eco-village-with-sustainable-buildings--g.jpg"
                    alt="10年後のエコビレッジの理想的な風景"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-2xl font-bold mb-2">持続可能な未来のモデル</h3>
                    <p className="text-white/90">
                      100人が暮らすエコビレッジとして、
                      日本の地方創生と持続可能な社会のモデルケースになることを目指しています。
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground flex items-center">
                    <Sun className="mr-2 h-5 w-5 text-primary" />
                    環境への取り組み
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 再生可能エネルギー100%</li>
                    <li>• 有機農業による食料自給率80%</li>
                    <li>• ゼロウェイストの実現</li>
                    <li>• 生物多様性の保全</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-foreground flex items-center">
                    <Users className="mr-2 h-5 w-5 text-secondary" />
                    コミュニティの発展
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 多世代が共に暮らす環境</li>
                    <li>• 教育・医療・介護の相互支援</li>
                    <li>• 地域との積極的な交流</li>
                    <li>• 文化・芸術活動の振興</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl font-bold text-foreground">
                この物語の続きを
                <span className="text-primary block">一緒に紡ぎませんか？</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your Soul Projectは、まだ始まったばかりの物語です。
                あなたの参加が、この物語をより豊かなものにしてくれます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/support">
                    <Heart className="mr-2 h-5 w-5" />
                    プロジェクトを支援する
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Link href="/members">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    メンバーを見る
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ConditionalPage>
  )
}
